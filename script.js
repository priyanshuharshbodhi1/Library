//console.log("hello")
myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    let libraryEL = document.querySelector("#library")
    libraryEL.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEL = document.createElement("div");
        bookEL.setAttribute("class","book-card")
        bookEL.innerHTML = `
        <div class="card-header">
         <h3 class="title">${book.title}</h3> 
         <h5 class="author">by ${book.author}</h5>  
        <p>${book.pages} pages</p> 
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p> 
        </div>`;
        libraryEL.appendChild(bookEL);
    }
}

function addToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checkbox;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}


let newBookBtn = document.querySelector(".newBookBtn");
newBookBtn.addEventListener("click", function () {
    let bookForm = document.querySelector("#bookForm");
    bookForm.style.display = "block";
})

document.querySelector("#bookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addToLibrary();
})