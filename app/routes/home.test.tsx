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
        name: /học lập trình từ con số 0/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /sáu chủ đề đưa bạn từ số 0/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /học đúng cách ngay từ/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /những bước tiến đầu tiên/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /tìm hiểu tư duy lập trình/i }),
    ).toHaveAttribute("href", "/lo-trinh#tu-duy-lap-trinh");
  });

  it("cycles through testimonials", async () => {
    const user = userEvent.setup();
    renderHome();

    expect(screen.getByText(/mình chưa từng viết code/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /đánh giá tiếp theo/i }),
    );

    expect(
      screen.getByText(/cách giải thích rất dễ hiểu/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/mình chưa từng viết code/i),
    ).not.toBeInTheDocument();
  });
});
