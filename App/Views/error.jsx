import React from 'react';
import Layout from './layouts/layout';


function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.message}</h1>
      <h2>{props.error.status}</h2>
    </Layout>
  )
}


export default Index;