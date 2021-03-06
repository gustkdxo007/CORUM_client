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
          <MenuItem value={"development"}>Development</MenuItem>
          <MenuItem value={"project"}>Co-project</MenuItem>
          <MenuItem value={"newestit"}>Newest IT</MenuItem>
          <MenuItem value={"hottechissue"}>Hot Tech Issue</MenuItem>
          <MenuItem value={"mycompany"}>My Company</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategory;
