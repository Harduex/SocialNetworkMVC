import React from 'react';
import Layout from './layouts/layout';


function Index(props) {
  return (
    <Layout title={props.title}>
      <div>{props.text}</div>
      <a href="/users/getAll" className="btn btn-primary">Get All Users</a>
    </Layout>
  )
}


export default Index;
