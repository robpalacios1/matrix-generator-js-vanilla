const dataButton = document.querySelector('.js-data-button');
const arrayContainer = document.querySelector('.js-array-container');
let myArray = {};
let inputN = 0;
let inputM = 0;


dataButton.addEventListener('click', () => {
  inputN = Number(document.querySelector('.js-input-n-row').value);
  inputM = Number(document.querySelector('.js-input-m-col').value);
  arrayContainer.innerHTML = '';

  for (let i = 0; i < inputN; i++) {
    myArray[i+1] = {};
    for (let j = 0; j < inputM; j++) {
      myArray[i+1][j+1] = 0;
    }
  }



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
  span.className = `array__span js-span-n${i+1}`;
  span.innerText = "100";

  arrayRow.appendChild(generateRow(i, inputM));
  arrayRow.appendChild(span);
  arrayContainer.appendChild(arrayRow);

  }






  
  /* <div class="array__row"> */
  const arrayRow = document.createElement("div");
  arrayRow.className = "array";


  for (let j = 0; j < col; j++) {

  /* Create span item */
  const span = document.createElement("span");
  span.className = `array__span indent js-span-m${j+1}`;
  span.innerText = "100";

  arrayRow.appendChild(span);
  }

  arrayContainer.appendChild(arrayRow);


  





}

// **************************************

function isInputNumber(evt) {
  let char = String.fromCharCode(evt.which);

  if(!(/[0-9]/.test(char))) {
    evt.preventDefault();
  }
}

// **************************************

function generateRow(row, col) {


  /* <div class="array__row"> */
  const arrayRow = document.createElement("div");
  arrayRow.className = "array__row";

  for (let i = 0; i < col; i++) {

    /* input */
    const input = document.createElement("input");
    input.className = "array__row__col";
    input.type = "text";
    input.dataset.idrow = row + 1;
    input.dataset.idcol = i + 1;

    arrayRow.appendChild(input);

    input.addEventListener('input', (e)=>{

      changeRow = Number(e.target.dataset.idrow);
      changeCol = Number(e.target.dataset.idcol);

      myArray[changeRow][changeCol] = Number(e.target.value);
      console.log(myArray);

      let sumCol = 0;
      let sumRow = 0;

      for (let i = 1; i <= inputM; i++ ) {
        sumCol += myArray[changeRow][i];
      }

      for (let j = 1; j <= inputN; j++ ) {
        sumRow += myArray[j][changeCol];
      }
      
      document.querySelector(`.js-span-n${changeRow}`).innerText = sumCol;
      document.querySelector(`.js-span-m${changeCol}`).innerText = sumRow;

    })
  }

  return arrayRow;
}


