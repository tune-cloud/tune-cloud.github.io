import {render, screen} from "@testing-library/react";
import MobileSearchBar from "./MobileSearchBar";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('navigates to search page',()=>{
    render(<MobileSearchBar/>);
    const searchBar = screen.getByPlaceholderText('Search for an artist');
    searchBar.focus();
    expect(mockedUsedNavigate).toBeCalledWith('/search');
});
