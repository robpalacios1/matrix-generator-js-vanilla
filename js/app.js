const dataButton = document.querySelector('.js-data-button');
const arrayContainer = document.querySelector('.js-array-container');



dataButton.addEventListener('click', () => {
  const inputN = Number(document.querySelector('.js-input-n-row').value);
  const inputM = Number(document.querySelector('.js-input-m-row').value);

  arrayContainer.innerHTML = '';
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
});

// **************************************
function generateArray() {
  return;
}


// **************************************
function generateRow(col) {

  /* <div class="array__row"> */
  const row = document.createElement("div");
  row.className = "array__row";

  for (let i = 0; i < col; i++) {

    /* input */
    const input = document.createElement("input");
    input.className = "array__row__col";
    input.type = "text";

    row.appendChild(input);
  }

  return row;

}







