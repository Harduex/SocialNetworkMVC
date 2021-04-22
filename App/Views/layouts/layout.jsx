import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

        <link rel="stylesheet" href="/styles/style.css" type="text/css" media="all" />
        <script type="text/javascript" src="/js/main.js" defer></script>

        <title>{props?.title}</title>
      </head>
      <body>
        <Header title={props?.title} />
        <div className="container">
          {props.children}
        </div>
        <Footer title={props?.title} />
      </body>
    </html>
  )
}


export default Layout;