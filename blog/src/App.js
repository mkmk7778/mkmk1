
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   let[件名,件名変更]=useState(["渋谷ランチ","自由が丘ランチ","下北沢ランチ"]);
   let[いいね,いいね変更]=useState(0);

  

  return (
    <div className="App">
      <div className='black-nav'>
        <div>おすすめ食堂Blog</div>
      </div>

     <button onClick={()=>{
      let copy=[...件名];
      copy[0]="渋谷ディナー";
      copy[1]="自由が丘ディナー";
      copy[2]="下北沢ディナー";
      件名変更(copy);
     }}>ディナー</button>

      <div className='list'>
      <h3>{件名[0]}<span onClick={()=>{いいね変更(いいね+1)}}> 👍</span> {いいね}</h3>
      <p>東京都渋谷区道玄坂1丁目</p>
      <hr/>

      <h3>{件名[1]}<span onClick={()=>{いいね変更(いいね+1)}}> 👍</span> {いいね}</h3>
      <p>東京都目黒区自由が丘2丁目</p>
      <hr/>

      <h3>{件名[2]}<span onClick={()=>{いいね変更(いいね+1)}}> 👍</span> {いいね}</h3>
      <p>東京都世田谷区北沢3丁目</p>
      <hr/>

      </div>
      
    </div>
  );
}

export default App;
