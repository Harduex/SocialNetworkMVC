import React from 'react';
import Layout from './layouts/layout';


function Index(props) {
  return (
    <Layout title={props.title}>      
      <h1>Hello {props.user}</h1>
      <a href="/auth/logout" type="button" class="btn btn-primary">Logout</a>
    </Layout>
  )
}


export default Index;
