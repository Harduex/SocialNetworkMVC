import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';
import Explore from './components/explore';


function Index(props) {
  return (
    <Layout title={props.title} className="user-feed">
      {props?.hideButtons ?
        <div className="index-title-container">
          {/* TODO: */}
        </div>
        :
        <BigButtonPanel route="javascript:;" className={"update-feed-posts"}>Update timeline</BigButtonPanel>
      }
      <Timeline className="feed-timeline">
        <Posts posts={props.posts} currentUser={props.currentUser} className="timeline-posts" />
      </Timeline>
      {!props?.hideExploreSection &&
        <Explore randomUsers={props.randomUsers} currentUser={props.currentUser} slick={true} />
      }
    </Layout>
  )
}


export default Index;
