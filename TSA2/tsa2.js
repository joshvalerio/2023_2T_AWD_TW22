const buttons = document.querySelectorAll('.day');
const box = document.querySelector('.box');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    box.classList.add('active');

    setTimeout(() => {
      box.style.backgroundColor = getBoxColor(button.dataset.day);
    }, 500); 
  });
});

function getBoxColor(day) {
  switch (day) {
    case 'Monday':
      return 'purple';
    case 'Tuesday':
      return 'pink';
    case 'Wednesday':
      return 'blue';
    case 'Thursday':
      return 'green';
    case 'Friday':
      return 'yellow';
    case 'Saturday':
      return 'orange';
    case 'Sunday':
      return 'red';
    default:
      return 'white';
  }
}
