// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map(
    "myMap1",
    {
      center: [55.758468, 37.601088],
      zoom: 16,
      controls: [] /* Убираем элементы управления*/,
      controls: ['geolocationControl'],
    },
    {
      suppressMapOpenBlock: true /* Убираем элементы управления*/,
    }
  );

  myMap.behaviors.disable("scrollZoom");

  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/1920/location-sign.svg",
      iconImageSize: [25, 25],
      iconImageOffset: [-3, -42],
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

  // Создадим элемент управления масштабом маленького размера и добавим его на карту.
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small"
    }
  });
  myMap.controls.add(zoomControl);
}
