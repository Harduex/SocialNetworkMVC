import React from 'react';


function Layout(props) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="styles/style.css" type="text/css" media="all" />
          <script type="text/javascript" src="js/main.js" defer></script>
          <title>{props?.title}</title>
        </head>
        <body>
          {props.children}
        </body>
      </html>
    </>
  )
}


export default Layout;