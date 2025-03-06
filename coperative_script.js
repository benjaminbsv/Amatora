
const abanyamuryango = ["Jean Bosco", "Alice Mukamana", "Emmanuel Nshimiyimana", "Josiane Uwimana","Benjamin","Severien",
    "Justin","Alsene","Theophile"
];
function genzuraIzina() {
    let izina = document.getElementById("izina").value;
    if (abanyamuryango.includes(izina)) {
        document.getElementById("gutora").style.display = "block";
    } else {
        alert("Iryo zina ntiriri mu banyamuryango bemewe.");
    }
}

function tora() {
    let president = document.getElementById("president").value;
    let vp = document.getElementById("vp").value;
    let accountable = document.getElementById("accountable").value;
    let secretary = document.getElementById("secretary").value;
    let advisor = document.getElementById("advisor").value;
    

    let ubutumwa = `Wahisemo:
    - President: ${president}
    - Vice President: ${vp}
    - Accountable: ${accountable}
    - Secretary: ${secretary}
    - Advisor: ${advisor}`;
    
    document.getElementById("ubutumwa").innerText = ubutumwa;
    document.getElementById("ubutumwa").style.display = "block";
}
