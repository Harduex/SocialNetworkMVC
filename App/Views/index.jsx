import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';


function Index(props) {
  return (
    <Layout title={props.title}>
      <BigButtonPanel route="javascript:;" className={"update-feed-posts"}>Update timeline</BigButtonPanel>
      <Timeline>
        <Posts posts={props.posts} currentUser={props.currentUser} className="timeline-posts" />
      </Timeline>
      <BigButtonPanel route="javascript:;" className={"load-more-feed-posts"}>Load more</BigButtonPanel>
    </Layout>
  )
}


export default Index;
