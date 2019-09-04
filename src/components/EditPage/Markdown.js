import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import codeBlock from "../../utils/codeBlock";
import { Grid } from "@material-ui/core";
import "./Markdown.scss";

class Markdown extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { content } = this.state;
    const { handleChange } = this;
    return (
      <div className="markdown">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            {/* 텍스트 입력칸 */}
            <TextareaAutosize
              className="markdown-textarea"
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* 마크다운 프리뷰 */}
            <ReactMarkdown
              className="markdown-md"
              source={content}
              renderers={{ code: codeBlock }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Markdown;
