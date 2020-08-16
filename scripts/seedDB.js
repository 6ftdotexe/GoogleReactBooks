const mongoose = require("mongoose");
const db = require("../models");
const e = require("express");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleboks");

const bookSeed = {
    authors: ["J. K. Rowling"],
    description: "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years. But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry - and anyone who reads about him - will find unforgettable. For it's there that he finds not only friends, aerial sports, and magic in everything from classes to meals, but a great destiny that's been waiting for him... if Harry can survive the encounter.",
    image: "https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM",
    link: "https://books.google.com/books?id=iwiYGwAACAAJ&source=gbs_ViewAPI",
    title: "Harry Potter and the Sorcerer's Stone"
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })