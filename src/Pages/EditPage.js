import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
const EditPage = ({ location, history }) => {
  const [postData, setPostData] = useState({
    title: "",
    subTitle: "",
    contents: "",
    category: "",
    userId: "codestates",
    hashtag: null
  });
  const [categoryName, setCategoryName] = useState({
    category: ""
  });
  const [contents, setContent] = useState({ contents: "" });

  const [multi, setMulti] = useState(null);

  const handleChangeMulti = value => {
    setMulti(value);
    let hash = [];
    if (multi) {
      hash = multi.map(v => v.value);
    }
    setPostData(oldValue => ({
      ...oldValue,
      hashtag: hash
    }));
  };

  const handleMarkdown = e => {
    const { name, value } = e.target;
    setPostData(oldValue => ({
      ...oldValue,
      [name]: value
    }));
    setContent(oldValue => ({
      ...oldValue,
      [name]: value
    }));
  };

  const handleTitle = e => {
    const { name, value } = e.target;
    setPostData(oldData => ({
      ...oldData,
      [name]: value
    }));
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
  };

  const handlePost = async () => {
    let userData = JSON.parse(localStorage.getItem("userId"));

    await axios.post("http://52.79.228.73:3000/createPostHashtag", {
      ...postData,

      userId: userData.userId,
      access_token: userData.access_token
    });
    history.push(`/category/${postData.category}`);
    window.location.reload(true);
  };

  const classes = useStyles();
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
              <IntegrationReactSelect
                multi={multi}
                handleChangeMulti={value => handleChangeMulti(value)}
              />
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
                onClick={handlePost}
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
          <Markdown
            contents={contents}
            handleMarkdown={e => handleMarkdown(e)}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default EditPage;
