import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import BigButtonPanel from './components/bigButtonPanel';
import Timeline from './components/timeline';
import Posts from './components/posts';
import Followers from './components/followers';
import Following from './components/following';


function Profile(props) {

  return (
    <Layout title={props.title} className="pl-0 pr-0">
      <UserPanel user={props.user} follow={props.follow} posts={props.posts} postsCount={props?.postsCount} mainPanel />

      <div className="tab-content p-0" id="nav-tabContent">

        <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="nav-home-tab">

          <Timeline className={props.className}>
            <Posts posts={props.posts} currentUser={props.currentUser} user={props.user} className="profile-posts" />
          </Timeline>

        </div>

        <div className="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="nav-profile-tab">
          <Followers followers={props.followers} currentUser={props.user} hideFollowButton />
        </div>

        <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="nav-contact-tab">
          <Following following={props.following} currentUser={props.user} hideFollowButton />
        </div>

      </div>

    </Layout>
  );
}


export default Profile;
