import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Modal } from "@/components/Modal";

describe("Компонент Modal", () => {
  const mockProps = {
    title: "Название модалки",
    toggle: vi.fn(),
    children: <div>Содержимое модалки</div>,
  };

  test("Открытие Modal", () => {
    const isOpen = true;

    render(
      <Modal
        isOpen={isOpen}
        {...mockProps}
      />,
    );

    const modal = screen.getByTestId("modal");
    const children = screen.getByText("Содержимое модалки");

    expect(modal).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  test("Закрытие Modal", () => {
    const isOpen = false;

    render(
      <Modal
        isOpen={isOpen}
        {...mockProps}
      />,
    );

    const modal = screen.queryByTestId("modal");
    const children = screen.queryByText("Содержимое модалки");

    expect(modal).toBeNull();
    expect(children).toBeNull();
  });
});
