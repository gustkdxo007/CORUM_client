import React, { useState, useEffect, useRef } from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput
} from "@material-ui/core";

// TODO: require utils
import useStyles from "../../utils/editStyles";
const SelectCategory = ({ categoryName, handleCategory }) => {
  const classes = useStyles();
  // TODO: category hooks

  // TODO: category select 윤곽선 넓이 조절
  const [labelWidth, setLabelWidth] = useState(0);
  const inputLabel = useRef(null);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel} ref={inputLabel}>
          Category
        </InputLabel>
        <Select
          value={categoryName.category}
          onChange={handleCategory}
          input={<OutlinedInput labelWidth={labelWidth} name="category" />}
        >
          <MenuItem value={"Developer"}>Developer</MenuItem>
          <MenuItem value={"Co-project"}>Co-project</MenuItem>
          <MenuItem value={"Newest IT"}>Newest IT</MenuItem>
          <MenuItem value={"Hot Tech Issue"}>Hot Tech Issue</MenuItem>
          <MenuItem value={"My Company"}>My Company</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategory;
