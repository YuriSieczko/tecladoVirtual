let word = '';
const savedWords = [];

const keyboard = document.getElementById('keyboard');
const wordList = document.getElementById('wordList');

const rows = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNM'
];

// Função para adicionar uma letra ao campo de entrada
function addLetter(letter) {
  word += letter;
  document.getElementById('input').value = word;
}

// Função para remover a última letra digitada
function removeLetter() {
  word = word.slice(0, -1);
  document.getElementById('input').value = word;
}

// Função para salvar a palavra
function saveWord() {
  savedWords.push(word);
  const listItem = document.createElement('li');
  listItem.textContent = word;
  wordList.appendChild(listItem);
  word = '';
  document.getElementById('input').value = '';
}

// Cria botões para cada letra do teclado
for (let row of rows) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  for (let letter of row) {
    const button = document.createElement('div');
    button.classList.add('key');
    button.textContent = letter;
    button.onclick = function() {
      addLetter(letter);
    };
    rowDiv.appendChild(button);
  }

  keyboard.appendChild(rowDiv);
}

document.getElementById('saveBtn').addEventListener('click', function() {
  saveWord();
});

document.getElementById('backspaceBtn').addEventListener('click', function() {
  removeLetter();
});
