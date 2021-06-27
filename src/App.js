import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./components/home/HomePage";
import ArtistApi from "./api/ArtistApi";
import {ApolloClient, HttpLink, InMemoryCache, from} from "@apollo/client";
import {RetryLink} from "@apollo/client/link/retry";
import ArtistService from "./services/ArtistService";
import ArtistPage from "./components/artist/ArtistPage";
import SongService from "./services/SongService";
import SongApi from "./api/SongApi";
import SearchPage from "./components/search/SearchPage";
import ErrorPage from "./components/error/ErrorPage";



function App() {
    const client = new ApolloClient({
        link: from([
            new RetryLink(),
            new HttpLink({uri: 'https://nbl977s1aj.execute-api.us-east-1.amazonaws.com/dev/graphql'}),
        ]),
        cache: new InMemoryCache(),
    });

    ArtistApi.init(client);
    SongApi.init(client);

    const artistService = new ArtistService();
    const songService = new SongService();

    return (
        <HashRouter basename='/'>
            <Route exact path='/' component={()=><HomePage artistService={artistService} />} />
            <Route path='/search' component={()=><SearchPage artistService={artistService} />} />
            <Route path='/artist' component={(props)=><ArtistPage songService={songService} {...props} />} />
            <Route path='/error' component={ErrorPage} />
        </HashRouter>
  );
}

export default App;
