import React from 'react';
import { Input } from 'react-bootstrap';

class DayOfFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      posts: []
    };

  this.handlePost = this.handlePost.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    const { socket } = this.props;
    socket.emit('feed mounted', user);

    socket.on('new post', post => {
      this.props.addPost(post);
    });

    socket.on('new feed item', post => {
      this.props.receivePost(post);
    })

  }

  handlePost(e) {
    const { socket, user } = this.props;
    e.preventDefault();
    let text = e.target.value.trim();
    let newPost = {
      text: text,
      user: user
    };

    this.state.posts.push(text);
    socket.emit('new post', newPost);
    this.setState({ text: ''});

  }

  handleChange(e) {
    const { socket, user } = this.props;
    this.setState({ text: e.target.value });
  }

  render() {

    return (
      <div>
        {this.state.posts.map(post => (
          <Input 
            type="textarea"
            name="post"
            placeholder="Post message"
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
            onKeyDown={(e) => this.handleSubmit(e)}
          />
        ))}
      </div>
    );
  }
}

export default DayOfFeed;
