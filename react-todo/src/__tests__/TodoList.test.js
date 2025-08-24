import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Eat food")).toBeInTheDocument();
  expect(screen.getByText("Play ball")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add new todo"), {
    target: { value: "Sleep" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Sleep")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Eat food");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText("❌")[0]);
  expect(screen.queryByText("Eat food")).not.toBeInTheDocument();
});
