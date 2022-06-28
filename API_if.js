console.log("Hello From JS");


// API FETCH Snippet


fetch('https://api.chucknorris.io/jokes/random')
.then(response => { return response.json() })
.then((data)  => {
   console.log("Data is ", data)
  var joke = data.value;

 console.log("JOKE: ", joke)
})


// Conditionals

let temp = 45;

if(temp>40){
    console.log("Very hot Outside")
}
else{console.log("Good Temp")}

var name = prompt("Enter Name")
console.log(name)

//Object

let person ={
 firstName: "Mark",
 lastName: "Taylor",
 car : {
   brand: "Suzuki",
   model: "Baleno"
 }

}

console.log(person.lastName)
