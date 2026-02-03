let array = [];
let nomeEl = document.getElementById("nom");
let prenomEl = document.getElementById("prenom");
let telephonEl = document.getElementById("telephon");
let EmailEl = document.getElementById("email");
let MotifEl = document.getElementById("Motif");
let dateEl = document.getElementById("date");
let tbody = document.getElementById("table");

contentDeme();
// ajouter
function ajouter() {
  let ajout = {
    nome: nomeEl.value,
    prenom: prenomEl.value,
    telephon: telephonEl.value,
    Email: EmailEl.value,
    Motif: MotifEl.value,
    date: dateEl.value,
  };
  let para = document.getElementById("messag");
  if (
    nomeEl.value == "" ||
    prenomEl.value == "" ||
    telephonEl.value == "" ||
    EmailEl.value == "" ||
    MotifEl.value == "" ||
    dateEl.value == ""
  ) {
    para.textContent = "Veuillez compléter les champs obligatoires.";
    para.className = "error";
    para.classList.add("show");
    hide();
  } else {
    array.push(ajout);

    para.textContent = "Demande ajoutée avec succès";
    para.className = "success";
    para.classList.add("show");
    hide();
    afichTable();
  }
  console.log(array);
}
afichTable();
const ajouterbtn = document.querySelector("#ajouter");
ajouterbtn.addEventListener("click", () => ajouter());
// afichTable
function afichTable(data = array) {
  tbody.innerHTML = "";

  if (!data.length) {
    tbody.innerHTML = `
    <tr>
    <td colspan="7" style="text-align:center; padding:30px;">
    Aucun résultat
        </td>
        </tr>
        `;
    return;
  }

  data.forEach((item, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.prenom}</td>
        <td>${item.telephon}</td>
        <td>${item.Email}</td>
        <td>${item.Motif}</td>
        <td>${item.date}</td>
        <td>
        <button class="supri" onclick="suprimerBut(${index})">
        supprimer
        </button>
        </td>
        `;
    tbody.appendChild(tr);
  });
  contentDeme();
}
// suprime
function suprimerBut(index) {
  array.splice(index, 1);
  afichTable();
  contentDeme();
}

function hide() {
  setTimeout(() => {
    document.getElementById("messag").classList.remove("show");
  }, 3000);
}
//  search
function searchFilter() {
  const vall = document.getElementById("search").value.toLowerCase();
  if (!vall) {
    afichTable(array);
    return;
  }
  const fil = array.filter(
    (item) =>
      item.nome.toLowerCase().includes(vall) ||
      item.prenom.toLowerCase().includes(vall) ||
      item.telephon.toString().includes(vall) ||
      item.Email.toLowerCase().includes(vall)
  );

  afichTable(fil);
}
document.getElementById("search").addEventListener("input", searchFilter);

function contentDeme() {
  const total = array.length;
  const length = document.getElementById("nomber");
  console.log(total);
  if (array.length == "") {
    length.textContent = `Aucune Demandes.`;
    return;
  }
  length.textContent = `${total} Demandes au total.`;
}
