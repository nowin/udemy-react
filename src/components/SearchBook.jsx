import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBookForm from '../containers/SearchBookForm';
import BooksTable from './BooksTable';
import { searchBook } from '../actions/';

class SearchBookPage extends Component {
  componentDidMount(){
    this.props.dispatch(searchBook())
  }

  render() {
    return(
      <div className="search-page">
        <h1 className="app-title">本検索</h1>
        < SearchBookForm history={ this.props.history }/>
        <div className="result-area">
          <h2>本検索結果</h2>
          <BooksTable/>
        </div>
      </div>
    );
  }
}

SearchBookPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchBookPage);
