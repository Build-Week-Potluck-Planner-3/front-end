import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPotLuck } from '../../actions/potluckActions';

function EventList(props) {
    const { potlucks, loading } = props;

    useEffect(() => {
        fetchPotLuck();
    }, [])

    if (loading) {
        return <h1>{loading}</h1>;
    }

    return (
        <div>
            <h1> Event List (Guest Attending) </h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        potlucks: state.potlucks,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, { fetchPotLuck })(EventList);
