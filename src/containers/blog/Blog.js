import Component from 'react'
import CreatePost from './EditPostForm';
import ReadPost from './SinglePostPage';

class Blog extends Component {
  render() {
    return (
    <div>
        <CreatePost/>
        <ReadPost/>
    </div>
    )
  }
}

export default Blog;