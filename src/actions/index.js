import _ from 'lodash';
import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    
    var valrecherche = Math.floor(Math.random() * 100)
    await dispatch(fetchPosts(valrecherche));
    dispatch(fetchUser(getState().posts.userId));

};

export const fetchPosts = (valrecherche) => {
    return async (dispatch) => {
        const tabl = await jsonPlaceHolder.get(`/posts/`);
        dispatch({type: 'FETCH_POSTS', payload: tabl.data[valrecherche]});
    }
};

export const fetchUser = (userId) => {
    return async (dispatch) => {
        const tabl = await jsonPlaceHolder.get(`/users/`);
        dispatch({type: 'FETCH_USER', payload: _.find(tabl.data, {id : userId})});
    }
};
