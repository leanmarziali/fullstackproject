import { combineReducers } from 'redux';
import ApiMessageByMessage from './ApiMessageByMessage';
import SentMessage from './SentMessage';

const rootReducer = combineReducers({    
    SentMessage,
    ApiMessageByMessage
});

export default rootReducer;