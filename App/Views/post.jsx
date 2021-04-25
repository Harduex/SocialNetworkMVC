import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Post from './components/post';
import BigButtonPanel from './components/bigButtonPanel';


function PostPreview(props) {
  return (
    <Layout title={props.title}>
      <Timeline>
        <Post post={props?.post} currentUser={props?.currentUser} user={props?.user} />
      </Timeline>
      <BigButtonPanel route="/profile">Back</BigButtonPanel>
    </Layout>
  )
}




export default PostPreview;
