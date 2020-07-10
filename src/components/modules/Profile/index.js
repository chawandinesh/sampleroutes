/**
 * Container for the Profile Component
 */
import { connect } from "react-redux";
import Profile from "./Profile";
import profileActions from "../../../redux/actions/profileActions";

/**
 * mapStateToProps to send state to the component
 * @function @name mapStateToProps
 * @param {object} state
 */
const mapStateToProps = (state) => {
  const { profile, imageList } = state;
  return {
    profile,
    imageList,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the Profile component
 * @function @name mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    atnEditProfile: (e) => dispatch(profileActions.atnEditProfile(e)),
    atnImageUpload: (e) => dispatch(profileActions.atnImageUpload(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
