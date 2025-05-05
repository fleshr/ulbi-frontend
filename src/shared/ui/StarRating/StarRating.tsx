import Star from "@/shared/assets/icons/star.svg";
import { TestProps } from "@/shared/types";
import { memo, useCallback, useState } from "react";
import { HStack } from "../Flex";
import styles from "./StarRating.module.scss";

interface StarRatingProps extends TestProps {
  className?: string;
  size?: number;
  selected: number;
  onSelect: (starNumber: number) => void;
}

const starts = [1, 2, 3, 4, 5];

export const StarRating = memo(function StarRating({
  className,
  size = 30,
  selected,
  onSelect,
  "data-testid": dataTestId = "StarRating",
}: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const selectedStar = hoveredStar || selected;

  const handleStarMouseEnter = useCallback(
    (star: number) => () => {
      setHoveredStar(star);
    },
    [],
  );

  const handleStarMouseLeave = useCallback(() => {
    setHoveredStar(0);
  }, []);

  const handleStarClick = useCallback(
    (star: number) => () => {
      onSelect(star);
    },
    [onSelect],
  );

  return (
    <HStack data-testid={dataTestId} className={className}>
      {starts.map((star) => (
        <Star
          data-selected={star <= selectedStar}
          data-testid={`${dataTestId}.Star.${String(star)}`}
          onMouseEnter={handleStarMouseEnter(star)}
          onMouseLeave={handleStarMouseLeave}
          onClick={handleStarClick(star)}
          className={styles.star}
          width={size}
          height={size}
          key={star}
        />
      ))}
    </HStack>
  );
});
