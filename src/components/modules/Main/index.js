/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import Main from "./Main";

/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  const { isLoginSuccess } = state;
  return {
    isLoginSuccess,
  };
};

export default connect(mapStateToProps, {})(Main);
