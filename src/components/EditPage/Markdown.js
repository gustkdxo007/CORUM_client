import React from "react";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import codeBlock from "../../utils/codeBlock";
import { Grid } from "@material-ui/core";
import "./Markdown.scss";

const Markdown = ({ contents, handleMarkdown }) => {
  return (
    <div className="markdown">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          {/* 텍스트 입력칸 */}
          <TextareaAutosize
            className="markdown-textarea"
            type="text"
            name="contents"
            onChange={handleMarkdown}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* 마크다운 프리뷰 */}
          <ReactMarkdown
            className="markdown-md"
            source={contents.contents}
            renderers={{ code: codeBlock }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Markdown;
