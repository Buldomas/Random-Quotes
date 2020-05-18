//import _ from 'lodash';
import jsonPlaceHolder from '../api/jsonPlaceHolder';
import randomString from '../components/rndString';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    
    var valrecherche = randomString({
        length: 2,
        numeric: true,
        letters: false
    });
    if (valrecherche === '0') {
        valrecherche = '1';
    }
    if (valrecherche.substring(0,1) === '0') {
        valrecherche = valrecherche.substring(1, valrecherche.length-1);
      }
    await dispatch(fetchPosts(valrecherche));
    await dispatch(fetchUser(getState().posts.userId));

};

export const fetchPosts = (valrecherche) => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get(`/posts/${valrecherche}`);
        dispatch({type: 'FETCH_POSTS', payload: response.data});
    }
};

export const fetchUser = (userId) => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get(`/users/${userId}`);
        dispatch({type: 'FETCH_USER', payload: response.data});
    }
};
