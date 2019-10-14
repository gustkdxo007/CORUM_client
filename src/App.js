import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import EditPage from "./Pages/EditPage";
import PostPage from "./Pages/PostPage";
import MyPage from "./Pages/MyPage";
import SignUpPage from "./Pages/SignUpPage";
import HashTagPage from "./Pages/HashTagPage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/alltags" component={HashTagPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route exact path="/category/:categoryname" component={Home} />
        <Route path="/category/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
