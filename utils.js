import { formatDistance } from 'date-fns';

export const ago = (timestamp) => {
  return formatDistance(new Date(timestamp), new Date())
    .replace(' days', 'd')
    .replace('less than a minute', 'just now')
    .replace(' minute', 'm');
};
