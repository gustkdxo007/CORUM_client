import React from 'react';
// TODO: require modules
import { Container, Grid, CssBaseline, Button } from '@material-ui/core';

// TODO: require components
import Markdown from '../components/EditPage/Markdown';
import TextFields from '../components/EditPage/TextFields';

// TODO: require utils
import useStyles from '../utils/editStyles';
import IntegrationReactSelect from '../utils/selectHelper';
import SelectCategory from '../components/EditPage/SelectCategory';

// TODO: Main
const EditPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <form className={classes.form} noValidate>
              {/* Title */}
              <TextFields />
              {/* Tag Select */}
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
              <SelectCategory />
            </form>
          </Grid>
        </Grid>
        <Grid>
          <Markdown />
        </Grid>
      </Container>
    </div>
  );
};

export default EditPage;
