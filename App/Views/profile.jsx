import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import NewPostPanel from './components/newPostPanel';
import Timeline from './components/timeline';

function Profile(props) {

  const posts = [
    {
      body: 'gotin post',
      user: 'pesho',
      comments: ['comment1', 'com2', 'sdfsdf'],
      likes: ['toni', 'ustata'],
      image: ''
    }
  ]

  /* TO DO -> fetch posts then render -> do it in postsController*/

  // import { getAllPosts } from '../../Models/postModel';

  // getAllPosts().then((posts) => {
  //   console.log(posts);
  // })


  return (
    <Layout title={props.title}>
      <UserPanel user={props.user} loggedIn={props.loggedIn} follow={props.follow} />
      {props.loggedIn &&
        <NewPostPanel />
      }
      <Timeline posts={posts} user={props.user} currentUser={props.currentUser} loggedIn={props.loggedIn} />
    </Layout>
  )
}


export default Profile;
