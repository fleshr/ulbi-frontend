import { useAppDispatch, useAppSelector } from "@/shared/model";
import type { FC } from "react";
import { counterActions } from "../../model/counterSlice";
import { getCounterValue } from "../../model/selectors/getCounterValue";

export const Counter: FC = () => {
  const count = useAppSelector(getCounterValue);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
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
