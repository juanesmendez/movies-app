import React, { Component } from 'react';

import { FormattedDate, FormattedNumber, FormattedPlural } from 'react-intl';

class Movie extends Component {

    handleRowClick = () => {
        console.log("Click");
        //Llamar a la callback function
        this.props.handleInfo(this.props.info);
    }

    checkBudgetSingular() {
        if (navigator.language.includes("es")) {
            return "Millon";
        } else if (navigator.language.includes("en")) {
            return "Million";
        }
    }

    checkBudgetPlural() {
        if (navigator.language.includes("es")) {
            return "Millones";
        } else if (navigator.language.includes("en")) {
            return "Millions";
        }
    }

    render() {
        return (
            <tr onClick={this.handleRowClick}>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.directedBy}</td>
                <td>{this.props.info.country}</td>
                <td>
                    {this.props.info.budget} &nbsp;
					<FormattedPlural
                        value={this.props.info.budget}
                        one={this.checkBudgetSingular()}
                        other={this.checkBudgetPlural()} />

                </td>
                <td>
                    <FormattedDate
                        value={new Date(this.props.info.releaseDate)}
                        year='numeric'
                        month='long'
                        day='numeric'
                        weekday='long'
                    />
                </td>
                <td>
                    <FormattedNumber
                        value={this.props.info.views}

                    />

                </td>
            </tr>
        );
    }
}

export default Movie;