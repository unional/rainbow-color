import { getRGB, Color } from './getRGB'

// `toHex()` is small enough to justify to keep in the library.
// It slightly violates SRP.
export * from './toHex'
export { Color }

/**
 * Create rainbow of colors
 * @returns array of [r,g,b]
 */
export function create(numberOfColors: number) {
  if (numberOfColors < 0) {
    throw new Error('Number of colors must be non-negative')
  }

  let rainbow: Color[] = []
  for (let i = 0; i < numberOfColors; ++i) {
    rainbow.push(getRGB(i / numberOfColors))
  }
  return rainbow
}
