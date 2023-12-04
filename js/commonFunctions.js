// The display function which is used in many files
export function toggleDisplay(element, condition) {
  if (condition) {
      if (element.classList.contains('display-none')) {
          element.classList.remove('display-none');
      }
  } else {
      if (!element.classList.contains('display-none')) {
          element.classList.add('display-none');
      }
  }
}