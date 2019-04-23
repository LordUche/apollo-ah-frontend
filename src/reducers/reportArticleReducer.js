import { reportArticleType } from '../actions/reportArticleAction';
import initialState from '../store/initialState';

/**
 * @description - report article reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */
const reportArticleReducer = (state= initialState, action= {}) => {
  console.log(action);
};

export default reportArticleReducer;
