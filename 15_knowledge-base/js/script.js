document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")  
  
    const choices = new Choices(selector, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices header_choices',
       },
    });    
  });

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.js-form', {
    colorWrong: '#FF5C00',
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         email: {
           required: "Вы не ввели e-mail"
         },
         name: "Вы не ввели имя",
         phone: {
           required: "Вы не ввели телефон",
           function: "Не достаточно количество символов"
         }
       }
    });