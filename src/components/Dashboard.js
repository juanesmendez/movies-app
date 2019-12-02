import React, { Component } from 'react';
import MoviesList from './MoviesList';
import MovieInfo from './MovieInfo';

class Dashboard extends Component {

    state = {
        movieInfo: ''
    }

    handleMovieInfo = (info) => {
        console.log(info);
        this.setState({ movieInfo: info })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <MoviesList handleInfo={this.handleMovieInfo} />
                    </div>
                    <div className="col-4">
                        <div className="container-fluid">
                            <h1>Movie Info</h1>
                            <br></br>
                            <MovieInfo info={this.state.movieInfo} />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;