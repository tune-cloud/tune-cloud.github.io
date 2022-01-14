import {HashRouter, Routes, Route} from 'react-router-dom';
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
            new HttpLink({uri: 'https://064dd0z3t3.execute-api.us-east-1.amazonaws.com/dev/graphql'}),
        ]),
        cache: new InMemoryCache(),
    });

    ArtistApi.init(client);
    SongApi.init(client);

    const artistService = new ArtistService();
    const songService = new SongService();

    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<HomePage artistService={artistService} />} />
                <Route path='/search' element={<SearchPage artistService={artistService} />} />
                <Route path='/artist' element={<ArtistPage songService={songService} />} />
                <Route path='/error' element={<ErrorPage />} />
            </Routes>
        </HashRouter>
  );
}

export default App;
