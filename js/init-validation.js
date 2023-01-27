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
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validation
    .addField(".swowroom__input--name", [
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
    .addField(".swowroom__input--tel", [
      {
        rule: 'number',
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "required",
        errorMessage: "Вы не ввели телефон",
      },
    ]);
});
