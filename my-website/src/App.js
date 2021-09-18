import { Helmet } from "react-helmet";
import Header from "./components/header"
import Footer from "./components/footer";
import Home from "./containers/Home";
import Intro from "./containers/Intro"
import Experience from "./containers/Experience";
import TimeLine from "./containers/Timeline";
import './styles/header.css'
import './styles/App.css'

const App = () => {
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
      <Home />
      <Intro />
      <Experience />
      <TimeLine />
      <Footer />
    </div>
  );
}

export default App;
