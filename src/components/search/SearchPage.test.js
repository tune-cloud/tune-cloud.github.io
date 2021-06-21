import {render, screen} from "@testing-library/react";
import SearchPage from "./SearchPage";

test('renders search bar', ()=>{
    render(<SearchPage/>)
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    expect(searchBar).toBeInTheDocument();
});
