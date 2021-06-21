import SearchBar from "../search/SearchBar";
import MobileSearchBar from "../search/MobileSearchBar";

export default function HomePage(props) {
    const isMobile = window.innerWidth <= 768;
    return (
        <div className="App">
            <header className="App-header">
                <img src='/logo192.png' alt='Tune Cloud'/>
                {!isMobile && <SearchBar {...props} searchBarClassName='input-group w-50' searchResultsClassName='list-group w-50'/>}
                {isMobile && <MobileSearchBar/>}
            </header>
        </div>
    );
}
