
const cats = ["Milo","Otis","Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
cats.push("Ralph")
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  cats.unshift("Bob")
  function destructivelyPrependCat(name) {
    cats.unshift(name); 
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  cats.pop("Garfield")
  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  cats.shift("Milo")
  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  const appendCatArray = ["Broom",...cats]
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  const prependCatArray = ["Arnold",...cats]
  function prependCat(name) {
    const newCats = [name,...cats]
    return newCats;
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function removeFirstCat() {
    const newCats = cats.slice(1,);
    return newCats;
  }

  
  

  


