import React from "react";

const allowedKeys = [
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  " ",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Insert",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "Cntl",
];

export const formatNumberInput = (
  event: React.KeyboardEvent<HTMLInputElement>,
  allowDot: boolean = false
) => {
  if (event.ctrlKey || event.metaKey) {
    const ctrlCombos = ["a", "c", "v", "x", "z", "y"];
    if (ctrlCombos.includes(event.key.toLowerCase())) {
      return;
    }
  }

  if (allowedKeys.includes(event.key)) {
    return;
  }

  const isDot = event.key === ".";
  if (isDot && allowDot) {
    const target = event.target as HTMLInputElement;
    if (target.value.includes(".")) {
      event.preventDefault();
      return;
    }
    return;
  }

  if (!/[0-9\s]/.test(event.key)) {
    event.preventDefault();
  }
};

export const formatNameInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (allowedKeys.includes(e.key)) {
    return;
  }

  if (!/[a-zA-Zа-яА-Я\s]/.test(e.key)) {
    e.preventDefault();
  }
};
