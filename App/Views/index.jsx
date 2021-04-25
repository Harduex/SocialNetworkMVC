import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Post from './components/post';


function Index(props) {
  return (
    <Layout title={props.title}>
      <Timeline>
        {props?.posts.map((post) => (
          <Post post={post} currentUser={props.currentUser} user={post.user} />
        ))}
      </Timeline>
    </Layout>
  )
}


export default Index;
