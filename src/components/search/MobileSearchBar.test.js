import {render, screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import { createMemoryHistory } from 'history';
import MobileSearchBar from "./MobileSearchBar";

test('navigates to search page',()=>{
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <MobileSearchBar/>
        </Router>)
    ;
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    expect(history.location.pathname).toBe('/search');
});
