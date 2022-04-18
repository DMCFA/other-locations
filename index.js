//global variables
const label = document.querySelector('label');
const input = document.querySelector('.name');

//open modal
window.addEventListener('load', function () {
  const button = document.querySelectorAll('.read-more');
  button.forEach((el) => {
    el.addEventListener('click', function () {
      document.querySelector('.modal').style.visibility = 'visible';
    });
  });
});

///close modal

const closeModal = () => {
  document.querySelector('.modal').style.visibility = 'hidden';
  label.innerHTML = "Hi I'm [enter name]";
  input.value = '';
};

//update modal label text on input change

const updateLabel = (e) => {
  if (e.target.value != null) {
    label.innerText = `Hi, I'm ${e.target.value}`;
  }
};

input.addEventListener('input', updateLabel);
