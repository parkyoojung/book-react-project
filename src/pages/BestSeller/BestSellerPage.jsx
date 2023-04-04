import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'components/CommonUI/Container';
import Header from 'components/Header/Header';
import { Card, CardMedia, CardContent, Typography, Button } from "@material-ui/core";

function BestSellerPage() {
  const [details, setDetails] = useState('');
  const navigate = useNavigate('')

  const handleMove = (e) => {
    e.preventDefault();
    setDetails('')
    navigate(`/bestseller/${details}`)
  }

  const [pageIndex, setPageIndex] = useState(0);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedBooks = await fetchBooks(pageIndex, 10);
      setBooks([
        ...books, 
        ...fetchedBooks
      ]);
    }
    fetchData();
  }, [pageIndex]);

  function handleLoadMore() {
    setPageIndex(pageIndex + 10);
  }

  return (
      <Container>
        <Header/>
        {/* <div>
          BestSellerPage
          <div onClick={handleMove}>
            BestSellerDetail
          </div>
          <button onClick={handleMove}>
            BestSellerDetail
          </button>
        </div> */}
         <div>
          {books.map((book, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                height="50"
                image={book.thumbnail}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {book.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {book.authors}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {book.publisher}
                </Typography>
              </CardContent>
            </Card>
          ))}
          <Button 
            variant="contained" color="primary" 
            onClick={handleLoadMore}
          >
            더 보기
          </Button>
        </div>
      </Container>
  )
}

export default BestSellerPage

async function fetchBooks(pageIndex, maxResults) {
  const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:0451526538,ISBN:0802130208,ISBN:9780679745365,ISBN:9780141182803,ISBN:9780446310789,ISBN:9780679760800,ISBN:9780394756820,ISBN:9780140283334,ISBN:9780345402889,ISBN:9780553272586&format=json&jscmd=data`);
  const data = await response.json();
  
  const books = Object.values(data).map((book) => {
    const authors = book.authors.map((author) => author.name).join(", ");
    const publisher = book.publishers[0].name;
    const thumbnail = book.cover.medium;

    return {
      title: book.title,
      authors: authors,
      publisher: publisher,
      thumbnail: thumbnail
    }
  });

  return books.slice(pageIndex, pageIndex + maxResults);
}
