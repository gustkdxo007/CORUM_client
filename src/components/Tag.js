import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "../utils/makeStyles";
import axios from "axios";
const Tag = () => {
  const [tagInfo, setTagInfo] = useState([]);

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
    fetchPostListByHashTag(id).then(res => console.log(res));
  };

  useEffect(() => {
    fetchHashTags();
  }, []);

  setTimeout(() => {
    console.log(tagInfo);
  }, 1000);

  const classes = useStyles();
  return (
    <div>
      <Grid item>
        <List className={classes.tag}>
          <ListItem button className={classes.allTagItem}>
            <Link
              component={RouterLink}
              to="/allTags"
              color="inherit"
              className={classes.toolbarLink}
              underline="none"
            >
              ALL TAGS
            </Link>
          </ListItem>

          {tagInfo &&
            tagInfo.tagInfo &&
            tagInfo.tagInfo.data.slice(0, 5).map((link, i) => (
              <ListItem key={link.id} button className={classes.tagItem}>
                <Link
                  component={RouterLink}
                  to="/allTags"
                  color="inherit"
                  className={classes.toolbarLink}
                  underline="none"
                >
                  # {link.name}
                </Link>
              </ListItem>
            ))}
        </List>
      </Grid>
    </div>
  );
};

export default Tag;
