import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function RankingCard() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-2">
        <p className="text-4xl pr-2">🥇</p>
        <div className="text-xl flex flex-row items-center">
          <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
          <p className="font-bold text-center">100</p>
        </div>
      </div>
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body gap-6 pb-6">
          <p className="font-bold">
            適当なピヨピヨを高精度なホゲホゲフガフガにしてもらうすごいプロンプト
          </p>
          <p className="bg-neutral text-base-100 font-bold rounded-box p-4">
            #お願い
            あなたは限られた食材から献立を立案するスーパーシェフです。献立を提案してください。
            ...
          </p>
        </div>
        <div className="flex px-8 pb-4">
          <p className="flex-1 font-bold">楽したい主夫</p>
          <div className="flex-none flex gap-2">
            <button className="btn btn-xs btn-disabled">
              <FontAwesomeIcon icon={faBookmark} className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankingCard;
