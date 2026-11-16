import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RegistrationForm } from "./registration-form";

vi.mock("../lib/supabase", () => ({
  isSupabaseConfigured: true,
  getSupabase: () => ({}),
}));

vi.mock("../lib/registrations", () => ({
  isValidPhone: (phone: string) => /^0\d{9}$/.test(phone),
  createRegistration: vi.fn(async () => ({
    id: "1",
    full_name: "Nguyễn Minh Anh",
    phone: "0901234567",
    created_at: new Date().toISOString(),
  })),
}));

describe("RegistrationForm", () => {
  it("shows validation errors for an empty submission", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    await user.click(screen.getByRole("button", { name: /đăng ký ngay/i }));

    expect(
      await screen.findByText("Vui lòng nhập họ và tên của bạn."),
    ).toBeInTheDocument();
    expect(screen.getByText("Vui lòng nhập số điện thoại.")).toBeInTheDocument();
  });

  it("rejects a phone number that is not 10 digits starting with 0", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    await user.type(screen.getByLabelText(/họ và tên/i), "Nguyễn Minh Anh");
    await user.type(screen.getByLabelText(/số điện thoại/i), "12345");
    await user.click(screen.getByRole("button", { name: /đăng ký ngay/i }));

    expect(
      await screen.findByText(
        "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0.",
      ),
    ).toBeInTheDocument();
  });

  it("submits valid details and shows the success state", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    await user.type(screen.getByLabelText(/họ và tên/i), "Nguyễn Minh Anh");
    await user.type(screen.getByLabelText(/số điện thoại/i), "0901234567");
    await user.click(screen.getByRole("button", { name: /đăng ký ngay/i }));

    const status = await screen.findByRole("status", undefined, {
      timeout: 3000,
    });
    expect(status).toHaveTextContent(/Đăng ký thành công/);
    expect(status).toHaveTextContent(/Zalo/);
  });
});
