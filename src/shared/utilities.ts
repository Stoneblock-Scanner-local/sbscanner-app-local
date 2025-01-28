import { formatDistanceToNow } from "date-fns";

export const formatStats = (stat?: number) => {
  if (!stat) return 0;
  switch (true) {
    case stat < 1000:
      return stat;
    case stat < 1_000_000:
      return (stat / 1000).toFixed(0) + " K";
    case stat < 1_000_000_000:
      return (stat / 1_000_000).toFixed(0) + " M";
  }
};

export const timeAgo = (date: Date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
