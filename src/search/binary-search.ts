export const search = <T>(list: Array<T>) => (target: T) => {

  // The prepare sort step is required;
  list.sort()

  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = (start + end) >> 1;
    const num = list[mid];

    if (num < target) {
      start = mid + 1;
    }

    if (num > target) {
      end = mid - 1;
    }

    if (num === target) return mid;
  }

  return -1;
}
