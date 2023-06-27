let finalValue = '';
let timeoutId: number | undefined | NodeJS.Timeout;

export default function debounceSet(setFunc: Function, value: string) {
  finalValue = value;

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => setFunc(finalValue), 200);
}