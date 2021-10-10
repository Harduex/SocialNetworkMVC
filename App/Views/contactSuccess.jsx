import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';


function Index(props) {
  return (
    <Layout title={props.title}>
      <div className="container">
        <div className="row">
          <div className="col">
            <form id="contact" action="/contact" method="post" className="text-center">
              <h1 className="text-center">Thank you for your message!</h1>
              <h3 className="text-center">We will reach you soon.</h3>
              <a className="text-center" href="/">Back to timeline</a>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default Index;
