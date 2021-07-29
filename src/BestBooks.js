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
      bookshelf: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/books')
      .then(books => {
        this.setState({ bookshelf: books.data })
      })
    }
    
    render() {
      const { user } = this.props.auth0;
      console.log(this.state.bookshelf)
      return(
        this.state.bookshelf.map((book, idx) => {
          return <Jumbotron key={idx}>
        <h1>{book.name}</h1>
        <p>
        {book.description}
        </p>
        <p>
        {book.status}
        </p>
      </Jumbotron>
    }))
  }
}

export default withAuth0(MyFavoriteBooks);
