import React from "react";
import { TextField } from "@material-ui/core";
const TextFields = () => {
  return (
    <div>
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="title"
        name="title"
        label="Title"
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
        type="subTitle"
      />
    </div>
  );
};

export default TextFields;
