import React from 'react';


class Follower extends React.Component {
    render() {
        const { follower } = this.props
        return(
            <div>
                <img src={follower.avatar_url}></img>
                <a target='_blank' href={follower.html_url}> <p>{follower.login}</p></a>
            </div>
            
        )
    }
}
export default Follower;