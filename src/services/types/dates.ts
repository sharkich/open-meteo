import { Optional } from './assert';

export const normalizeDate = (date: Optional<Date | string>): string | null => {
  if (!date) {
    return null;
  }

  const d = new Date(date);

  return d?.toLocaleDateString('en-US') ?? null;
};

export const normalizeTime = (date: Optional<Date | string>): string | null => {
  if (!date) {
    return null;
  }

  const d = new Date(date);

  return d?.toLocaleTimeString('en-US') ?? null;
};
