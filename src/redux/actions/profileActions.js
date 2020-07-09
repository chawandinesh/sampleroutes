/**
 * Actions for Add,Edit and Delete the user
 */
import { EDIT_PROFILE } from "../actionTypes/profileActionTypes";

export const AtnEditProfile = (data) => {
  return {
    type: EDIT_PROFILE,
    data,
  };
};

export default { AtnEditProfile };
