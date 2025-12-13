type Listener = (step?: number) => void;

const listeners = new Set<Listener>();

export function subscribeOnboarding(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function openOnboarding(step = 1) {
  listeners.forEach((listener) => listener(step));
}
