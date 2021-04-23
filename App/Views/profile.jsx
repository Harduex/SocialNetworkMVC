import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import NewPostPanel from './components/newPostPanel';
import Timeline from './components/timeline';
import Followers from './components/followers';
import Following from './components/following';


function Profile(props) {

  const posts = [
    {
      body: 'gotin post',
      user: 'pesho',
      comments: ['comment1', 'com2', 'sdfsdf'],
      likes: ['toni', 'ustata'],
      image: ''
    }
  ]


  return (
    <Layout title={props.title}>
      <UserPanel user={props.user} loggedIn={props.loggedIn} follow={props.follow} mainPanel />


      <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
        <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="nav-home-tab">
          {props.loggedIn && <NewPostPanel />}
          <Timeline posts={posts} user={props.user} currentUser={props.currentUser} loggedIn={props.loggedIn} />
        </div>

        {/* for debugging -> TO DO */}
        {props.loggedIn ?
          <>
            <div className="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="nav-profile-tab">
              <Followers followers={props.followers} currentUser={props.currentUser} />
            </div>
            <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="nav-contact-tab">
              <Following following={props.following} currentUser={props.currentUser} />
            </div>
          </>
          :
          <>
            <div className="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="nav-profile-tab">
              <Followers followers={props.followers} currentUser={props.user} hideFollowButton />
            </div>
            <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="nav-contact-tab">
              <Following following={props.following} currentUser={props.user} hideFollowButton />
            </div>
          </>
        }

      </div>

    </Layout>
  );
}


export default Profile;
