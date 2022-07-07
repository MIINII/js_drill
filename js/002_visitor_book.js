//  01.createElemnt
//  02.appendChild
//  03.insertCell / insertRow

let list = document.querySelector('#visitor_table');

let button = document.querySelector('button');
// console.log(list.innerHTML);

function inputText() {
  var writer = document.getElementById('input_writer').value;
  var contents = document.getElementById('input_contents').value;
  let number = document.getElementsByClassName('visitor_number');
  let name = document.getElementsByClassName('visitor_name');
  let content = document.getElementsByClassName('visitor_content');
  let date = document.getElementsByClassName('visitor_date');
  console.log(`${writer}, ${contents}`);

  var table = document.querySelector('#visitor_table');
  var tableValue = table.getValues(table);
  console.log(tableValue);

  // autoLoad: true,
  // allowAddNew: true,

  if (button.onclick) {
    for (let i = 0; i <= inputText.length; i++) {}
  }
}

// function inputNumber() {

//   for (let i = 0; i <= inputText.length; i++) {
//     number: push[i],
//     name: writer[i],
//     content: contents[i],
//     date: getDate(i);
//   }
// }
