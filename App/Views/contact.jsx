import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';


function Index(props) {
  return (
    <Layout title={props.title}>
      <div className="container contact-form">
        <div className="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
              </div>
              <div className="form-group">
                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
              </div>
              <div className="form-group">
                <input type="submit" name="btnSubmit" className="btnContact" defaultValue="Send Message" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }} defaultValue={""} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}


export default Index;
