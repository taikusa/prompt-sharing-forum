import React from "react";
import "./App.css";

function PostForm() {
  return (
    <div className="flex flex-col gap-6">
      <input type="text" placeholder="プロンプト名" className="input input-bordered w-full text-sm" />
      <textarea className="textarea textarea-bordered bg-neutral text-base-100 min-h-[36rem]" placeholder="プロンプト"></textarea>
      <button className="btn btn-disabled">投稿する</button>
    </div>
  );
}

export default PostForm;
