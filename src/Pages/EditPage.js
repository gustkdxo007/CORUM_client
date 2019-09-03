import React from 'react';
import {
  Container,
  Grid,
  CssBaseline,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput
} from '@material-ui/core';
import useStyles from '../utils/editStyles';
import IntegrationReactSelect from '../utils/selectHelper';

const EditPage = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    category: ''
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <form className={classes.form} noValidate>
              {/* Title */}
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="Title"
                label="Title"
                name="title"
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
              {/* Tags Select */}
              <IntegrationReactSelect />
            </form>
          </Grid>
          <Grid item xs={12} md={3}>
            {/* form with button & select */}
            <form className={classes.root} autoComplete="off">
              {/* 작성하기 버튼 */}
              <Button
                variant="contained"
                color="primary"
                className={classes.submitButton}
                fullWidth
              >
                작성하기
              </Button>
              {/* 임시저장 버튼 */}
              <Button
                variant="contained"
                color="secondary"
                className={classes.saveButton}
                fullWidth
              >
                저장하기
              </Button>
              {/* 카테고리 Select */}
              <FormControl
                fullWidth
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel className={classes.inputLabel} ref={inputLabel}>
                  Category
                </InputLabel>
                <Select
                  value={values.category}
                  onChange={handleChange}
                  input={
                    <OutlinedInput labelWidth={labelWidth} name="category" />
                  }
                >
                  <MenuItem value={'Developer'}>Developer</MenuItem>
                  <MenuItem value={'Co-project'}>Co-project</MenuItem>
                  <MenuItem value={'Newest IT'}>Newest IT</MenuItem>
                  <MenuItem value={'Hot Tech Issue'}>Hot Tech Issue</MenuItem>
                  <MenuItem value={'My Company'}>My Company</MenuItem>
                </Select>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EditPage;
