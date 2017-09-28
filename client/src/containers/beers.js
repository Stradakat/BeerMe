import { connect } from 'react-redux';
import Beers from '../components/beers';
import {requestBeers} from '../actions/index';

const mapStateToProps = (state) => ({
  data: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    requestBeers: () => {
      dispatch(requestBeers())
    }
  }
}

const RecListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beers)

export default RecListContainer;