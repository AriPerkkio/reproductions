export function fly() {
  return "Flying!";
}

export function land(force: boolean) {
  if (force) return "Forcing landing";

  return "Landing safely";
}
