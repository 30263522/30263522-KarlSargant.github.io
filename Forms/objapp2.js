const myReq = new XMLHttpRequest();
let global;
const rideList = []
myReq.onload = function() {
    global = JSON.parse(this.responseText);
    console.log(global);
    console.log(global.name);
    console.log(global.manufacturer);
    console.log(global.cost_in_credits);
    console.log(global.crew);
    rideList.push(global)
};

myReq.onerror = function(err) {
    console.log("Error!",err);
};

myReq.open('get','https://swapi.dev/api/starships/2/', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send();


function URLfinder(starshipID) {
    const shipFinder =`https://swapi.dev/api/${starshipID}`
    myReq.open('get',shipFinder,false)//opens shipfinder URL
    myReq.setRequestHeader('Accept', 'application/json') // header to API and JSON return
    myReq.send() //back to URL
    
    // console.log(shipFinder)
    // rideList.push(global)

}

siteForm=document.getElementById("siteForm")
function Submit() {
    // Cancel default action and then rebuild a small section of a page to use an API
    siteForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })



}
const element = document.getElementById("updtable");
element.addEventListener("click",updTable );

console.log(":3")
// name: ,age: ,Fav-colour: ,Gender:
function updTable(){
    let tr = document.createElement("tr");
    tr.innerHTML =
        `<th>Name</th>
        <th>manufacturer</th>
        <th>cost_in_credits</th>
        <th>crew</th>`;
    rideTable.innerHTML=''
 for (x=1;x<rideList.length;x++) {
    console.log("entry detected");
    
    tr.innerHTML = 
            `<td>${rideList[x].name}</td>
             <td>${rideList[x].manufacturer}</td>
             <td>${rideList[x].cost_in_credits}</td>
             <td>${rideList[x].crew}</td>`;
    rideTable.appendChild(tr);
}
}