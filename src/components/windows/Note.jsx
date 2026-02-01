import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWin from "./MacWin";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import noteLink from "../../assets/note.txt";

const Note = ({ setWindowState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch(noteLink)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <MacWin setWindowState={setWindowState} windowKey="note" title="Notes">
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
