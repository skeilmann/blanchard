const multiDefault = () => {
  const elements = document.querySelectorAll('.select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });

  });
}
multiDefault();
