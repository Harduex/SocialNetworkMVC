import React from 'react';


const LikesCounter = (props) => (
  <span className="stats-total likes-counter" id={`${props?.post?._id}_likes`} >{props?.post?.likes?.length || 0}</span>
);


export default LikesCounter;
