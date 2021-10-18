import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Movies from "../Movies/Movies";
import { Form, FormControl } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const moviePerPage = 9;

  const pagesVisited = pageNumber * moviePerPage;

  const displayMovie = movies
    .slice(pagesVisited, pagesVisited + moviePerPage)
    .filter((movie) => {
      if (searchTerm === "") {
        return movie;
      } else if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return movie;
      }
    })
    .map((movie) => (
      <div className=" col-md-6 col-lg-4 col-sm-12">
        {" "}
        <Movies {...movie} key={movie.id}></Movies>
      </div>
    ));

  const pageCount = Math.ceil(movies.length / moviePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getMovies(
      `https://api.themoviedb.org/4/list/7096014?page=1&api_key=4275cf25831de3b150d6ae572b31a179`
    );
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  const searchAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=4275cf25831de3b150d6ae572b31a179&query=";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchMovie) {
      getMovies(searchAPI + searchMovie);
      setSearchMovie("");
    }
  };
  const handleOnChange = (e) => {
    setSearchMovie(e.target.value);
  };
  return (
    <>
      <div
        style={{
          height: "60px",
          padding: "10px 5px 10px 5px",
          backgroundColor: "#032541",
        }}
        
      >
        <Form onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="server-side searching"
            className="search-button search justify-content-between  "
            aria-label="Search"
            value={searchMovie}
            onChange={handleOnChange}
         
          />
        </Form>
      </div>
      <div className="container">
        <Form>
          <FormControl
            type="search"
            placeholder="Search the Movie"
            className="search-button text-right"
            aria-label="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Form>

        <div className=" row mb-5">
          {displayMovie}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          ></ReactPaginate>
          <p>
            {pagesVisited + moviePerPage} out of {movies.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
