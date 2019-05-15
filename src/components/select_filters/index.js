import React, { Component } from 'react';
import './select_filters.css';
import _ from "lodash";
import { connect } from "react-redux"
import { setSelectedYear } from "../../js/actions/index"

const mapDispatchToProps = dispatch => {
  return{
    setSelectedYear: year => dispatch(setSelectedYear(year))
  }
}

class SelectFilters extends Component{
  constructor(props) {
    super(props)
    this.state = { selectedYear: null }
  }

  selected(event){
    let select = event.target
    let year = select.options[select.selectedIndex].value
    this.setState({ selectedYear: year })
    this.props.setSelectedYear(year)
    this.props.handleSubmit(event)
  }


  render() {
    function yearsOptions(){
      var currentYear = new Date().getFullYear();
      var years = _.range(1920, currentYear + 1);
      var options = [<option value="0" key="0"> - </option>]
      options.push(
        years.reverse().map( el => (
          <option value={el} key={el}>{el}</option>
        ))
      )
      return options
    }

    return (
      <div className="select-filters-outer">
        <div className="select-filters">
          <label htmlFor="year-filter"> Año </label>
          <div className="custom-select">
            <select id="year-filter" onChange={(event) => this.selected(event)} value={this.state.selectedYear} >
              { yearsOptions() }
            </select>
          </div>
        </div>
        <div className="select-filters">
          Genre filter
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SelectFilters)