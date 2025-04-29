import { api } from "@/shared/api";
import { renderWithProviders } from "@/shared/lib/tests";
import { userEvent } from "@storybook/test";
import { mockProfileFormState } from "../../mock/profileFormState";
import { EditableProfileCard } from "./EditableProfileCard";

const options = {
  preloadedState: {
    user: { user: { id: "1", username: "user" }, _initialized: true },
    profileForm: mockProfileFormState,
  },
};

describe("Button", () => {
  it("Click edit button disable readonly", async () => {
    const { getByTestId } = renderWithProviders(
      <EditableProfileCard profileId="1" />,
      options,
    );

    await userEvent.click(getByTestId("EditableProfileCardHeader.EditButton"));

    expect(
      getByTestId("EditableProfileCardHeader.SaveButton"),
    ).toBeInTheDocument();
  });

  it("Cancel button resets to previous values", async () => {
    const { getByTestId } = renderWithProviders(
      <EditableProfileCard profileId="1" />,
      options,
    );

    await userEvent.click(getByTestId("EditableProfileCardHeader.EditButton"));

    await userEvent.clear(getByTestId("ProfileCard.Firstname.Input"));
    await userEvent.clear(getByTestId("ProfileCard.Lastname.Input"));

    await userEvent.type(getByTestId("ProfileCard.Firstname.Input"), "user");
    await userEvent.type(getByTestId("ProfileCard.Lastname.Input"), "user");

    await userEvent.click(
      getByTestId("EditableProfileCardHeader.CancelButton"),
    );

    expect(getByTestId("ProfileCard.Firstname.Input")).toHaveValue("John");
    expect(getByTestId("ProfileCard.Lastname.Input")).toHaveValue("Doe");
  });

  it("Show error on save with invalid fields", async () => {
    const { getByTestId } = renderWithProviders(
      <EditableProfileCard profileId="1" />,
      options,
    );

    await userEvent.click(getByTestId("EditableProfileCardHeader.EditButton"));

    await userEvent.clear(getByTestId("ProfileCard.Firstname.Input"));

    await userEvent.click(getByTestId("EditableProfileCardHeader.SaveButton"));

    expect(getByTestId("EditableProfileCard.Error.0")).toBeInTheDocument();
  });

  it("PUT request on save", async () => {
    const spy = jest.spyOn(api, "put");
    const { getByTestId } = renderWithProviders(
      <EditableProfileCard profileId="1" />,
      options,
    );

    await userEvent.click(getByTestId("EditableProfileCardHeader.EditButton"));
    await userEvent.click(getByTestId("EditableProfileCardHeader.SaveButton"));

    expect(spy).toHaveBeenCalled();
  });
});
