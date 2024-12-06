console.log(":3")
// name: ,age: ,Fav-colour: ,Gender:
const PersonList = [
    {name:"Karl Sargant", age:"16", Favcolour:"Green",Gender:"Prefer not to say",},
    {name:"Jonah Robson", age:"16", Favcolour:"Cyan",Gender:"Male",},
    {name:"Jessie Smith", age:"16", Favcolour:"Blue",Gender:"Female",},
    {name:"Max Turner", age:"20", Favcolour:"Red",Gender:"Non Binary",},
    {name:"David Marubbi", age:"53", Favcolour:"Green",Gender:"Male",},
    {name:"William Schmidt", age:"19", Favcolour:"Purple",Gender:"Male",}
]
 for (x=0;x<PersonList.length;x++) {
    console.log("entry detected");
    let tr = document.createElement("tr");
    tr.innerHTML = 
            `<td>${PersonList[x].name}</td>
             <td>${PersonList[x].age}</td>
             <td>${PersonList[x].Favcolour}</td>
             <td>${PersonList[x].Gender}</td>`;
    console.log(peopleTable);
    peopleTable.appendChild(tr);
}
