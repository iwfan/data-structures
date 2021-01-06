export const search = <T>(list: Array<T>) => (target: T) => {
  return -1;
}

search<string>([])('a')
