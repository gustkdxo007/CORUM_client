import React, { useState } from "react";
// TODO: require modules
import { Container, Grid, CssBaseline, Button } from "@material-ui/core";

// TODO: require components
import Markdown from "../components/EditPage/Markdown";
import TextFields from "../components/EditPage/TextFields";

// TODO: require utils
import useStyles from "../utils/editStyles";
import IntegrationReactSelect from "../utils/selectHelper";
import SelectCategory from "../components/EditPage/SelectCategory";

// TODO: Main
const EditPage = () => {
  const [postData, setPostData] = useState({
    title: "",
    subTitle: "",
    contents: "",
    category: "",
    poster: ""
  });
  const [categoryName, setCategoryName] = useState({
    category: ""
  });

  const { title, subTitle, contents, category, poster } = postData;
  const classes = useStyles();
  const handleTitle = e => {
    const { name, value } = e.target;
    setPostData(oldData => ({
      ...oldData,
      [name]: value
    }));
    console.log(postData);
  };
  const handleCategory = e => {
    const { name, value } = e.target;
    setPostData(oldData => ({
      ...oldData,
      [name]: value
    }));
    setCategoryName(oldCategory => ({
      ...oldCategory,
      [name]: value
    }));
    console.log(categoryName);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <form className={classes.form} noValidate>
              {/* Title */}
              <TextFields handleTitle={e => handleTitle(e)} />
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
              <SelectCategory
                categoryName={categoryName}
                handleCategory={e => handleCategory(e)}
              />
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
