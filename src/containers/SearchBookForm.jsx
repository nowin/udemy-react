import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setName, searchBook } from '../actions';


const SearchBookForm = props => (
  <form className="search-form" onSubmit={ (e) => {
    e.preventDefault();
    props.history.push(`/?name=${ props.name }`);
    props.searchBook();
  }}

  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.name}
      onChange={(e) => {
        e.preventDefault();
        props.setName(e.target.value)
    }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchBookForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  searchBook: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func}).isRequired,
}


export default connect(
  state => ({
    name: state.name,
  }), 
  { setName, searchBook },
)(SearchBookForm);
