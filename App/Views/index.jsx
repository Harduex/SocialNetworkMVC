import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Post from './components/post';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';


function Index(props) {
  return (
    <Layout title={props.title}>
      <Timeline>
        <Posts posts={props.posts} currentUser={props.currentUser} className="timeline-posts" />
        <BigButtonPanel route="javascript:;" className={"load-more-feed-posts"}>Load more</BigButtonPanel>
      </Timeline>
    </Layout>
  )
}


export default Index;
