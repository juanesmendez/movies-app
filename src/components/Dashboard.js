import React, { Component } from 'react';
import MoviesList from './MoviesList';
import MovieInfo from './MovieInfo';
import MoviesChart from './MoviesChart';

import { FormattedMessage } from 'react-intl';

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
                    <div className="col-9">
                        <MoviesList handleInfo={this.handleMovieInfo} />
                        <MoviesChart movies={this.state.movies} />
                    </div>
                    <div className="col-3">
                        <div className="container-fluid">
                            <h2><FormattedMessage id="Title2" /></h2>
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