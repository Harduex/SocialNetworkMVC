import React from 'react';
import Layout from './layouts/layout';


function Profile(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.user}'s Profile</h1>
    </Layout>
  )
}


export default Profile;
