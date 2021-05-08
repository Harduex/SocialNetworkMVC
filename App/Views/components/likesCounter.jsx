import React from 'react';
import PostLikes from './postLikes';


const LikesCounter = (props) => (
    <form action={`/post/likes/${props?.post?._id}`} method="post" className="post-likes-form" id={`${props?.post?._id}_likes_form`} onsubmit="return false">
      <button type="submit" className="btn btn-secondary stats-total likes-counter text-white" id={`${props?.post?._id}_likes`} data-toggle="modal" data-target="#post-likes-modal">
        {props?.post?.likes?.length || 0}
      </button>
      <PostLikes />
    </form>
);


export default LikesCounter;
