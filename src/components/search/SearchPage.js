import SearchBar from './SearchBar';

export default function SearchPage(props) {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Tune Cloud</h1>
                <SearchBar {...props} />
            </header>
        </div>
    );
}
