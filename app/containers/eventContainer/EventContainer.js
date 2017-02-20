import { connect } from 'react-redux';
import Event from '../../components/event/Event';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const EventContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

export default EventContainer;
