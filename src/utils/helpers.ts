export const textCut = (text: string, limit: number): string => {
  if (limit <= 0) {
    throw new Error('Limit should be greater than zero');
  }

  text = text.trim();

  if (text.length <= limit) {
    return text;
  }

  return text.slice(0, limit).trim() + '...';
};
