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
const SelectCategory = () => {
  const classes = useStyles();
  // TODO: category hooks
  const [values, setValues] = useState({
    category: ""
  });
  // TODO: category select 윤곽선 넓이 조절
  const [labelWidth, setLabelWidth] = useState(0);
  const inputLabel = useRef(null);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(oldValues => ({
      ...oldValues,
      [name]: value
    }));
  };
  return (
    <div>
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel} ref={inputLabel}>
          Category
        </InputLabel>
        <Select
          value={values.category}
          onChange={handleChange}
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
