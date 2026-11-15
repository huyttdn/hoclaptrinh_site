import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Home from "./home";

function renderHome() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>,
  );
}

describe("Home route", () => {
  it("renders the core landing page sections", () => {
    renderHome();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /digital products that make complex ideas feel/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /one team from first idea to final launch/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /senior attention, without the agency theatre/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /good work\. better partnerships/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore brand & strategy/i }),
    ).toHaveAttribute("href", "/services#brand-strategy");
  });

  it("cycles through testimonials", async () => {
    const user = userEvent.setup();
    renderHome();

    expect(screen.getByText(/turn a vague idea/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /next testimonial/i }));

    expect(screen.getByText(/our new site is faster/i)).toBeInTheDocument();
    expect(screen.queryByText(/turn a vague idea/i)).not.toBeInTheDocument();
  });
});
