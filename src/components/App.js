import React from 'react';
import PostList from './PostList';

const App = () => {
    return (
        <div className="ui container center aligned" style={{width: "500px"}} id="wrapper">
            <div style={{margin:"auto!important"}}id="quote-box" className="ui container center aligned">
            <PostList />
            </div>
        </div>
    );
};

export default App;