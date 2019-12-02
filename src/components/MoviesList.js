import React, { Component } from 'react';
import Movie from './Movie';

import { FormattedMessage } from 'react-intl';

class MoviesList extends Component {

    state = {
        movies: []
    }

    componentDidMount() {

        if (!navigator.onLine) {
            if (localStorage.getItem('movies') === null)
                this.setState({ movies: [] })
            else
                this.setState({ movies: localStorage.getItem('movies') });
        }

        if (this.language() === "es") {
            fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
                .then(res => res.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', res);
                    console.log(this.state.movies);
                })
        } else if (this.language() === "en") {
            fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
                .then(res => res.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', res);
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

    render() {
        return (
            <div>
                <h1><FormattedMessage id="Title1" /></h1>
                <br></br>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"><FormattedMessage id="Name" /></th>
                            <th scope="col"><FormattedMessage id="DirectedBy" /></th>
                            <th scope="col"><FormattedMessage id="Country" /></th>
                            <th scope="col"><FormattedMessage id="Budget" /></th>
                            <th scope="col"><FormattedMessage id="Release" /></th>
                            <th scope="col"><FormattedMessage id="Views" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(m => <Movie info={m} handleInfo={this.props.handleInfo} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MoviesList;