import React, { Component } from 'react';
import MoviesList from './MoviesList';
import MovieInfo from './MovieInfo';

import { FormattedMessage } from 'react-intl';

class Dashboard extends Component {

    state = {
        movies: [],
        movieInfo: ''
    }

    componentDidMount() {

        if (!navigator.onLine) {
            if (localStorage.getItem('movies') === null)
                this.setState({ movies: [] })
            else
                this.setState({ movies: JSON.parse(localStorage.getItem('movies')) });
        }

        if (this.language() === "es") {
            fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
                .then(res => res.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', JSON.stringify(res));
                    console.log(this.state.movies);
                })
        } else if (this.language() === "en") {
            fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
                .then(res => res.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', JSON.stringify(res));
                    console.log(this.state.movies);
                })
        }


    }

    language() {
        if (navigator.language.includes("es")) {
            return "es";
        } else if (navigator.language.includes("en")) {
            return "en";
        }

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
                        <div className="container-fluid">
                            <MoviesList movies={this.state.movies} handleInfo={this.handleMovieInfo} />
                        </div>

                    </div>
                    <div className="col-3">
                        <div className="container-fluid">
                            <h2 className="bg-warning"><FormattedMessage id="Title2" /></h2>
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