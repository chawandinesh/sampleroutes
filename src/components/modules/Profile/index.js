/**
 * Container for the Profile Component
 */
import { connect } from "react-redux";
import Profile from "./Profile";
import { AtnEditProfile } from "../../../redux/actions/profileActions";

/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  const { profile } = state;
  return {
    profile,
  };
};
/**
 * mapDispatchToProps responsible to send actions to the components
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    AtnEditProfile: (e) => dispatch(AtnEditProfile(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
