import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import BigButtonPanel from './components/bigButtonPanel';


function PostPreview(props) {
  return (
    <Layout title={props.title}>
      {/* <pre>
        {JSON.stringify(props.post, null, 4)}
      </pre> */}

      <Timeline posts={[props?.post]} user={props?.user} currentUser={props.currentUser} loggedIn={props.loggedIn} />
      <BigButtonPanel route="/profile">
        Back
      </BigButtonPanel>
    </Layout>
  )
}




export default PostPreview;
