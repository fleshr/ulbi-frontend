import type { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { getCounterValue } from "../../model/selectors/getCounterValue";
import { decrement, increment } from "../../model/counterSlice";

export const Counter: FC = () => {
  const count = useAppSelector(getCounterValue);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p data-testid="Counter.Value">{count}</p>
      <button data-testid="Counter.IncrementBtn" onClick={handleIncrement}>
        INC
      </button>
      <button data-testid="Counter.DecrementBtn" onClick={handleDecrement}>
        DEC
      </button>
    </div>
  );
};
