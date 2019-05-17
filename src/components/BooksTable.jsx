import React from 'react';
import PropTypes from 'prop-types';
import BookRow from './BookRow';
import { connect } from 'react-redux';

const BooksTable = ({ books }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>タイトル</th>
        <th>値段</th>
        <th>レビュー</th>
        <th>レビュー件数</th>
      </tr>
      {books.map(book => (<BookRow key={book.id} book={book}/>))}
    </tbody>
  </table>
);

BooksTable.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any),
};

BooksTable.defaultProps = {
  books: [],
};



export default connect(
  state => ({
    books: state.books
  }),
)(BooksTable);
