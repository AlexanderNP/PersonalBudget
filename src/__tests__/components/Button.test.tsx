import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "@/components/Button";

const TextButton = "Текст кнопки";
const Role = "button";

describe("Компонент Button", () => {
  test("Рендер с текстом", () => {
    render(<Button children={TextButton} />);
    const button = screen.getByRole(Role);
    expect(button).toHaveTextContent(TextButton);
  });

  test("Рендер с заданнными стилями", () => {
    const style = { backgroundColor: "#1677ff", fontSize: "32px" };
    render(
      <Button
        children={TextButton}
        style={style}
      />,
    );
    const button = screen.getByRole(Role);
    expect(button).toHaveStyle(style);
  });

  test("Рендер с переданной функией", () => {
    const handleClick = vi.fn();
    render(
      <Button
        children={TextButton}
        callback={handleClick}
      />,
    );
    fireEvent.click(screen.getByRole(Role));
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
