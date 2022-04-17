import React from 'react'
import * as AiIcons from "react-icons/ai";

const Post = (props) => {
  return (
    <div className="w-full bg-white shadow p-5 rounded-lg">
      <h2 class="text-lg font-bold">{props.title}</h2>
      <h3 class="font-light text-gray-400 text-sm">by {props.name} at 3:00AM</h3>
      <p>
        {props.field}
      </p>
      <div class="flex items-center mt-5 space-x-4">
        <h3 class="flex items-center"><AiIcons.AiFillLike class="mr-1" /> {props.likes}</h3>
        <h3 class="flex items-center"><AiIcons.AiFillDislike class="mr-1" /> {props.dislikes}</h3>
      </div>
    </div>
  );
}

export default Post