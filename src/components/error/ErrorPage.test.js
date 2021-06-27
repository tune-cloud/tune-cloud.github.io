import ErrorPage from "./ErrorPage";
import {render, screen} from "@testing-library/react";

test('renders Error Page', ()=>{
   render(<ErrorPage/>);
   const image = screen.getByAltText(/cloud/i);
   expect(image).toBeInTheDocument();
});

test('error page links to github issues page', ()=>{
    render(<ErrorPage/>);
    const link = screen.getByText('open an issue on Github');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/tune-cloud/tune-cloud.github.io/issues');
});
