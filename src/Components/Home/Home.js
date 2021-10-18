import React, { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import { Form, FormControl } from "react-bootstrap";
import "./Home.css";
import Pagination from "@mui/material/TablePagination";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  // pagination calculation
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // displaying the list, pagination, search
  const displayMovie = movies
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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

  // for server-side searching
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

          <Pagination
            rowsPerPageOptions={[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20,
            ]}
            component="div"
            count={movies.length}
            rowsPerPage={rowsPerPage}
            page={page}
            style={{
              color: "white",
              padding: "10px",
              height: "100%",
              width: "100%",
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
