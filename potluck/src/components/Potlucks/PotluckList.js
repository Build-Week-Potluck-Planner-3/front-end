import React from 'react'
import { connect } from 'react-redux';
import { fetchPotLuck } from '../../actions/potluckActions';
import PotluckListItem from './PotluckListItem';
import { Link } from 'react-router-dom';


function PotluckList(props) {
    const { potlucks, loading } = props;

    // useEffect(() => {
    //     props.fetchPotLuck();
    // }, [])

    if (loading) {
        return <h1>{loading}</h1>;
    }

    return (
        <div>
            {potlucks.map(potluck => <PotluckListItem key = {potluck.id} potluck = {potluck} />)}
            <div className="buttonAdd">
                <Link to={`/addPotluck`} className="addPotluck">
                    <input type="button" className="addPotluckButton" value="Add Potluck" />
                </Link>
            </div>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        potlucks: state.potluckReducer.potlucks,
        loading: state.potluckReducer.loading,
    }
}

export default connect(mapStateToProps, { fetchPotLuck })(PotluckList);
