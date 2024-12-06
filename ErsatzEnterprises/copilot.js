function Bank(name, description, image, cost) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.cost = cost;
}

const bank1 = new Bank("Calpone Vaults", "2.5%", "fakeIMG.png", 3500);
const bank2 = new Bank("Emerald Roof", "1%", "fakeIMG.png", 6540);
const bank3 = new Bank("Lakes", "1%", "fakeIMG.png", 5680);
const bank4 = new Bank("Fences", "5%", "fakeIMG.png", 5490);
const bank5 = new Bank("Bric", "2%", "fakeIMG.png", 1250);
const bank6 = new Bank("Rock", "1%", "fakeIMG.png", 100);
const bank7 = new Bank("Oiled", "4%", "fakeIMG.png", 1450);
const bank8 = new Bank("Bearbyte", "3%", "fakeIMG.png", 1987);
const bank9 = new Bank("ExampleCoin", "9%", "fakeIMG.png", 4567);

const banklist = [bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8, bank9];

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

        row.appendChild(nameCell);
        row.appendChild(imgCell);
        row.appendChild(descCell);
        row.appendChild(costCell);

        contain.appendChild(row);
    } else {
        console.error("Container not found");
    }
}
