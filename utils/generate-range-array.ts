export function generateRangeArray({ from, to }: { from: number; to: number }): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}