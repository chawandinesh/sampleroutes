/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  const { isLoginSuccess, users } = state;
  return {
    users,
    isLoginSuccess,
  };
};

export default connect(mapStateToProps)(Dashboard);
