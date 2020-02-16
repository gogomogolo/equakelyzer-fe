import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCities } from "../../../../actions/cityActions";
import {EarthQuakeLineChart} from './EarthQuakeLineChart';

class LatestEarthQuakes extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
        const {fetchCities: FetchCities, ...rest} = this.props;
        return (
            <div>
                <EarthQuakeLineChart {...rest}/>
            </div>
        );
    }
}

LatestEarthQuakes.propTypes = {
    fetchCities: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    cities: state.cities.items
});

export default connect(mapStateToProps, {fetchCities})(LatestEarthQuakes);
