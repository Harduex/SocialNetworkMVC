import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';
import Explore from './components/explore';


function Index(props) {
  return (
    <Layout title={props.title} className="user-feed">
      {!props?.hideUpdater &&
        <div className="text-center">
          <i class="fa fa-sync text-white fa-2x update-user-feed"></i>
        </div>
      }
      {props?.hideButtons ?
        <div className="index-title-container">
          {/* TODO: Add post component */}
        </div>
        :
        <BigButtonPanel route="javascript:;" className={"update-feed-posts"}>Update timeline</BigButtonPanel>
      }
      <Timeline className="feed-timeline">
        <Posts posts={props.posts} currentUser={props.currentUser} className="timeline-posts" />
        {!props?.hideExploreSection &&
          <Explore randomUsers={props.randomUsers} currentUser={props.currentUser} slick={true} />
        }
      </Timeline>
    </Layout>
  )
}


export default Index;
