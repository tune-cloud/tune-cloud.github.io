import {render, screen} from "@testing-library/react";
import SearchingPage from "./SearchingPage";

test('renders search bar', ()=>{
    render(<SearchingPage/>)
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    expect(searchBar).toBeInTheDocument();
});
