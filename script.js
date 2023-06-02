//console.log("hello")
myLibrary = [];

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function render(){
    let libraryEL = document.querySelector("#library")
    libraryEL.innerHTML="";
    for (i=0; i<myLibrary.length; i++ ) {
        let book = myLibrary[i];
        let bookEL= document.createElement("div");
        bookEL.innerHTML=`<p>${book.title}</p>`;
        libraryEL.appendChild(bookEL);
    }
}

function addToLibrary(){
    let title= document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checkbox;
    let newBook =new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}


let newBookBtn = document.querySelector(".newBookBtn");
newBookBtn.addEventListener("click", function(){
    let bookForm = document.querySelector("#bookForm");
    bookForm.style.display="block";
})

document.querySelector("#bookForm").addEventListener("submit",function(event){
   // alert("hello")
    event.preventDefault();
    addToLibrary();
})