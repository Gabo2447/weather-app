export const generateAlphabet = (): string[] => {
  const baseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const timestamp = Date.now();

  // Usamos el timestamp para desordenar de forma determinista
  for (let i = baseAlphabet.length - 1; i > 0; i--) {
    // El índice 'j' dependerá solo del timestamp y de la posición actual
    const j = (timestamp + i) % (i + 1);
    [baseAlphabet[i], baseAlphabet[j]] = [baseAlphabet[j], baseAlphabet[i]];
  }

  return baseAlphabet;
};
