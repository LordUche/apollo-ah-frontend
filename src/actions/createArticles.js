import axios from 'axios';
import actionTypeGenerator from './typeGenerator';

export const createArticleType = actionTypeGenerator('CREATE_ARTICLE');

const apiUrl = process.env.API_BASE_URL;

/**
 * Action generator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */
export const createArticleLoading = () => ({
  type: createArticleType.loading,
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const createArticleSuccess = (message) => ({
  type: createArticleType.success,
  message
});

/**
 * Action generator that is dispatched when operation fails
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const createArticleFailure = (message) => ({
  type: createArticleType.failure,
  message,
});

/**
 * action creator for creating an article
 *
 * @export
 * @param string data - form data containing article details
 * @returns {object}
 */

const createArticle = requestData => {
  return async (dispatch) => {
    dispatch(createArticleLoading());
    try {
      const { data } = await axios.post(
        `${apiUrl}/api/v1/articles`,
        requestData.formData,
        {
          headers: { Authorization: `${requestData.token}` }
        });
      dispatch(createArticleSuccess(data.message));
    } catch (error) {
      dispatch(createArticleFailure(error.response.data.data[0].message));
    }
  };
};

export default createArticle;