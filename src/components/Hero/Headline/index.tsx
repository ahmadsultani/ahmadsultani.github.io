import { useMemo, useState, useEffect } from "react";

export default function Headline() {
  const texts = useMemo(() => ["Front End Dev", "Problem Solver"], []);
  const [text, setText] = useState(texts[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [headline, setHeadline] = useState("\u200B");
  const [counter, setCounter] = useState(0);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (isInitialRender) {
      sleep(3000).then(() => {
        setIsTyping(true);
        setIsInitialRender(false);
      });
    } else {
      const timeout = setTimeout(() => {
        if (isTyping && headline !== text) {
          setHeadline(text.slice(0, headline.length + 1));
        } else if (isTyping && headline === text) {
          sleep(2000).then(() => {
            setIsTyping(false);
            setCounter((prev) => (prev + 1) % texts.length);
          });
        } else if ((!isTyping && headline === text) || !isTyping) {
          setHeadline(text.slice(0, headline.length - 1));
          if (headline.length <= 1) {
            setText(texts[counter]);
            setIsTyping(true);
          }
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [headline, isTyping, counter, texts, text, isInitialRender]);

  return (
    <h1 className="title-font font-semibold text-6xl text-transparent headline">
      {headline}
    </h1>
  );
}
