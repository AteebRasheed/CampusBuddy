import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styles from "./style";
import database from "../../Database/database";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setComments, setRefreshing } from "../../Redux/Post/actions";

const Post = ({ post }) => {
  const dispatch = useDispatch();
 
  
  return (
    <View style={styles.container}>
      <Header
        avatar= 'avatar'
        name='post.owner'
        userID='post.userID'
        caption='post.caption'
        privacy='post.privacy'
        type='post.type'
        postID='post.postID'
      />
      
  
    </View>
  );
};

export default Post;
