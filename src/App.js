import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LogIn from './components/auth/LogIn';
import CreateEvent from './components/events/CreateEvent';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1>
                        Let us get the ball rolling guys as usual{' '}
                        <span role="img" aria-label="thumbs up">
                            👍
                        </span>
                    </h1>
                </header>
            </div>
            <LogIn />
            <CreateEvent />
        </BrowserRouter>
    );
}

export default App;
