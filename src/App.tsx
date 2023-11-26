import React from "react";
import logo from "./logo.png";
import "./App.css";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex-none navbar shadow-xl rounded-box bg-base-100 m-4 px-4 w-auto">
        <div className="flex-1 flex items-center gap-2">
          <img src={logo} alt="logo" width="40" />
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-sm">ログイン</button>
          <button className="btn btn-sm">サインアップ</button>
        </div>
      </div>

      <div className="flex-2 gap-6">
        <p className="text-2xl font-extrabold px-6 pb-6">
          👀 今作成されたプロンプト
        </p>
        <div className="carousel carousel-center gap-4 px-6 pb-8 w-full">
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
        <p className="text-2xl font-extrabold px-6 pb-6">
          ✏️ プロンプトを作成する
        </p>
        <div className="card bg-base-100 mx-6 mb-6">
          <div className="card-body">
            <PostForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
