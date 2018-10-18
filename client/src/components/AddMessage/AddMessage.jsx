import { connect } from 'react-redux';

import AddMessageView from './AddMessage.view';
import { sendMessage } from '../../actions';

const mapDispatchToProps = (dispatch) => (
    {
      onClick: (input) => {
        if (input)
          dispatch(sendMessage(input));
      },
    }
  );
  
const AddMessage = connect(
    null,
    mapDispatchToProps,
  )(AddMessageView);
  
  export default AddMessage;