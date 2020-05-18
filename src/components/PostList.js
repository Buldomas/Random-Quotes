import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    onClick(posts) {
        this.props.fetchPostsAndUsers();
        //this.setState({selectedVideo: video});
        //return;
    }
    render() {
        return (
            <div style={{margin: "auto" }} className="ui segment center aligned" key={this.props.posts.id}>                    
                <p id="text">{this.props.posts.body}</p>
                <UserHeader userId={this.props.posts.userId}/>
                <div className="ui horizontal segments">
                    <div className="ui segment">
                        <div className="ui button">
                            <a href="http://www.twitter.com/intent/tweet" id="tweet-quote"><i className="ui icon twitter" /></a>
                        </div>
                        <div className="ui button">
                            <a href="/" id="tumblr-quote"><i className="ui icon tumblr" /></a>
                        </div>
                    </div>
                    <div className="ui segment">
                        <div id="new-quote" onClick={() => this.onClick(this.props.posts)} className="ui button">New quote</div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {posts : state.posts};
}
export default connect(mapStateToProps, {fetchPostsAndUsers: fetchPostsAndUsers})(PostList);