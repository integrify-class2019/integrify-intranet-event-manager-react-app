import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1>
                        Let us get the ball rolling guys as usual
                        <span role="img" aria-label="thumbs up">
                            👍
                        </span>
                    </h1>
                </header>
                <Switch>
                    <Route exact path="/" component={DashBoard} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
