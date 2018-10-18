import {
    SEND_MESSAGE
} from '../actions/ActionType';

function SentMessage(state = '', action) {
    switch (action.type) {
      case SEND_MESSAGE:
        return action.message
      default:
        return state
    }
  }

  export default SentMessage;