import React from 'react';
import PropTypes from 'prop-types';

const BookRow = ({ book }) => (
  <tr>
    <td><img src={book.thumbUrl} alt={book.name}/></td>
    <td><a href={book.url} target="_blank">{book.name}</a></td>
    <td>{book.price ? `${book.price}円`: '空室なし'}</td>
    <td>{book.reviewAverage}</td>
    <td>{book.reviewCount}</td>
  </tr>
);

BookRow.propTypes = {
  hotel: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      thumbUrl: PropTypes.string,
      price: PropTypes.number,
      reviewCount: PropTypes.number,
      reviewAverage: PropTypes.number,
    }).isRequired,
};

export default BookRow;
