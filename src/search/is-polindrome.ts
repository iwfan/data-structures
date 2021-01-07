export const isPalindrome = (str: string): boolean => {

  const char_list = str.split('');

  let start = 0, end = char_list.length - 1;

  const specialCharRex = /[\s|,|.]/

  while (start <= end) {

    if (specialCharRex.test(char_list[start])) {
      start++;
    } else if (specialCharRex.test(char_list[end])) {
      end--;
    } else {
      if (char_list[start] !== char_list[end]) {
        return false;
      }

      start++;
      end--;
    }
  }

  return true;
}
