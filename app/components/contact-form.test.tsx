import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "./contact-form";

describe("ContactForm", () => {
  it("shows validation errors for an empty submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Please enter your name.")).toBeInTheDocument();
    expect(
      screen.getByText("Please enter a valid email address."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please choose the type of project."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/at least 20 characters/i),
    ).toBeInTheDocument();
  });

  it("submits valid details and shows the success state", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/^Name/), "Alex Morgan");
    await user.type(screen.getByLabelText(/^Email/), "alex@example.com");
    await user.type(screen.getByLabelText(/Company/), "Northline");
    await user.selectOptions(
      screen.getByLabelText(/^Project type/),
      "Brand and website",
    );
    await user.type(
      screen.getByLabelText(/Tell us about the project/),
      "We need a clearer marketing site for our next product launch.",
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    const status = await screen.findByRole("status", undefined, {
      timeout: 3000,
    });
    expect(status).toHaveTextContent(/Thanks, Alex/);
    expect(status).toHaveTextContent(/Static demo/i);
  });
});
