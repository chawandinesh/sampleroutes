/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import Main from "./Main";
import { AtnAdd, AtnDelete, AtnEdit } from "../redux/actions/appActions";

/**
 * mapStateToProps to send store to the component
 * @param  store
 */
const mapStateToProps = (store) => {
  return {
    state: store,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the components
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    AtnAdd: (e) => dispatch(AtnAdd(e)),
    AtnDelete: (idx) => dispatch(AtnDelete(idx)),
    AtnEdit: (idx, value) => dispatch(AtnEdit(idx, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
