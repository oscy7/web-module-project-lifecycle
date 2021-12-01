import React from 'react';;
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';
class App extends React.Component {

  state = {
    currentUser: 'oscy7',
    user:{},
    followers: [],
  }

  //Code below is for setting state to user:{}
  componentDidMount () {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          user: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
//code below is for setting state to our followers:[]
  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, 
      currentUser: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          user: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return(
      <div>
        <h1>My Github Card</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <button>Search</button>
        </form>
        <User user={this.state.user}/>
        <FollowerList followers={this.state.followers}/> 
      </div>
    );
  }
}

export default App;
