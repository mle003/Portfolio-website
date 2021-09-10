// import './styles/App.css';
import { Helmet } from "react-helmet";
import Header from './components/header';
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Minh Le</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Minh Le's website" />
      </Helmet>
      <header className="App-header">
        <Header />
      </header>
      <Intro />
    </div>
  );
}

export default App;
