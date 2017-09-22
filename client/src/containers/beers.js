import { connect } from 'react-redux';
import Beers from '../components/beers';
import {requestBeers} from '../actions';

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

const BeersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beers)

export default BeersContainer;