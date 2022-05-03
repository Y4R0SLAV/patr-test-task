'use strict'

const media768Query = window.matchMedia('(max-width: 768px)')
const media540Query = window.matchMedia('(max-width: 540px)')
if (media540Query.matches) {
  $(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
      items: 1,
      loop: true,
    })
  })

  $(document).ready(function () {
    $(".owl-carousel2").owlCarousel({
      items: 1,
      loop: true
    })
  })
} else if (media768Query.matches) {
  $(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
      items: 1,
      loop: true,
    })
  })

  $(document).ready(function () {
    $(".owl-carousel2").owlCarousel({
      items: 2,
      loop: true,
      margin: 20
    })
  })
} else {
  // > 768 px
  $(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
      items: 1,
      nav: true,
      navText: ["<img class='nav-btn prev-slide' src='/assets/img/prevButton.jpg'>", "<img class='nav-btn next-slide' src='/assets/img/nextButton.jpg'>"],
      loop: true,
      dots: false,
    })
  })

  $(document).ready(function () {
    $(".owl-carousel2").owlCarousel({
      items: 4,
      nav: true,
      navText: ["<img class='nav-btn prev-slide' src='/assets/img/prevButton.jpg'>", "<img class='nav-btn next-slide' src='/assets/img/nextButton.jpg'>"],
      loop: true,
      dots: false,
      margin: 18
    })
  })

}



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form')
  form.addEventListener('submit', formSend)

  async function formSend(e) {
    e.preventDefault()

    let error = formValidate(form)
    let formData = new FormData(form)

    if (error === 0) {
      form.classList.add('_sending')
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        let result = await response.json()
        alert(result.message)
        form.reset()
        form.classList.remove('_sending')
      } else {
        alert('Ошибка')
        form.classList.remove('_sending')
      }

    } else {
      alert('Заполните обязательные поля')
    }
  }

  function formValidate(form) {
    let error = 0
    let formReq = document.querySelectorAll('._req')

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i]
      formRemoveError(input)

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input)
          error++
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input)
        error++
      } else {
        if (input.value === "") {
          formAddError(input)
          error++
        }
      }
    }

    return error
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
  }
})


var topMenu = $('.top-menu').html(); //.top-menu - это класс меню которое отдаёт нам сервер на живом сайте, то что видно на desktop-варианте сайта
topMenu = topMenu.replace(/class="[^"]*"/gi, "").replace(/style="[^"]*"/gi, "").replace(/id="[^"]*"/gi, ""); //Зачищаем всякую хрень	
$('nav#menu').html('<ul>' + topMenu + '</ul>');

//Запускаем mmenu
$('nav#menu').mmenu({
  navbars: [{
    height: 3,
    content: ['']
  }, true],
  counters: true,
  dividers: {
    fixed: true
  },
});


const menuButton = document.getElementById('menuButton')
menuButton.addEventListener('click', () => { alert(123) })
