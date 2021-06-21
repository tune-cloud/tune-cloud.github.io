import SearchBar from "./SearchBar";

export default function SearchPage(props) {
    return (
        <div className='search-page'>
            <SearchBar {...props} searchBarClassName='input-group' searchResultsClassName='list-group search-results'/>
        </div>
    );
}
