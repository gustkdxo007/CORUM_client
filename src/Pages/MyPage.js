import React, { Fragment, useState, useEffect } from "react";
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
import axios from "axios";

// fetch();
// console.log(localData);
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

  const localData = JSON.parse(localStorage.getItem("userId"));

  useEffect(async () => {
    const res = await axios.post("http://52.79.228.73:3000/readUserInfo", {
      userId: localData.userId,
      access_token: localData.access_token
    });
    let data = res.data;
    console.log("서버에서 받는값", data);
    await setUserInfo(data);
    console.log("fdsfasfasf", userInfo);
  }, []);
  const handleChange = e => {
    const { name, value } = e.target;
    setUserInfo(oldValue => ({
      ...oldValue,
      [name]: value
    }));
    console.log(userInfo);
  };

  const handleClick = () => {
    history.push("/");
    window.location.reload(true);
  };
  console.log("뭐가나올까", userInfo);
  const postUpdate = async () => {
    console.log("보여줘봐라", {
      ...userInfo,
      userId: localData.userId,
      access_token: localData.access_token
    });
    await axios.patch("http://52.79.228.73:3000/updateUserInfo", {
      ...userInfo,
      userId: localData.userId,
      access_token: localData.access_token,
      userImage: ""
    });
    console.log("보낼때", userInfo);
    history.push("/mypage");
    window.location.reload(true);
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
        >
          MyPage
        </Typography>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Avatar
              alt="user-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6hz-n7NfgHufUzvz9-lGcRUxuZoi1jmXPmUx89DuTRwPHaC8"
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
              name="userId"
              onChange={e => handleChange(e)}
            >
              {userInfo.userId}
            </Typography>
          </Grid>
        </Grid>
        <TextField
          id="th"
          className={classes.textField}
          label="기수"
          placeholder="기수를 입력해주세요"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          name="gitsu"
          value={userInfo.gitsu}
          onChange={e => handleChange(e)}
        />
        <TextField
          id="name"
          className={classes.textField}
          label="이름"
          placeholder="이름을 입력해주세요"
          name="nickname"
          value={userInfo.nickname}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleChange(e)}
        />
        <TextField
          id="email"
          className={classes.textField}
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={userInfo.contact_email}
          name="contact_email"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleChange(e)}
        />
        <TextField
          id="company"
          className={classes.textField}
          label="company"
          placeholder="직장을 입력해주세요"
          value={userInfo.company}
          name="company"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => handleChange(e)}
        />
        <TextareaAutosize
          className={classes.textArea}
          type="text"
          name="intro"
          placeholder="소개를 입력해주세요"
          value={userInfo.intro}
          onChange={e => handleChange(e)}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
              onClick={postUpdate}
            >
              저장하기
            </Button>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Button
              variant="contained"
              color="secondary"
              className={classes.backButton}
              onClick={handleClick}
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
// import React, { Fragment, useState, useEffect } from "react";
// import {
//   Grid,
//   Container,
//   CssBaseline,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   TextareaAutosize
// } from "@material-ui/core";
// import Header from "../components/MyPage/Header";
// import useStyles from "../utils/myPageStyles";
// import useRequest from "../hooks/useRequest";
// import axios from "axios";
// const MyPage = ({ history }) => {
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     nickname: "",
//     gender: "",
//     github_addr: "",
//     contact_email: "",
//     gitsu: null,
//     userImage: null,
//     tech: "",
//     company: "",
//     intro: ""
//   });
//   const classes = useStyles();
//   let localData = JSON.parse(localStorage.getItem("userId"));
//   console.log(localData);
//   const fetch = async () => {
//     return await axios.get("http://52.79.228.73:3000/readUserInfo", {
//       userId: localData.userId,
//       access_token: localData.access_token
//     });
//   };
//   const fetchData = fetch();
//   useEffect(() => {
//     setUserInfo(oldValue => ({ ...oldValue, fetchData }));
//   }, []);

//   // TODO: when postData is null, return null

//   const handleMyInfo = e => {
//     const { name, value } = e.target;
//     setUserInfo(oldValue => ({
//       ...oldValue,
//       [name]: value
//     }));
//   };
//   const changeUserInfo = async () => {
//     await axios.patch("http://52.79.228.73:3000/updateUserInfo", {
//       ...userInfo,
//       userId: localData.userId,
//       access_token: localData.access_token
//     });
//     history.push("/");
//   };

//   return (
//     <Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header />
//         <Typography
//           component="h2"
//           variant="h2"
//           color="inherit"
//           align="left"
//           className={classes.mypage}
//           onChange={e => handleMyInfo(e)}
//         >
//           MyPage
//         </Typography>
//         <Grid container>
//           <Grid item xs={12} md={2}>
//             <Avatar
//               alt="user-image"
//               src="https://thumb.velog.io/resize?url=https://images.velog.io/profiles/geonhwi/thumbnails/1556767094.019.jpeg&width=256"
//               className={classes.avatar}
//             />
//           </Grid>
//           <Grid item xs={12} md={10}>
//             <Typography
//               component="h3"
//               variant="h3"
//               color="inherit"
//               align="left"
//               className={classes.userId}
//               name="nickname"
//               onChange={e => handleMyInfo(e)}
//             >
//               {userInfo.nickname}
//             </Typography>
//           </Grid>
//         </Grid>
//         <TextField
//           id="th"
//           className={classes.textField}
//           label="기수"
//           name="gitsu"
//           placeholder="기수를 입력해주세요"
//           value={userInfo.gitsu}
//           margin="normal"
//           variant="outlined"
//           InputLabelProps={{
//             shrink: true
//           }}
//           onChange={e => handleMyInfo(e)}
//         />
//         <TextField
//           id="name"
//           className={classes.textField}
//           label="이름"
//           name="userId"
//           placeholder="이름을 입력해주세요"
//           value={userInfo.userId}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           InputLabelProps={{
//             shrink: true
//           }}
//           onChange={e => handleMyInfo(e)}
//         />
//         <TextField
//           id="email"
//           className={classes.textField}
//           label="이메일"
//           name="contact_email"
//           placeholder="이메일을 입력해주세요"
//           value={userInfo.contact_email}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           InputLabelProps={{
//             shrink: true
//           }}
//           onChange={e => handleMyInfo(e)}
//         />
//         <TextField
//           id="phone"
//           className={classes.textField}
//           label="phone"
//           placeholder="전화번호를 입력해주세요"
//           value="010-1234-5678"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//           InputLabelProps={{
//             shrink: true
//           }}
//           onChange={e => handleMyInfo(e)}
//         />
//         <TextareaAutosize
//           className={classes.textArea}
//           type="text"
//           name="intro"
//           placeholder="소개를 입력해주세요"
//           value={userInfo.intro}
//           onChange={e => handleMyInfo(e)}
//           // onChange={handleChange}
//         />
//         <Grid container spacing={1}>
//           <Grid item xs={12} md={6} align="center">
//             <Button
//               variant="contained"
//               color="primary"
//               className={classes.saveButton}
//               onClick={changeUserInfo}
//             >
//               저장하기
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6} align="center">
//             <Button
//               variant="contained"
//               color="secondary"
//               className={classes.backButton}
//             >
//               돌아가기
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </Fragment>
//   );
// };

// export default MyPage;
