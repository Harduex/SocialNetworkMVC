import React from 'react';


const LikesCounter = (props) => (
  <a href={`/post/likes/${props?.post?._id}`} className="stats-total likes-counter text-white" id={`${props?.post?._id}_likes`} >{props?.post?.likes?.length || 0}</a>
);


export default LikesCounter;
