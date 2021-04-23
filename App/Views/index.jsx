import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import BigButtonPanel from './components/bigButtonPanel';
import NewPost from './components/newPost';
import Timeline from './components/timeline';
import Followers from './components/followers';
import Following from './components/following';


function Index(props) {
  return (
    <Layout title={props.title}>
      <Timeline posts={props.posts} currentUser={props.currentUser} loggedIn={props.loggedIn} feed/>
    </Layout>
  )
}


export default Index;
