import axios from "axios";

export default {
    getBook: function (query) {
        return axios.get("https://googleapis.com/books/v1/volumes?q=${query}");
    },
};