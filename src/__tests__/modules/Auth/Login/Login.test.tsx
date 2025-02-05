import { Login } from "@/modules/Auth/components/Login";
import { screen } from "@testing-library/react";
import { describe, test, expect, vi, afterEach } from "vitest";
import { renderWithRouter } from "@/__tests__/renderWithRouter";

const loginMock = vi.fn();

vi.mock("@/store/storeAuth", () => ({
  useAuthStore: vi.fn(() => ({
    login: loginMock,
  })),
}));

const callBackProp = vi.fn();

const mockLoginData = {
  email: "test@test.com",
  password: "123456",
};

const route = "/auth";

describe("Компонент Login", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Проверка рендера компонента", () => {
    renderWithRouter(<Login callback={callBackProp} />, { route });
    expect(screen.getByRole("heading", { name: "Войдите" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Войти" })).toBeInTheDocument();
    screen.debug();
  });

  test("Проверка формы логина", async () => {
  const { user } = renderWithRouter(<Login callback={callBackProp} />, { route });

    const inputEmail = screen.getByPlaceholderText("Email");
    const inputPassword = screen.getByPlaceholderText("Password");
    const button = screen.getByRole("button", { name: "Войти" });

    await user.type(inputEmail, mockLoginData.email);
    await user.type(inputPassword, mockLoginData.password);

    expect(inputEmail).toHaveValue(mockLoginData.email);
    expect(inputPassword).toHaveValue(mockLoginData.password);

    await user.click(button);

    expect(loginMock).toHaveBeenCalledTimes(1);
    expect(loginMock).toHaveBeenCalledWith(mockLoginData);
  });
});
