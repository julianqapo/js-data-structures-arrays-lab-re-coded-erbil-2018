// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(Ralph){
  drivers.push(Ralph);
}


function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}


function destructivelyRemoveFirstDriver(){
  drivers.shift();
}


function appendDriver(Broom){
  let x = [...drivers];
  x.push("Broom");
}
