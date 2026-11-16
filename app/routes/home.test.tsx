import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Home from "./home";

vi.mock("../lib/supabase", () => ({
  isSupabaseConfigured: true,
  getSupabase: () => ({}),
}));

vi.mock("../lib/registrations", () => ({
  isValidPhone: (phone: string) => /^0\d{9}$/.test(phone),
  createRegistration: vi.fn(async () => undefined),
}));

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
  });

  it("places the registration form at the top of the page", () => {
    renderHome();

    expect(
      screen.getByRole("heading", { name: /nhận lộ trình học qua zalo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /đăng ký ngay/i }),
    ).toBeInTheDocument();
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
