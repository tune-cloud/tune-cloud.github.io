export default function ErrorPage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src='/error.png' alt='cartoon cloud crying'/>
                <p>We're sorry, an error occurred! Please try again!</p>
                <p>You can <a href='https://github.com/tune-cloud/tune-cloud.github.io/issues'>open an issue on Github</a> if the error persists.</p>
            </header>
        </div>
    );
};
