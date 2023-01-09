const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
}
