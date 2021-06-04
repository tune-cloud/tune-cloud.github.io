import { Search } from 'react-bootstrap-icons';

export default function SearchPage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Tune Cloud</h1>

                <div className="input-group w-50">
                    <span className="input-group-text" id="basic-addon1">
                        <Search />
                    </span>
                    <input type="text" className="form-control" placeholder="Search for an artist"
                           aria-label="Input group example" aria-describedby="basic-addon1" data-testid='search' />
                </div>
            </header>
        </div>
    );
}
