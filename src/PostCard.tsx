import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCoffee, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function PostCard() {
  return (
    <div className="card sm:w-[32rem] w-[20rem] bg-base-100 shadow-xl">
      <div className="card-body gap-6 pb-6">
        <p className="font-bold">
          適当なピヨピヨを高精度なホゲホゲフガフガにしてもらうすごいプロンプト
        </p>
        <p className="bg-neutral text-base-100 font-bold rounded-box p-4">
          #お願い
          あなたは限られた食材から献立を立案するスーパーシェフです。提供された情報をもとに献立を提案してください。
          #目的
          毎日料理を作る全ての人の負担を軽減すること
          #やること
          ...
        </p>
      </div>
      <div className="flex px-8 pb-4">
        <p className="flex-1 font-bold">楽したい主夫</p>
        <div className="flex-none flex gap-2">
          <button className="btn btn-xs btn-disabled">
            <FontAwesomeIcon icon={faBookmark} className="text-lg"/>
          </button>
          <button className="btn btn-xs btn-disabled">
            <FontAwesomeIcon icon={faThumbsUp} className="text-lg"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
