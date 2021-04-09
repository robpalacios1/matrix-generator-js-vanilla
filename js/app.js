const dataButton = document.querySelector('.js-data-button');
const arrayContainer = document.querySelector('.js-array-container');
let inputN = 0;
let inputM = 0;


dataButton.addEventListener('click', () => {
  inputN = Number(document.querySelector('.js-input-n-row').value);
  inputM = Number(document.querySelector('.js-input-m-col').value);
  arrayContainer.innerHTML = '';
  generateCol(inputN, inputM);

});

//***************************************

function generateCol(row, col) {

  for (let i = 0; i < row; i++) {
    
  /* <div class="array__row"> */
  const arrayRow = document.createElement("div");
  arrayRow.className = "array";

  /* Create span item */
  const span = document.createElement("span");
  span.className = "array__span";
  span.innerText = "100";

  arrayRow.appendChild(generateRow(inputM));
  arrayRow.appendChild(span);
  arrayContainer.appendChild(arrayRow);

  }


  /* <div class="array__row"> */
  const arrayRow = document.createElement("div");
  arrayRow.className = "array";


  for (let j = 0; j < col; j++) {

  /* Create span item */
  const span = document.createElement("span");
  span.className = "array__span indent";
  span.innerText = "100";

  arrayRow.appendChild(span);
  }

  arrayContainer.appendChild(arrayRow);


  





}

// **************************************

function generateRow(col) {


  /* <div class="array__row"> */
  const arrayRow = document.createElement("div");
  arrayRow.className = "array__row";

  for (let i = 0; i < col; i++) {

    /* input */
    const input = document.createElement("input");
    input.className = "array__row__col";
    input.type = "text";

    arrayRow.appendChild(input);
  }

  return arrayRow;
}
