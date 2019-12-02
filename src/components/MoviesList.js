import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
            .then(res => res.json())
            .then(res => {
                this.setState({ movies: res });
                console.log(this.state.movies);
            })
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <br></br>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Directed by</th>
                            <th scope="col">Country</th>
                            <th scope="col">Budget</th>
                            <th scope="col">Release</th>
                            <th scope="col">Views</th>
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