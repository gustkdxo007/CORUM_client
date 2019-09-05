import React, { Fragment } from "react";
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
const MyPage = () => {
  const classes = useStyles();
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
            >
              Geonhwi
            </Typography>
          </Grid>
        </Grid>
        <TextField
          id="th"
          className={classes.textField}
          label="기수"
          placeholder="기수를 입력해주세요"
          value="14"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="name"
          className={classes.textField}
          label="이름"
          placeholder="이름을 입력해주세요"
          value="정건휘"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="email"
          className={classes.textField}
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value="g01063962671@gmail.com"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
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
        />
        <TextareaAutosize
          className={classes.textArea}
          type="text"
          name="content"
          placeHolder="소개를 입력해주세요"
          // value={content}
          // onChange={handleChange}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
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
