import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";

export default function SearchPage(props) {
    const isMobile = window.innerWidth <= 768;
    return (
        <div className="App">
            <header className="App-header">
                <h1>Tune Cloud</h1>
                {!isMobile && <SearchBar {...props} searchBarClassName='input-group w-50' searchResultsClassName='list-group w-50'/>}
                {isMobile && <MobileSearchBar/>}
            </header>
        </div>
    );
}
