import {
    REQUEST_MESSAGE,
    RECEIVE_MESSAGE
} from '../actions/ActionType';

function message( state, action) {
    switch (action.type) {
      case REQUEST_MESSAGE:
        return Object.assign({}, state, {
          isFetching: true,
          message: "Waiting for the message"
        })
      case RECEIVE_MESSAGE:
        return Object.assign({}, state, {
          isFetching: false,
          message: action.api_message,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }

function ApiMessageByMessage(state = {
  isFetching: false,
  message: ''
  },
  action) {
    switch (action.type) {
      case RECEIVE_MESSAGE:
      case REQUEST_MESSAGE:
        return Object.assign({}, state, message(state, action));
      default:
        return state
    }
  }

export default ApiMessageByMessage;