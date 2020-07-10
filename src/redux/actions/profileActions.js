/**
 * Actions for profile
 */
import { PROFILE_EDIT } from "../actionTypes/profileActionTypes";

/**
 * updates the profile information
 * @function @name atnEditProfile
 * @param {object} data - updated result of the profile
 */
const atnEditProfile = (data) => {
  return {
    type: PROFILE_EDIT,
    data,
  };
};

export default { atnEditProfile };
