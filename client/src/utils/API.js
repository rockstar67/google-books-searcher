import axios from "axios";

export default {
  // Searches all books
  searchBooks: function (book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  // Saves the book with the given id
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Finds the book with the given id
  findBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes a book from the database
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
}
