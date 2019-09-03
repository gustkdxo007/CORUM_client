import React from 'react';
import { Container, Grid, CssBaseline, TextField } from '@material-ui/core';
import useStyles from '../utils/editStyles';
import IntegrationReactSelect from '../utils/selectHelper';

const EditPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <form className={classes.form} noValidate>
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
              {/* 태그 들어갈 자리 */}
              <IntegrationReactSelect />
            </form>
          </Grid>
          <Grid item xs={12} md={3}>
            DEF
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EditPage;
