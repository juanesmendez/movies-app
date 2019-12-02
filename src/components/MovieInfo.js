import React, { Component } from 'react';

class MovieInfo extends Component {

    componentDidMount() {
        console.log("Inside component did mount Movie Info");
        console.log(this.props.info);
    }

    render() {
        if (this.props.info === '') {
            return (<h3>No movie has been selected</h3>)
        }
        else {
            return (
                <div className="card">
                    <img src={this.props.info.poster} class="card-img-top" alt="movie"></img>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.info.name}</h5>
                        <p class="card-text">{this.props.info.description}</p>
                        <p><b>Cast:</b> {this.props.info.cast}</p>
                    </div>
                </div>
            );
        }

    }
}

export default MovieInfo;