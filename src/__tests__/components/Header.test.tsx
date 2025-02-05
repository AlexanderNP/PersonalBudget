import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { Header } from "@/components/Header";

describe("Компонент Header", () => {
  const mockProps = {
    totalBudget: 1000,
    userName: "John Doe",
    callback: vi.fn(),
  };

  test("Рендер с передачей пропса бюджета", () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText("Общее состояние: 1000")).toBeInTheDocument();
  });

  test("Рендер с передачей юзернейма", () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("Клик и вызов функции logout", () => {
    render(<Header {...mockProps} />);
    const logoutIcon = screen.getByRole("img", { name: /logout/i });
    fireEvent.click(logoutIcon);
    expect(mockProps.callback).toHaveBeenCalledTimes(1);
  });
});
