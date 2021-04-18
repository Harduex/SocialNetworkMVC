const React = require('react');
const Layout = require('./layout');


function Index(props) {
  return (
   <Layout title={props.title}>
     <div>Hi {props.text}</div>
   </Layout>
  )
}


module.exports = Index;