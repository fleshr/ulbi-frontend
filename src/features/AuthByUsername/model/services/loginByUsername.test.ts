import { setUser } from "@/entities/User";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("loginByUsername", () => {
  it("succees", async () => {
    mockedAxios.post.mockResolvedValue(
      Promise.resolve({ data: { id: "1", username: "123" } }),
    );
    const dispatch: Dispatch = jest.fn();
    const getState: () => unknown = jest.fn();
    const action = loginByUsername({ username: "123", password: "123" });
    const res = await action(dispatch, getState, { api: mockedAxios });

    expect(dispatch).toHaveBeenCalledWith(
      setUser({ id: "1", username: "123" }),
    );
    expect(dispatch).toHaveBeenCalledTimes(3);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual({ id: "1", username: "123" });
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("error", async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));
    const dispatch: Dispatch = jest.fn();
    const getState: () => unknown = jest.fn();
    const action = loginByUsername({ username: "123", password: "123" });
    const res = await action(dispatch, getState, { api: mockedAxios });

    expect(dispatch).toHaveBeenCalledTimes(2);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(res.payload).toBe("error");
    expect(res.meta.requestStatus).toBe("rejected");
  });
});
