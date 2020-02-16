import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCities } from "../actions/cityActions";
import PropTypes from 'prop-types';

class Chart extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

Chart.propTypes = {
    fetchCities: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    cities: state.cities
});

export default connect(mapStateToProps, {fetchCities})(Chart) ;
