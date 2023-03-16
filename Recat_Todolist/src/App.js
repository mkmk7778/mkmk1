import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoBord from './components/Todoboard';

//1.インプットとボタン
//2.インプットに値を入れて、ボタンクリックしたらアイテム追加される
//3.アイテム削除ボタンを作る


function App() {
  const [inputValue,setInputValue]=useState('')
    const [todoList,setTodoList]=useState([])
    const addItem=()=>{
      console.log("im herererere!",inputValue)
      setTodoList([...todoList,inputValue])
    }
   


  return (
    <main>
      
      <input value={inputValue}type="text"onChange={(Event)=>setInputValue(Event.target.value)}/>
      <button onClick={addItem}>追加</button>

      <TodoBord todoList={todoList}/>
    </main>
  );
}

export default App;
