import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="container">
    <header>
        <h2>ひらがな病院</h2>
        <ul>
            <li><a href="#">ホーム</a></li>
            <li><a href="#">病院紹介</a></li>
            <li><a href="#">交通アクセス</a></li>
        </ul>
    </header>

    <section>
        <h3>yourpage</h3>
        <p>The html, which is known as the root element, wraps the contents of a web page and it can be found immediately after the doctype declaration. Metadata contains information about the page like styles, scripts and data to help search engines or browsers to use and render the page.</p>
        <button>Learn more</button>
    
    </section>

    <footer>
        <a href="https://www.yahoo.co.jp/">Yahoo</a><br/>
        <a href="https://www.google.com/">Google</a><br/>
        <a href="https://www.instagram.com/">Instagram</a><br/>
        <a href="https://www.youtube.com/">Youtube</a><br/>
    </footer>
    </div>
    </div>
  );
}

export default App;
