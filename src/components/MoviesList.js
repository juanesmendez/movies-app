import React, { Component } from 'react';
import Movie from './Movie';
import * as d3 from 'd3';

import { FormattedMessage } from 'react-intl';

class MoviesList extends Component {

    state = {
        svg: ""
    }
    componentDidMount() {
        //this.setState({ moviesChart: this.props.movies });
        console.log(this.props.movies);
        d3.select(this.refs.canvas).append("svg");
    }

    drawChart(data) {
        console.log(data);
        const svg = d3.select(this.refs.svg);
        //código de la gráfica

        const width = 700;
        const height = 500;
        const margin = { top: 10, left: 70, bottom: 40, right: 10 };
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top - margin.bottom;


        svg.attr("width", width);
        svg.attr("height", height);

        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return d.views })])
            .range([iheight, 0]);

        const x = d3.scaleBand()
            .domain(data.map(d => d.id))
            .range([0, iwidth])
            .padding(0.1);

        const bars = g.selectAll("rect").data(data);

        bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "lightgreen")
            .attr("x", d => x(d.id))
            .attr("y", d => y(d.views))
            .attr("height", d => iheight - y(d.views))
            .attr("width", x.bandwidth())

        g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${iheight})`);

        g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));
    }

    render() {
        console.log(this.props.movies);

        return (
            <div>
                <h1 className="bg-info text-left"><img src="https://icon-library.net/images/movie-png-icon/movie-png-icon-0.jpg"
                    style={imgStyle} />
                    <FormattedMessage id="Title1" /></h1>
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
                        {this.props.movies.map(m => <Movie info={m} handleInfo={this.props.handleInfo} />)}
                    </tbody>
                </table>
                <h2 className="bg-info"><FormattedMessage id="Title3" /></h2>

                <div ref="canvas">
                    <div className="row justify-content-center">

                        <svg ref="svg">
                            {this.drawChart(this.props.movies)}
                        </svg>

                    </div>


                </div>
            </div>
        );
    }
}

const imgStyle = {
    width: "50px",
    height: "50px",
    padding: "10px",
    marginBottom: "7px",
};

export default MoviesList;