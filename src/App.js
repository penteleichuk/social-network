import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <a href='a'>Home</a>
            <a href='b'>News Feed</a>
            <a href='c'>Messages</a>
        </div>
    );
}

export default App;
