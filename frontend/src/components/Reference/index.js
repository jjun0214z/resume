import { connect } from 'react-redux';
import Container from "./container";
import { actionCreators as referenceActions } from "redux/modules/reference";

const mapStateToProps = (state, ownProps) => {
    const { reference : { reference } } = state;
    return {
        reference
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getReference: () => {
            dispatch(referenceActions.getReference())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);