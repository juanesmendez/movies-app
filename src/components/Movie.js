import React, { Component } from 'react';

class Movie extends Component {

    handleRowClick = () => {
        console.log("Click");
        //Llamar a la callback function
        this.props.handleInfo(this.props.info);
    }

    render() {
        return (
            <tr onClick={this.handleRowClick}>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.directedBy}</td>
                <td>{this.props.info.country}</td>
                <td>{this.props.info.budget}</td>
                <td>{this.props.info.releaseDate}</td>
                <td>{this.props.info.views}</td>
            </tr>
        );
    }
}

export default Movie;