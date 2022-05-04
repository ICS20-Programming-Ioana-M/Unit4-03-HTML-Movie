'use strict'

// funtion tells user what the highest rated movie can watch
function buttonClicked() {
  // declare variables for age
  let age = parseInt(document.getElementById('age').value);

  // if statement that tells user what rated movie they can see alone
  if(age > 17) {
    document.getElementById('answer').innerHTML = "You can see an R-rated movie alone."
  } else if(age >= 13) {
    document.getElementById('answer').innerHTML = "You can see an PG-13 movie alone."
  } else if(age >= 8) {
    document.getElementById('answer').innerHTML = "You can see an PG/G movie alone."
  } else if(age < 8 && age > -1) {
    document.getElementById('answer').innerHTML = "You're too young to watch a movie alone!!!!"
  } else {
    document.getElementById('answer').innerHTML = "There's no way you're " + age + " years old. Stop lying."
  }
}