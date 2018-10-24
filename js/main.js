let nomes = [];
let emails = [];
let nasc = [];
let cursos = [];


function formatDate(data, formato) {
  if (formato == 'pt-br') {
    return (data.substr(0, 10).split('-').reverse().join('/'));
  } else {
    return (data.substr(0, 10).split('/').reverse().join('-'));
  }
}

function novaLinha() {
    const table = document.getElementById('alunos');
    let row = table.insertRow(nomes.length - 1);
    let cNome = row.insertCell(0);
    let cEmail = row.insertCell(1);
    let cData = row.insertCell(2);
    let cCurso = row.insertCell(3);

    if (nomes[nomes.length - 1]) {
        cNome.innerHTML = nomes[nomes.length - 1];
        cEmail.innerHTML = emails[emails.length - 1];
        cData.innerHTML = formatDate(nasc[nasc.length - 1], 'pt-br');
        cCurso.innerHTML = cursos[nasc.length - 1];
    }
    table.appendChild(row);
}
function salvar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data_nasc = document.getElementById('data_nascimento').value;
    const curso = document.getElementById('curso').value;

    nomes.push(nome);
    emails.push(email);
    nasc.push(data_nasc);
    cursos.push(curso);
    novaLinha();
}

