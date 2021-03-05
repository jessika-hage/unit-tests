export const hashtags = (text) => {
    const hashtag = text.split(" ").filter((word) => {
        if(/#/.test(word)) return word
      });
      return hashtag;
}

