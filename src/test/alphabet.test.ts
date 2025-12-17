import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { generateAlphabet } from "@/utils/alphabet";

describe("testear generateAlphabet para ver si en realidad funciona", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("deberia de generar el mismo alfabeto para el mismo timestamp", () => {
    const date = new Date("2025-12-25T00:00:00Z");
    vi.setSystemTime(date);

    const alphabet1 = generateAlphabet().join("");
    const alphabet2 = generateAlphabet().join("");

    expect(alphabet1).toEqual(alphabet2);
  });

  it("debería generar alfabetos diferentes para tiempos diferentes", () => {
    vi.setSystemTime(new Date("2025-12-25T00:00:00Z"));
    const alphabet1 = generateAlphabet().join("");

    // Adelantamos el reloj un milisegundo
    vi.setSystemTime(new Date("2025-12-25T00:00:00.001Z"));
    const alphabet2 = generateAlphabet().join("");

    expect(alphabet1).not.toEqual(alphabet2);
  });
});
