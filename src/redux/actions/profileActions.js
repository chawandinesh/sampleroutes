/**
 * Actions for profile
 */
import {
  PROFILE_EDIT,
  PROFILE_IMAGE_UPLOAD,
} from "../actionTypes/profileActionTypes";

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

const atnImageUpload = (image) => {
  return {
    type: PROFILE_IMAGE_UPLOAD,
    image,
  };
};

export default { atnEditProfile, atnImageUpload };
