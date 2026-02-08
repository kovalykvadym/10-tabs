const btnElem = document.querySelectorAll('.buttons__button');
const visibleElem = document.querySelectorAll('.contents__tab');

function changeTab(event) {
  btnElem.forEach((elem) => {
    elem.classList.remove('buttons__button--active')
    elem.disabled = false;
  })

  visibleElem.forEach((elem) => {
    elem.classList.remove('contents__tab--visible');
  });

  event.target.classList.add('buttons__button--active');
  event.target.disabled = true;

  btnElem.forEach((elem, index) => {
    if (elem === event.target) {
      visibleElem[index].classList.add('contents__tab--visible')
    }
  })
}

btnElem.forEach((button) => {
  button.addEventListener('click', changeTab)
})


/*
*
* contents__tab--visible
* buttons__button--active
* */