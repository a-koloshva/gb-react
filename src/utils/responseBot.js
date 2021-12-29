export const ResponseBot = () => {
  const arrayMessages = ["Что?", "Кто это?"];
  const randomNumber = Math.floor(Math.random() * arrayMessages.length);
  return arrayMessages[randomNumber];
};
