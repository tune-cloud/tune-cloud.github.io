import {render, screen} from "@testing-library/react";
import SearchPage from "./SearchPage";
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('renders search bar', ()=>{
    render(<SearchPage/>)
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    expect(searchBar).toBeInTheDocument();
});
