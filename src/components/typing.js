export const typingPhrase = "build with care test what breaks keep learning";

export function scoreTyping(target, typed, elapsedMs) {
  const correct = [...typed].filter((character, index) => character === target[index]).length;
  return {
    accuracy: typed.length ? Math.round((correct / typed.length) * 100) : 100,
    wpm: elapsedMs >= 1000 ? Math.round((correct / 5) / (elapsedMs / 60000)) : null,
  };
}
