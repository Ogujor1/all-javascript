let library = [];

let book1 = {
  title: 'My book',
  content: 'We read always',
  price: 200,
  available: true

}

let book2 = {
  title: 'Our book',
  content: 'Oue home always',
  price: 270,
  available: true

}

let book3 = {
  title: 'All book',
  content: 'All hits hard',
  price: 300,
  available: false

}

library.push(book1, book2, book3);
console.log(library)

function check(titles){
  for (i=0; i<library.length; i++){
    if (library[i].title.includes(titles)){
      console.log(`${titles}, is Available!!`)
    };
  };
};

check("All book")
