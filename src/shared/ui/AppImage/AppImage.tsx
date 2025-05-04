import {
  memo,
  useLayoutEffect,
  useState,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

export const AppImage = memo(function AppImage({
  fallback,
  errorFallback,
  src = "",
  ...props
}: AppImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (isError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} {...props} />;
});
