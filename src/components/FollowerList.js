import React from 'react';
import Follower from './Follower'

class FollowerList extends React.Component {
    
    render() {
        return(
            <div>
                {
                    this.props.followers.map(f=> {
                        return(
                            <Follower key={f.login} follower={f}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default FollowerList;