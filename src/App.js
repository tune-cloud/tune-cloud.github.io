import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import SearchPage from "./components/search/SearchPage";
import ArtistApi from "./api/ArtistApi";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import ArtistService from "./services/ArtistService";
import ArtistPage from "./components/artist/ArtistPage";
import SongService from "./services/SongService";
import SongApi from "./api/SongApi";
import SearchingPage from "./components/search/SearchingPage";



function App() {
    const client = new ApolloClient({
        link: new HttpLink({uri: 'https://nbl977s1aj.execute-api.us-east-1.amazonaws.com/dev/graphql'}),
        cache: new InMemoryCache(),
    });

    ArtistApi.init(client);
    SongApi.init(client);

    const artistService = new ArtistService();
    const songService = new SongService();

    return (
        <HashRouter basename='/'>
            <Route exact path='/' component={()=><SearchPage artistService={artistService} />} />
            <Route path='/search' component={()=><SearchingPage artistService={artistService} />} />
            <Route path='/artist' component={(props)=><ArtistPage songService={songService} {...props} />} />
        </HashRouter>
  );
}

export default App;
