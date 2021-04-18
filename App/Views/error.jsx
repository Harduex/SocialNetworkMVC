const React = require('react');
const Layout = require('./layout');


function Index(props) {
  return (
    <Layout title="Index Page">
      <h1>{props.message}</h1>
      <h2>{props.error.status}</h2>
    </Layout>
  )
}


module.exports = Index;