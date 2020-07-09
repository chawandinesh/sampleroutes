/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import Login from "./Login";
import { AtnLogin } from "../../../redux/actions/userActions";

/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  return {
    state,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the components
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    AtnLogin: () => dispatch(AtnLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
