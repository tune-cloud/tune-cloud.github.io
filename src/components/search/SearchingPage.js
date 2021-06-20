import SearchBar from "./SearchBar";

export default function SearchingPage(props) {
    return (
        <div className='search-page'>
            <SearchBar {...props} searchBarClassName='input-group' searchResultsClassName='list-group search-results'/>
        </div>
    );
}
