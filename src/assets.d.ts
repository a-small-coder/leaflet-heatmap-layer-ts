declare module '*.svg' {
  const content: any
  export default content
}

export function useAsyncEffect(
  effect: (isActive: () => boolean) => unknown | Promise<unknown>,
  inputs?: any[]
): void;

export function useAsyncEffect<V>(
  effect: (isActive: () => boolean) => V | Promise<V>,
  destroy?: (result?: V) => void,
  inputs?: any[]
): void;

export default useAsyncEffect;