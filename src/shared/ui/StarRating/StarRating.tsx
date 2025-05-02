import { classNames } from "@/shared/lib";
import { memo, useCallback, useState } from "react";
import Star from "../../assets/icons/star.svg";
import { HStack } from "../Flex";
import styles from "./StarRating.module.scss";

interface StarRatingProps {
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
    <HStack className={className}>
      {starts.map((star) => (
        <Star
          onMouseEnter={handleStarMouseEnter(star)}
          onMouseLeave={handleStarMouseLeave}
          onClick={handleStarClick(star)}
          className={classNames(
            styles.star,
            { [styles.selected]: star <= selectedStar },
            [],
          )}
          width={size}
          height={size}
          key={star}
        />
      ))}
    </HStack>
  );
});
