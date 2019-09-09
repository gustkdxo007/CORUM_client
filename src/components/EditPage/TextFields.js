import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";
const TextFields = ({ handleTitle }) => {
  return (
    <Fragment>
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="title"
        name="title"
        label="Title"
        onChange={handleTitle}
        autoFocus
      />
      {/* Subtitle */}
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="subTitle"
        name="subTitle"
        label="SubTitle"
        onChange={handleTitle}
        type="subTitle"
      />
    </Fragment>
  );
};

export default TextFields;
