import "./App.css"

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://brainrain.com.ua/wp-content/uploads/2016/11/intel-company-logo-png-hd-sk.png"
                     width={100} height={100} alt=""/>
            </header>
            <nav className="nav">
                <div><a href="#1">Profile</a></div>
                <div><a href="#1">Messages</a></div>
                <div><a href="#1">News</a></div>
                <div><a href="#1">Music</a></div>
                <div><a href="#1">Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
