import { connect } from 'react-redux';

import ApiMessageView from './ApiMessage.view';

// Prepare  data for MessageView (presentational component).
const mapStateToProps = (state) => (
    {
      message: state.ApiMessageByMessage.message
    }
  );

const ApiMessage = connect(
    mapStateToProps,
    null
)(ApiMessageView);

export default ApiMessage;