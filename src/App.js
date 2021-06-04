import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import SearchPage from "./components/search/SearchPage";
import ArtistApi from "./api/ArtistApi";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import ArtistService from "./services/ArtistService";

function App() {
    ArtistApi.init(new ApolloClient({
        link: new HttpLink({uri: 'https://nbl977s1aj.execute-api.us-east-1.amazonaws.com/dev/graphql'}),
        cache: new InMemoryCache(),
    }));

    const artistService = new ArtistService();
    return (
        <HashRouter basename='/'>
            <Route exect path='/' component={()=><SearchPage artistService={artistService}/>} />
        </HashRouter>
  );
}

export default App;
