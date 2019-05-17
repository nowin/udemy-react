import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';
import { getbooks } from '../domain/BookRepository';

export const setName = name => dispatch => dispatch({ type: 'CHANGE_NAME', name})
export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place });
export const setErrorMessage = message => dispatch => dispatch({ type: 'CHANGE_ERROR_MESSAGE', message});

export const setHotels = hotels => dispatch => dispatch({ type: 'CHANGE_HOTELS', hotels });
export const setSortKey = sortKey => dispatch => dispatch({ type: 'CHANGE_SORT_KEY', sortKey });
export const setBooks = books => dispatch => dispatch({type: 'CHANGE_BOOKS', books})

export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place)
    .then(({status, address, location}) => {
      switch (status){
        case 'OK': {
          dispatch({ type: 'GEOCODE_FETCHED', address, location })
          return searchHotelByLocation(location);
          break;
        }
        case 'ZERO_RESULTS': {
          dispatch(setErrorMessage('結果が見つかりませんでした'));
          break;
        }
        default: {
         dispatch(setErrorMessage('エラーが発生しました'));
        }
      }
      return [];
    })
    .then((hotels) => {
      dispatch(setHotels(hotels));
    })
};

export const searchBook = () => (dispatch, getState) => {
  getbooks(getState().name)
    .then(( { books } ) => {
      // switch (status){
      //   case 'OK': {
      //     dispatch(setBooks(books));
      //     break;
      //   }
      //   case 'ZERO_RESULTS': {
      //     dispatch(setErrorMessage('結果が見つかりませんでした'));
      //     break;
      //   }
      //   default: {
      //    dispatch(setErrorMessage('エラーが発生しました'));
      //   }
      // }
      return books;
    })
};

