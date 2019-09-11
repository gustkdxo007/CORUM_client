import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Container,
  CssBaseline,
  Typography,
  TextField
} from "@material-ui/core";

import useStyles from "../utils/tagStyles";
import Header from "../components/MyPage/Header";
const HashTagPage = ({ history }) => {
  const [tagInfo, setTagInfo] = useState([]);
  const LS_DATA = JSON.parse(localStorage.getItem("userId"));

  const fetchHashTags = async () => {
    let tagInfo = await axios.get(
      "http://52.79.228.73:3000/readAllHashtagList"
    );
    return await setTagInfo(oldValue => ({
      ...oldValue,
      tagInfo
    }));
  };

  const fetchPostListByHashTag = async id => {
    let postHashData = await axios.get(
      `http://52.79.228.73:3000/readPostListbyHashtag/${id}`
    );
    return postHashData;
  };

  const handleClick = id => {
    fetchPostListByHashTag(id).then(res =>
      history.push("/", { tagData: res.data })
    );
  };

  useEffect(() => {
    console.log(history);
    fetchHashTags();
  }, []);
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header userId={LS_DATA.userId} />
        <Grid container className={classes.tagWrapper}>
          <Grid item xs={12} md={12}>
            {tagInfo &&
              tagInfo.tagInfo &&
              tagInfo.tagInfo.data.map(tag => {
                if (tag.count > 10) tag.count = 10;
                const tagClassName = `tag${tag.count}`;
                return (
                  <Typography
                    key={tag.id}
                    display="inline"
                    className={classes[tagClassName]}
                    onClick={() => handleClick(tag.id)}
                  >
                    {tag.name}
                  </Typography>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default HashTagPage;
