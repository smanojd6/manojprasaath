const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const profession = document.querySelector('#profession');
const institute = document.querySelector('#institute');
const emailInput = document.querySelector('#email');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}