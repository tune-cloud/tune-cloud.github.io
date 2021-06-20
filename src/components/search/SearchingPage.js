import SearchBar from "./SearchBar";

export default function SearchingPage(props) {
    return (
        <SearchBar {...props} searchBarClassName='input-group' searchResultsClassName='list-group search-results'/>
    );
}
