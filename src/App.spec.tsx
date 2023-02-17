import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("App", () => {
  it("should have Hello World on button click", async () => {
    render(<App />);

    await act(async () => {
      await userEvent.click(screen.getByTestId("button__show-message"));
    });

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
