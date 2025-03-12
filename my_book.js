const book = {

	title: "The Great Gatsby",

	author: "F.Scott Fitzgerald",

	yearPublished: 1995

};

const{title: bookTitle} = book;

const{author: authorName} = book;

console.log(`${bookTitle} by ${authorName}`);


