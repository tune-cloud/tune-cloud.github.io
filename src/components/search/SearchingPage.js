import SearchBar from "./SearchBar";

export default function SearchingPage(props) {
    return (
        <div style={{position: 'fixed', width: '100%'}}>
            <SearchBar {...props} searchBarClassName='input-group' searchResultsClassName='list-group search-results'/>
        </div>
    );
}
