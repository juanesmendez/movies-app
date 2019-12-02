import React, { Component } from 'react';
import * as d3 from 'd3';

import { FormattedMessage } from 'react-intl';

class MoviesChart extends Component {

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

                    this.drawChart(this.state.movies);
                })
        } else if (this.language() === "en") {
            fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
                .then(res => res.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', res);
                    console.log(this.state.movies);

                    this.drawChart(this.state.movies);
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

    drawChart(data) {
        console.log(data);
        const svg = d3.select(this.refs.canvas).append("svg");
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
        return (
            <div>
                <h2><FormattedMessage id="Title3" /></h2>

                <div ref="canvas">

                </div>
            </div>

        );
    }
}

export default MoviesChart;