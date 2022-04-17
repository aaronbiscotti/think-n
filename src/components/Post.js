import React from 'react'
import * as AiIcons from "react-icons/ai";

const Post = (props) => {
  return (
    <div className="w-full bg-white shadow p-5 rounded-lg mb-5">
      <h2 class="text-lg font-bold">{props.question}</h2>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h3 className="font-light text-gray-400 text-sm">by: Aviel Hernandez</h3>
      <button className="bg-[#0051ED] px-2 py-1 text-white mt-2 rounded">answer</button>
      {/* <div class="flex items-center mt-5 space-x-4">
        <button onclick={likef} class="flex items-center"><AiIcons.AiFillLike class="mr-1" /> </button>
        <button onclick={dislikef} class="flex items-center"><AiIcons.AiFillDislike class="mr-1" /> </button>
      </div> */}
    </div>
  );
}
export default Post