import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [件名,件名変更]=useState(["渋谷ランチ","下北沢ランチ","自由が丘ランチ"]);
  let [いいね,いいね変更]=useState(0)

  return (
    <div className="App">
      <div className="header-nav">
        <h2>おすすめ食堂</h2>
      </div>

      <button onClick={()=>{
        let copy=[...件名];
        copy[0]="渋谷ディナー";
        copy[1]="下北沢ディナー";
        copy[2]="自由がディナー";
        件名変更(copy);
      }}>ディナー</button>

      <div className='list'>
        <h4>{件名[0]}<span onClick={()=>{いいね変更(いいね+1)}}> 👍</span>{いいね}</h4>
        <p>東京都渋谷区道玄坂1丁目</p>
        </div>

        <div className='list'>
        <h4>{件名[1]}<span onClick={()=>{いいね変更(いいね+1)}}> 👍</span>{いいね}</h4>
        <p>東京都世田谷区北沢1丁目</p>
      </div>

      <div className='list'>
        <h4>{件名[2]}<span onClick={()=>{いいね変更(いいね+1)}}> 👍</span>{いいね}</h4>
        <p>東京都目黒区自由が丘1丁目</p>
      </div>

    </div>
  );
}

export default App;
