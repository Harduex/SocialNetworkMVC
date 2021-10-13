import React from 'react';
import Layout from './layouts/layout';
import Timeline from './components/timeline';
import Posts from './components/posts';
import BigButtonPanel from './components/bigButtonPanel';


function Index(props) {
  return (
    <Layout title={props.title} logged={props?.logged}>
      <div className="container">
        <div className="row">
          <div className="col">
            <form id="contact" action="/contact" method="post">
              <h3>Contact Us</h3>
              <h4>Contact us directly if you have any questions:</h4>
              <fieldset>
                <input placeholder="Your name" type="text" className="form-control" name="name" tabIndex={1} required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" className="form-control" name="email" tabIndex={2} required />
              </fieldset>
              <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" className="form-control" name="phone" tabIndex={3} required />
              </fieldset>
              <fieldset>
                <input placeholder="Subject" type="text" className="form-control" name="subject" tabIndex={4} required autofocus />
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your message here...." tabIndex={5} className="form-control" name="message" required defaultValue={""} />
              </fieldset>
              <fieldset className="d-flex justify-content-between">
                <button type="submit" id="contact-submit" className="btn btn-primary" data-submit="...Sending">Submit</button>
                <a id="contact-submit" className="btn btn-primary" href="/">Back</a>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default Index;
