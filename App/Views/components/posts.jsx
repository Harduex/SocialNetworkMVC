import React from 'react';
import Post from './post';
import Timeline from './timeline';


function Posts(props) {

  return (
    <>
      {props?.user ?
        <>
          {props?.posts.map((post) => (
            <Post post={post} currentUser={props.currentUser} user={props.user} loggedIn={props.loggedIn} />
          ))}
        </>
        :
        <>
          {props?.posts.map((post) => (
            <Post post={post} currentUser={props.currentUser} user={post.user} />
          ))}
        </>
      }
    </>
  )
}


export default Posts;
