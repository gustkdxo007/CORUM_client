import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { drakula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const codeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={drakula}>
      {value}
    </SyntaxHighlighter>
  );
};

export default codeBlock;
