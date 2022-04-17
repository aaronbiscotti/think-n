// COMPONANT
import * as AiIcons from "react-icons/ai";

function AskQuestion() {
  return (
    <div class="bg-white h-50 p-5 rounded-lg">
      <div className="tags-input-container border-2 gap-2 p-1 rounded w-full flex items-center flex-wrap ">
        <div className="tag-item bg-[#0051ED] text-[#fff] inline-block p-2 items-center rounded-xl w-min flex h-10 mx-1">
          <span className="text">hello</span>
          <span className="close ml-1 h-4 inline-block text-[#fff]">
            <AiIcons.AiOutlineCloseCircle />
          </span>
        </div>

        <input
          type="text"
          placeholder="press enter for tag"
          className="tags-input "
        />
      </div>
      <div>
        <textarea
          rows="20"
          cols="50"
          placeholder="post a new thread"
          class="border-2 w-full mt-5"
        ></textarea>
      </div>
    </div>
  );
}

export default AskQuestion;