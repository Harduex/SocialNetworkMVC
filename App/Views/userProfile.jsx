import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import BigButtonPanel from './components/bigButtonPanel';
import Posts from './components/posts';
import Followers from './components/followers';
import Following from './components/following';


function Profile(props) {

  return (
    <Layout title={props.title}>
      <UserPanel user={props.user} follow={props.follow} posts={props.posts} mainPanel />

      <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">

        <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="nav-home-tab">
          <Posts posts={props.posts} currentUser={props.currentUser} user={props.user} className="profile-posts" />
          <form action="/user/load-more-posts" method="POST" id="load-more-user-posts-form">
            <input type="text" name="username" value={props?.user?.username} hidden />
            <BigButtonPanel type="submit" className={"load-more-user-posts"}>Load more</BigButtonPanel>
          </form>
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
