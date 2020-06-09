export const TrimText = (data, length) => {
  return data.length > length ? data.slice(1, length) + "..." : data;
};
