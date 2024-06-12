export const useTextFormat = () => {
  function textFormat(text: string): string {
    return text.split(" ").join("");
  }

  return { textFormat };
};
