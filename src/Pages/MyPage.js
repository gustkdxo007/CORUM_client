import React, { Fragment, useState } from "react";
import {
  Grid,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  TextareaAutosize
} from "@material-ui/core";
import Header from "../components/MyPage/Header";
import useStyles from "../utils/myPageStyles";
import useRequest from "../hooks/useRequest";
import axios from "axios";
const MyPage = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    nickname: "",
    gender: "",
    github_addr: "",
    contact_email: "",
    gitsu: null,
    userImage: null,
    tech: "",
    company: "",
    intro: ""
  });
  const classes = useStyles();
  const [userData, loading, error] = useRequest(
    `http://52.79.228.73:3000/readUserInfo`
  );
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  // TODO: error
  if (error) {
    return (
      <div>
        <h1>ERROR 404</h1>
      </div>
    );
  }
  // TODO: when postData is null, return null
  if (!userData) return null;
  console.log("데이터", userData.data);
  const handleMyInfo = e => {
    const { name, value } = e.target;
    setUserInfo(oldValue => ({
      ...oldValue,
      [name]: value
    }));
  };
  const changeUserInfo = async () => {
    let userData = JSON.parse(localStorage.getItem("userId"));
    console.log("유정정보다", userInfo);
    console.log("아이디다", userData.userId);
    console.log("토큰이다", userData.token);
    await axios.patch("http://52.79.228.73:3000/updateUserInfo", {
      ...userInfo,
      userId: userData.userId,
      token: userData.token
    });
    history.push("/");
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Typography
          component="h2"
          variant="h2"
          color="inherit"
          align="left"
          className={classes.mypage}
          onChange={e => handleMyInfo(e)}
        >
          MyPage
        </Typography>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Avatar
              alt="user-image"
              src="https://thumb.velog.io/resize?url=https://images.velog.io/profiles/geonhwi/thumbnails/1556767094.019.jpeg&width=256"
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              component="h3"
              variant="h3"
              color="inherit"
              align="left"
              className={classes.userId}
              name="nickname"
              onChange={e => handleMyInfo(e)}
            >
              {userData.data[0].nickname}
            </Typography>
          </Grid>
        </Grid>
        <TextField
          id="th"
          className={classes.textField}
          label="기수"
          name="gitsu"
          placeholder="기수를 입력해주세요"
          value={userData.data[0].gitsu}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleMyInfo(e)}
        />
        <TextField
          id="name"
          className={classes.textField}
          label="이름"
          name="userId"
          placeholder="이름을 입력해주세요"
          value={userData.data[0].userId}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleMyInfo(e)}
        />
        <TextField
          id="email"
          className={classes.textField}
          label="이메일"
          name="contact_email"
          placeholder="이메일을 입력해주세요"
          value={userData.data[0].contact_email}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleMyInfo(e)}
        />
        <TextField
          id="phone"
          className={classes.textField}
          label="phone"
          placeholder="전화번호를 입력해주세요"
          value="010-1234-5678"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleMyInfo(e)}
        />
        <TextareaAutosize
          className={classes.textArea}
          type="text"
          name="intro"
          placeholder="소개를 입력해주세요"
          value={userData.data[0].intro}
          onChange={e => handleMyInfo(e)}
          // onChange={handleChange}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
              onClick={changeUserInfo}
            >
              저장하기
            </Button>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Button
              variant="contained"
              color="secondary"
              className={classes.backButton}
            >
              돌아가기
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default MyPage;
