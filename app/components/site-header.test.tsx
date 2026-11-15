import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

function renderHeader() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <SiteHeader />
    </MemoryRouter>,
  );
}

describe("SiteHeader", () => {
  it("marks the current route as active", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("toggles the mobile navigation and closes it with Escape", async () => {
    const user = userEvent.setup();
    renderHeader();

    expect(
      screen.queryByRole("navigation", { name: "Mobile" }),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /open navigation menu/i }),
    );

    expect(
      screen.getByRole("navigation", { name: "Mobile" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /close navigation menu/i }),
    ).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");

    expect(
      screen.queryByRole("navigation", { name: "Mobile" }),
    ).not.toBeInTheDocument();
  });
});
