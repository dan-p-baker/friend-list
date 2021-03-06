import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import FriendsList from './FriendsList';
import {friendsFormattedForList} from '../../selectors/friendsSelector';

class FriendsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { friends } = this.props;
        return (
            <div>
                <h1>Friends</h1>
                <FriendsList friends={friends} />
            </div>
        );
    }
}

FriendsContainer.propTypes = {
    friends: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        friends: friendsFormattedForList(state.friends)
    };
}

export default connect(mapStateToProps)(FriendsContainer);