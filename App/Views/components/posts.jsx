import React from 'react';
import Post from './post';
import Timeline from './timeline';


function Posts(props) {

  return (
    <Timeline className={props.className}>
      {props?.user ?
        <>
          {props?.posts.map((post) => (
            <Post post={post} currentUser={props.currentUser} user={props.user} />
          ))}
        </>
        :
        <>
          {props?.posts.map((post) => (
            <Post post={post} currentUser={props.currentUser} user={post.user} />
          ))}
        </>
      }

    </Timeline>
  )
}


export default Posts;
