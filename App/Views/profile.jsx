import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import Timeline from './components/timeline';

function Profile(props) {
  
  const posts = [
    {
      user: 'pesho',
      body: 'gotin post',
      comments: ['comment1', 'com2', 'sdfsdf'],
      likes: ['toni', 'ustata'],
    },
    {
      user: 'ivan',
      body: 'gotin post',
      comments: ['comment1', 'com2', 'sdfsdf'],
      likes: ['toni', 'ustata']
    },
  ]

  /* TO DO -> fetch posts then render */

  // import { getAllPosts } from '../../Models/postModel';

  // getAllPosts().then((posts) => {
  //   console.log(posts);
  // })


  return (
    <Layout title={props.title}>
      <UserPanel user={props.user} />
      <Timeline posts={posts} user={props.user}/>
    </Layout>
  )
}


export default Profile;
