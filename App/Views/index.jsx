import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';
import Explore from './components/explore';


function Index(props) {
  return (
    <Layout title={props.title}>
      {props?.hideButtons ?
        <div className="index-title-container">
          <h1>{props?.title}</h1>
        </div>
        :
        <BigButtonPanel route="javascript:;" className={"update-feed-posts"}>Update timeline</BigButtonPanel>
      }
      <Timeline>
        <Posts posts={props.posts} currentUser={props.currentUser} className="timeline-posts" />
        {!props?.hideButtons &&
          <Explore randomUsers={props.randomUsers} currentUser={props.currentUser} slick={true} />
        }
      </Timeline>
    </Layout>
  )
}


export default Index;
