import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
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
                    {this.props.events.length}
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({ events: state.events.events });

export default connect(mapStateToProps)(App);
