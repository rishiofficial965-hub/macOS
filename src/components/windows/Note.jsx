import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWin from "./MacWin";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Note = () => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <MacWin>
      <div className="p-1 h-full overflow-scroll text-sm pb-10 scrollbar-hidden">
        {markdown ? (
          <SyntaxHighlighter
            className="scrollbar-hidden !bg-black/10 font-extrabold "
            language="typescript"
            style={atelierDuneDark}
          >
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWin>
  );
};

export default Note;
