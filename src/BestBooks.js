import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/books')
      .then(books => {
        this.setState({ books: books.data })
      })
  }

  render() {
    const { user } = this.props.auth0;
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books { user.name }
        </p>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
