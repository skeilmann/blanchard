document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(".showroom__form", {
    errorFieldCssClass: "is-invalid",
    errorFieldStyle: {
      border: "1px solid #FF5C00",
    },
    errorLabelCssClass: "is-label-invalid",
    errorLabelStyle: {
      color: "#D11616",
      position: "absolute",
      top: "-18px",
    },
    focusInvalidField: true,
    lockForm: true,
  });
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField(".showroom__input--name", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Имя должно содержать хотя бы 3 буквы",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Имя не может содержать более 30 символов",
      },
      {
        rule: "required",
        errorMessage: "Вы не ввели имя",
      },
    ])

    .addField('.showroom__input--tel', [
      {
        rule: "function",
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10
        },
        errorMessage: 'Не достаточное количество символов',
      },
      {
        rule: "required",
        errorMessage: "Вы не ввели телефон",
      },
    ]);
});
