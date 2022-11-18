const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift(name);
}

function appendCat(name) {
  const appendCat = [...cats, name];
  return appendCat;
}

function prependCat(name) {
  const prependCat = [name, ...cats];
  return prependCat;
}

function removeLastCat(name) {
  const removeLastCat = cats.slice(0, -1);
  return removeLastCat;
}

function removeFirstCat(name) {
  const removeFirstCat = cats.slice(1);
  return removeFirstCat;
}
