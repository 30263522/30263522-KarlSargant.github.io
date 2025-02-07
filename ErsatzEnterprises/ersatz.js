console.log("UwU")
//###########################
// Bankdata
//###########################
function Bank(name,description,image,cost) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.cost = cost;
}
const bank1 = new Bank("Calpone Vaults","Calpone Vaults is our oldest partner","FakeIMG.png",3500)
const bank2 = new Bank("Emerald Roof", "1%", "FakeIMG.png",6540)
const bank3 = new Bank("Lakes","1%","FakeIMG.png",5680)
const bank4 = new Bank("Fences","5%","FakeIMG.png",5490)
const bank5 = new Bank("Bric","2%","FakeIMG.png",1250)
const bank6 = new Bank("Rock","1%","FakeIMG.png",100)
const bank7 = new Bank("Oiled","4%","FakeIMG.png",1450)
const bank8 = new Bank("Bearbyte","3%","FakeIMG.png",1987)
const bank9 = new Bank("ExampleCoin","9%","FakeIMG.png",4567)

banklist=[bank1,bank2,bank3,bank4,bank5,bank6,bank7,bank8,bank9]
for (let key = 0; key < banklist.length; key++) {
  const contain = document.getElementById("bank_container");

  if (contain) {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = banklist[key].name;

      const imgCell = document.createElement('td');
      const img = document.createElement('img');
      img.src = banklist[key].image;
      img.alt = banklist[key].name;
      img.width = 200;
      imgCell.appendChild(img);

      const descCell = document.createElement('td');
      descCell.textContent = banklist[key].description;

      const costCell = document.createElement('td');
      costCell.textContent = banklist[key].cost;

      const subbutton = document.createElement('button')
      subbutton.textContent = "subscribe"

      row.appendChild(nameCell);
      row.appendChild(imgCell);
      row.appendChild(descCell);
      row.appendChild(costCell);
      row.appendChild(subbutton);

      contain.appendChild(row);
  } else {
      console.error("Container not found");
  }
}



//###########################
// File Functions
//###########################
// function download(fileName) {
//     const blob = new Blob([fileName], {type:'text/plain'});
//     const objURL = URL.createObjectURL(blob)
//     const dl = document.createElement('a')
//     dl.id = "dl"
//     dl.href = objURL
//     dl.setAttribute('download', fileName)
//     document.body.appendChild(dl)
//     dl.click()
//     document.getElementById('dl').remove()
// };
// function loadFiles(){
//     let input = document.createElement('input');
//     input.type ='file';
//     input.onchange = _ => {
//         let files = Array.from(input.files);
//         console.log(files);
//     }
            
//     input.click()
// }


//###########################
// Filter for bank status
//###########################

document.addEventListener("change", function () {
    let allItems = document.querySelectorAll("li");
    allItems.forEach((item) => {
      if (filterbank.value === "all") {
        console.log("filterAll");
        item.style.display = "block";
      } else if (filterbank.value === "done") {
        console.log("filterComplete");
        if (item.classList.contains("checked")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      } else {
        console.log("filterIncomplete");
        if (!item.classList.contains("checked")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });








