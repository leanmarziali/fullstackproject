import { connect } from 'react-redux';

import MessageView from './Message.view';
import { fetchMessage } from '../../actions';

// Prepare data for MessageView (presentational component).
const mapStateToProps = (state) => (
    {
      message: state.SentMessage
    }
  );

  const mapDispatchToProps = (dispatch) => (
    {
      getApiMessage: (message) => {
        dispatch(fetchMessage(message));
      },
    }
  );

const Message = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageView);

export default Message;