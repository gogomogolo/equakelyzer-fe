import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import {Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import clsx from "clsx";
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
        height: 400,
        position: 'relative'
    }
}));

export const EarthQuakeLineChart = props => {
    const {className, cities, ...rest} = props;
    const classes = useStyles();

    const data = {
        labels: [],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            }
        ]
    };

    cities.map(city => {
        data.labels.push(city.earthQuakeLocalDateTime);
        data.datasets[0].data.push(city.force);
    });



    return (
        <Card className={clsx(classes.root, className)} {...rest}>
            <CardHeader title='dadasa'>

            </CardHeader>
            <Divider/>
            <CardContent>
                <Line data={data} />
            </CardContent>
            <Divider/>
        </Card>

    );
};

EarthQuakeLineChart.propTypes = {
    cities: PropTypes.array.isRequired
};
