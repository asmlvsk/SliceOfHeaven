import React from "react";
import { connect } from "react-redux";
import FilterPanel from "./FilterPanel";

class FilterPanelContainer extends React.Component{
    render(){
        return<FilterPanel filter={this.props.filter} />
    }
}

const mapStateToProps = (state) =>({
    
});

export default connect(mapStateToProps)(FilterPanelContainer);