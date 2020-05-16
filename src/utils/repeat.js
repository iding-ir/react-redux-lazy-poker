export const repeat = (count, callback) => {
  for (let i = 1; i <= count; i++) {
    callback();
  }
};
