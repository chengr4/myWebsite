import { article_left } from './alter';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <a href={ article_left.url }>a</a>
      </div>
    </div>
  );
}

export default App;
