// import React from 'react';
// import { Input } from 'react-bootstrap';

// class DayOfFeed extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: '',
//       messages: []
//     };

//   this.handlePost = this.handlePost.bind(this);
//   this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     const { socket } = this.props;
//     // socket.emit('feed mounted', user);

//     socket.on('receiveMessages', payload => {
//       this.updateMessagesFeed(payload);
//     });

//     socket.on('new feed item', post => {
//       this.props.receivePost(post);
//     })

//   }

//   updateMessagesFeed(payload) {
//     this.setState({ posts: payload.messages });
//   }

//   handlePost(e) {
//     const { socket, user } = this.props;
//     e.preventDefault();
//     let message = e.target.value.trim();
//     let newPost = {
//       message: message,
//       user: user
//     };

//     this.props.postMessage(newPost);

//     this.state.posts.push(message);
//     socket.emit('new post', newPost);
//     this.setState({ text: ''});

//   }

//   handleChange(e) {
//     const { socket, user } = this.props;
//     this.setState({ text: e.target.value });
//   }

//   render() {

//     return (
//       <div>
//         {this.state.posts.map(post => (
//           <Input 
//             type="textarea"
//             name="post"
//             placeholder="Post message"
//             value={this.state.text}
//             onChange={(e) => this.handleChange(e)}
//             onKeyDown={(e) => this.handleSubmit(e)}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default DayOfFeed;
