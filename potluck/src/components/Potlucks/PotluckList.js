import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPotLuck } from '../../actions/potluckActions';
import Potluck from './Potluck';

function PotluckList(props) {
    const { potlucks, loading } = props;

    useEffect(() => {
        fetchPotLuck();
    }, [])

    if (loading) {
        return <h1>{loading}</h1>;
    }

    return (
        <div>
            {/* map through potlucks and pass objects as props to new component (Potluck) */}
            {/* Potluck component will be a stateless, presentational component */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        potlucks: state.potlucks,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, { fetchPotLuck })(PotluckList);
