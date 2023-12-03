// Owl Carousel 2
$(document).ready(function () {
   // abonements
   const abonementCarousel = $("#abonements");
   abonementCarousel.owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         900: {
            items: 3,
         },
         1160: {
            items: 4,
         },
      },
   });

   const btnPrev = $(".nav-btn-left");
   const btnNext = $(".nav-btn-right");

   btnPrev.click(function () {
      abonementCarousel.trigger("prev.owl.carousel");
   });
   btnNext.click(function () {
      abonementCarousel.trigger("next.owl.carousel");
   });

   // reviews
   const reviewsCarousel = $("#reviews");
   reviewsCarousel.owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: false,
   });
   const revbtnPrev = $(".reviews-btn-left");
   const revbtnNext = $(".reviews-btn-right");

   revbtnPrev.click(function () {
      reviewsCarousel.trigger("prev.owl.carousel");
   });
   revbtnNext.click(function () {
      reviewsCarousel.trigger("next.owl.carousel");
   });

   // Abonemenet form popup

   const abonementBtn = document.querySelectorAll(".abonements__card-btn");
   const abonementForm = document.querySelector(".abonements-popup");
   const abonementClose = document.querySelector(".abonements-form__img");
   const abonementFormContent = document.querySelector(".abonements-form");
   // const abonFormBtn = document.querySelector(".abonements-popup .form__btn");

   abonementBtn.forEach(function (item) {
      item.addEventListener("click", function () {
         abonementForm.classList.toggle("active");
         document.body.classList.toggle("scroll-menu");

         abonementFormContent.addEventListener("click", function (e) {
            e.stopPropagation();
         });
      });
   });

   abonementClose.addEventListener("click", function () {
      abonementForm.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   abonementForm.addEventListener("click", function () {
      this.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   // abonFormBtn.addEventListener("click", function () {
   //    abonementForm.classList.toggle("active");
   // });

   // Qusetion - accordeon
   const questionAccordeon = document.querySelectorAll(
      '[data-name="accordeon-title"]'
   );

   questionAccordeon.forEach(function (item) {
      item.addEventListener("click", function () {
         item.classList.toggle("active");
      });
   });

   // nav menu
   const burger = document.querySelector("#burger");
   const menu = document.querySelector("#menu");
   const navLinks = document.querySelectorAll(".nav-menu__item");
   const overlay = document.querySelector(".overlay");

   burger.addEventListener("click", function () {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      document.body.classList.toggle("scroll-menu");
      overlay.classList.toggle("active");
   });

   navLinks.forEach(function (item) {
      item.addEventListener("click", function () {
         burger.classList.remove("active");
         menu.classList.remove("active");
         document.body.classList.remove("scroll-menu");
         overlay.classList.remove("active");
      });
   });

   overlay.addEventListener("click", function () {
      burger.classList.remove("active");
      menu.classList.remove("active");
      document.body.classList.remove("scroll-menu");
      this.classList.remove("active");
   });

   // POPUP WHAT-W
   const btnKnow = document.querySelectorAll(".btn-know");
   const closePopup = document.querySelectorAll(".close-popup");
   const fadeModal = document.querySelectorAll(".card__popup");

   btnKnow.forEach(function (item) {
      item.addEventListener("click", function () {
         const knowPopup = item.nextElementSibling;
         knowPopup.classList.toggle("active");
         document.body.classList.toggle("scroll-menu");

         knowPopup
            .querySelector(".card__popup-content")
            .addEventListener("click", function (e) {
               e.stopPropagation();
            });
      });
   });

   closePopup.forEach(function (item) {
      item.addEventListener("click", function () {
         const cardPopup = item.closest(".card__popup");
         cardPopup.classList.remove("active");
         document.body.classList.remove("scroll-menu");
      });
   });

   fadeModal.forEach(function (item) {
      item.addEventListener("click", function () {
         item.classList.remove("active");
         document.body.classList.remove("scroll-menu");
      });
   });

   // POPUP PROPS
   const btnProps = document.querySelector(".btn-props");
   const btnClose = document.querySelector(".props__close");
   const props = document.querySelector(".props");
   const propsContent = props.querySelector(".props__content");

   btnProps.addEventListener("click", function () {
      const modalProp = btnProps.nextElementSibling;
      modalProp.classList.toggle("active");
      document.body.classList.toggle("scroll-menu");

      propsContent.addEventListener("click", function (e) {
         e.stopPropagation();
      });
   });

   btnClose.addEventListener("click", function () {
      props.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   props.addEventListener("click", function () {
      this.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   // POPUP Questions
   const btnQuestion = document.querySelectorAll(".question__item-btn");
   const qusetionPopup = document.querySelector(".question-popup");
   const PopupContent = document.querySelector(".question-popup__content");
   const questionClose = document.querySelector(".question-popup__close");

   // btnQuestion.addEventListener("click", function () {
   //    qusetionPopup.classList.toggle("active");
   //    document.body.classList.toggle("scroll-menu");

   //    PopupContent.addEventListener("click", function (e) {
   //       e.stopPropagation();
   //    });
   // });

   btnQuestion.forEach(function (item) {
      item.addEventListener("click", function () {
         qusetionPopup.classList.toggle("active");
         document.body.classList.toggle("scroll-menu");

         PopupContent.addEventListener("click", function (e) {
            e.stopPropagation();
         });
      });
   });

   questionClose.addEventListener("click", function () {
      qusetionPopup.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   qusetionPopup.addEventListener("click", function () {
      this.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   // POPUP Example

   const btnExample = document.querySelector(".example__btn");
   const examplePopup = document.querySelector(".example-popup");
   const exampleContent = document.querySelector(".example-popup__content");
   const exampleClose = document.querySelector(".example-popup__close");

   btnExample.addEventListener("click", function () {
      examplePopup.classList.toggle("active");
      document.body.classList.toggle("scroll-menu");
      exampleContent.addEventListener("click", function (e) {
         e.stopPropagation();
      });
   });

   exampleClose.addEventListener("click", function () {
      examplePopup.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   examplePopup.addEventListener("click", function () {
      this.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   // POPUP Rools

   const roolBtn = document.querySelector(".btn-rools");
   const roolPopup = document.querySelector(".rools-popup");
   const roolClose = document.querySelector(".rools-popup__close");
   const roolPopupContent = document.querySelector(".rool-popup__content");

   roolBtn.addEventListener("click", function () {
      roolPopup.classList.toggle("active");
      document.body.classList.toggle("scroll-menu");

      roolPopupContent.addEventListener("click", function (e) {
         e.stopPropagation();
      });
   });

   roolClose.addEventListener("click", function () {
      roolPopup.classList.remove("active");
      document.body.classList.remove("scroll-menu");
   });

   roolPopup.addEventListener("click", function () {
      this.classList.toggle("active");
      document.body.classList.remove("scroll-menu");
   });

   //FORM VALIDATE ABonement
   $(".abonements-form").validate({
      rules: {
         name: {
            required: true,
         },
         tel: {
            required: true,
         },
      },
      messages: {
         name: {
            required: "Введите Имя",
         },
         tel: {
            required: "Введите телефон",
         },
      },
      submitHandler: function (form) {
         ajaxFormSubmitTwo();
      },
   });

   // Функция AJAX запрса на сервер фищтуьуте
   function ajaxFormSubmitTwo() {
      let string = $(".abonements-form").serialize(); // Соханяем данные введенные в форму в строку.

      //Формируем ajax запрос
      $.ajax({
         type: "POST", // Тип запроса - POST
         url: "php/mail.php", // Куда отправляем запрос
         data: string, // Какие даные отправляем, в данном случае отправляем переменную string

         // Функция если все прошло успешно
         success: function (html) {
            $(".abonements-form").slideUp(800);
            $("#answer").html(html);
         },
      });
      // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
      return false;
   }

   //FORM VALIDATE
   $(".form").validate({
      rules: {
         name: {
            required: true,
         },
         tel: {
            required: true,
         },
         email: {
            required: true,
            email: true,
         },

         message: {
            required: true,
         },
      },
      messages: {
         name: {
            required: "Введите Имя",
         },
         tel: {
            required: "Введите телефон",
         },
         email: {
            required: "Введите E-mail",
            email: "",
         },
         message: {
            required: "Введите Сообщение",
         },
      },
      submitHandler: function (form) {
         ajaxFormSubmit();
      },
   });

   // Функция AJAX запрса на сервер

   function ajaxFormSubmit() {
      let string = $(".form").serialize(); // Соханяем данные введенные в форму в строку.

      //Формируем ajax запрос
      $.ajax({
         type: "POST", // Тип запроса - POST
         url: "php/mail.php", // Куда отправляем запрос
         data: string, // Какие даные отправляем, в данном случае отправляем переменную string

         // Функция если все прошло успешно
         success: function (html) {
            $(".form").slideUp(800);
            $("#answer-form").html(html);
         },
      });
      // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
      return false;
   }
});
