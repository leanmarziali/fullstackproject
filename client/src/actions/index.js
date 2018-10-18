import fetch from 'cross-fetch'

import * as actionType from './ActionType';

// Action creators based on defined action types.

export function sendMessage(message) {
    return {
      type: actionType.SEND_MESSAGE,
      message
    };
  };

   function requestMessage(message) {
    return {
      type: actionType.REQUEST_MESSAGE,
      message
    };
  };
  
   function receiveMessage(json) {
    return {
      type: actionType.RECEIVE_MESSAGE,
      api_message: json.message,
      receivedAt: Date.now()
    };
  };
  
  // Thunk action creator
  export function fetchMessage(message) {
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return (dispatch) => {

      dispatch(requestMessage(message));
      // You should encapsulate API request handling on helper/utils
      // GET /API/:MESSAGE
      return fetch(`http://localhost:8000/api/${message}`)
        .then(response => response.json())
        .then( json => dispatch(receiveMessage(json)))
        //Catch errors here
        .catch((status, err) => {
           console.log("STATUS", status);
           console.log("ERROR", err);
        });
  }};