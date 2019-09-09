import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import EditPage from "./Pages/EditPage";
import PostPage from "./Pages/PostPage";
import MyPage from "./Pages/MyPage";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/mypage" component={MyPage} />
        <Route path="/edit" component={EditPage} />
        <Route exact path="/category/:categoryname" component={Home} />
        <Route path="/category/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
};

export default App;
