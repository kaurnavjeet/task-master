import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/visibilityFilter";
import Link from "./Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

export default connect(mapStateToProps)(Link);
