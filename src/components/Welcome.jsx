import PropTypes from 'prop-types';
import moment from 'moment';

export const Welcome = ({ userName }) => {
    const hour = Number(moment().format('H'));

    if (hour >= 8 && hour < 12) {
        return (
            <div>{`Buenos días ${userName} `}</div>
        )
    } else if (hour >= 12 && hour < 20) {
        return (
            <div>{`Buenas tardes ${userName} `}</div>
        )
    } else {
        return (
            <div>{`Buenas noches ${userName} `}</div>
        )
    }
}

Welcome.propTypes = {
    userName: PropTypes.string.isRequired
}

Welcome.defaultProps = {
    userName: 'anónimo'
}