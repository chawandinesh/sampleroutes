/**
 * Container for the Charts Component
 */
import { connect } from "react-redux";
import Charts from "./Charts";
import userActions from "../../../redux/actions/userActions";

/**
 * mapStateToProps to send store to the Charts component
 * @function @name mapStateToProps
 * @param  {object} state
 */
const mapStateToProps = (state) => {
  return {
    state,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the Charts component
 * @function @name mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    atnMenuSelectedKey: (e) => dispatch(userActions.atnMenuSelectedKey(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
