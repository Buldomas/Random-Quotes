import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {
    render() {
        const user = this.props.users.find(user => user.id === this.props.userId);
        if (!user) {
            return <div id="author" className="ui right aligned header">{ this.props.userId} " Inconnu  "</div>;
        }
        return <div id="author" className="ui right aligned header">"  {user.name}  "</div>;
    }
}

const mapStateToProps = (state) => {
    return { users: state.users};
};

export default connect(mapStateToProps)(UserHeader);