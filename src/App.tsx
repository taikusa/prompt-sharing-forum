import React from "react";
import logo from "./logo.png";
import "./App.css";
import PostCard from "./PostCard";
import RankingCard from "./RankingCard";
import PostForm from "./PostForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex-none navbar shadow-xl rounded-box bg-base-100 sm:mx-16 mx-8 mt-12 px-4 w-auto">
        <div className="flex-1 flex items-center gap-2">
          <img src={logo} alt="logo" width="40" />
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-sm btn-disabled">ログイン</button>
          <button className="btn btn-sm btn-disabled">サインアップ</button>
        </div>
      </div>

      <div className="flex-2 gap-6">
        <p className="text-2xl font-extrabold sm:mx-16 mx-8 mb-6">
          🏆 今月の
          <FontAwesomeIcon icon={faThumbsUp} className="text-2xl mx-1" />
          ランキング
        </p>
        <div className="flex sm:flex-row flex-col gap-6 sm:px-16 px-8 pb-8 -mb-8 w-full">
          <RankingCard />
          <RankingCard />
          <RankingCard />
        </div>
      </div>

      <div className="flex-2 gap-6">
        <div className="flex flex-row">
          <p className="text-2xl font-extrabold sm:mx-16 mx-8 mb-6">
            👀 作成されたプロンプト
          </p>
          {/* "今作成された"、ではなく"作成された"にして新着順かを選択するドロップダウンを追加 & 検索欄を追加。どちらもタイトルの右側に表示*/}
        </div>
        <div className="carousel carousel-center gap-4 sm:px-16 px-8 pb-8 -mb-8 w-full">
          <div className="carousel-item">
            <PostCard />
          </div>
          <div className="carousel-item">
            <PostCard />
          </div>
          <div className="carousel-item">
            <PostCard />
          </div>
          <div className="carousel-item">
            <PostCard />
          </div>
          <div className="carousel-item">
            <PostCard />
          </div>
          <div className="carousel-item">
            <PostCard />
          </div>
        </div>
      </div>

      <div className="flex-2">
        <p className="text-2xl font-extrabold sm:mx-16 mx-8 mb-6">
          ✏️ プロンプトを作成する
        </p>
        <div className="card bg-base-100 sm:mx-16 mx-8 mb-12">
          <div className="card-body">
            <PostForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
