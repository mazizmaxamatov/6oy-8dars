import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Header from "./pages/Header";


const App = () => {
  return (
    <Router>
      <Header/>

      <div className="mt-[100px] mb-[200px]">
        <h1 style={{ textAlign: "center" }}>📚 Kitoblar CRUD App</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

