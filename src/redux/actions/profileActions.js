/**
 * Actions for profile
 */

import profileActionTypes from "../actionTypes/profileActionTypes";

/**
 * updates the profile information
 * @function @name atnEditProfile
 * @param {object} data - updated result of the profile
 */
const atnEditProfile = (data) => {
  return {
    type: profileActionTypes.PROFILE_EDIT,
    data,
  };
};

const atnImageUpload = (image) => {
  return {
    type: profileActionTypes.PROFILE_IMAGE_UPLOAD,
    image,
  };
};

export default { atnEditProfile, atnImageUpload };
