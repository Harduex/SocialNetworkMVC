import React from 'react';
import Layout from './layout';


function Index(props) {
  return (
   <Layout title={props.title}>
     <div>Hello {props.text}!</div>
   </Layout>
  )
}


export default Index;
