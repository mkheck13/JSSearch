

let searchBar = document.getElementById("searchBar");
let clearButton = document.getElementById("clearButton");
let resultsList = document.getElementById("resultsList");
let nameList = [];

function getAllData(){
    fetch("../data/data.json")
    .then(response => response.json())
    .then(data =>{
        console.log(data);

        for(let i = 0; i < data.names.length; i++){
            nameList.push(`${data.names[i].firstName} ${data.names[i].lastName}`);
        };
        console.log(nameList);
    });
};
getAllData();


searchBar.addEventListener("input", function(){
    let userInput = searchBar.value;
    console.log(userInput);

    userInput = userInput.trim().toLowerCase();
    let foundList = [];
    
    for(let i = 0; i < nameList.length; i++){
        if(nameList[i].toLowerCase().includes(userInput)){
            foundList.push(nameList[i]);
        }
    }
    console.log(foundList);

    setList(foundList);
});

function setList(people){
    resultsList.innerHTML = "";

    for(let i = 0; i < people.length; i++){
        const personItem = document.createElement("li");
        personItem.innerText = people[i];
        resultsList.appendChild(personItem);
    }
    if(people.length == 0){
        const errorItem = document.createElement('li');
        errorItem.innerText = "No Results Found...";
        resultsList.appendChild(errorItem);
    }
};

clearButton.addEventListener("click", function(){
    resultsList.innerHTML = "";
    searchBar.value = "";
});