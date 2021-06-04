import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import SearchPage from "./components/search/SearchPage";

function App() {
  return (
    <HashRouter basename='/'>
      <Route exect path='/' component={SearchPage} />
    </HashRouter>
  );
}

export default App;
