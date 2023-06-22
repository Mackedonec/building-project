window.addEventListener("load", function name(params) {
  document.querySelector(".build") ? installBuild() : null;
});
function installBuild() {
  // builds info
  const buildItems = document.querySelectorAll(".build");
  const buildsValue = document.querySelector("#builds-value");
  const stagesValue = document.querySelector("#stages-value");
  const flatsValue = document.querySelector("#flats-value");
  const flatsSalesValue = document.querySelector("#flats-sales-value");
  const buildDescriptions = document.querySelector(
    ".building-info-box__descriptions"
  );

  buildItems.forEach(function (items) {
    items.addEventListener("mouseover", function () {
      const dataBuildNumber = items.getAttribute("data-build-number");
      const dataStagesNumber = items.getAttribute("data-stages-number");
      const dataFlatsValue = items.getAttribute("data-flats-number");
      const dataFlatsSalesValue = items.getAttribute("data-flats-sales-number");
      const dataBuildDescriptions = items.getAttribute("data-descriptions");

      setTimeout(function () {
        buildsValue.innerHTML = dataBuildNumber;
        stagesValue.innerHTML = dataStagesNumber;
        flatsValue.innerHTML = dataFlatsValue;
        flatsSalesValue.innerHTML = dataFlatsSalesValue;
        buildDescriptions.innerHTML = dataBuildDescriptions;
      }, 300);
    });

    items.addEventListener("mouseout", function () {
      setTimeout(function () {
        buildsValue.innerHTML = "_";
        stagesValue.innerHTML = "_";
        flatsValue.innerHTML = "_";
        flatsSalesValue.innerHTML = "_";
        buildDescriptions.innerHTML = "Random text";
      }, 300);
    });
  });

  const buildLink = document.querySelectorAll(".building-link");

  buildLink.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.classList.contains("sold")) {
        event.preventDefault();
        alert("Будинок продано");
      } else {
        null;
      }
    });
  });

  // floor info
  const floorItems = document.querySelectorAll(".floor");
  const floorValue = document.querySelector("#floor-value");
  const flatsAllValue = document.querySelector("#all-value");
  const flatsFreeValue = document.querySelector("#free-value");
  const flatsBookingValue = document.querySelector("#booking-value");
  const flatsActionValue = document.querySelector("#action-value");
  const flatsSoldValue = document.querySelector("#sold-value");
  const redBuildDescriptions = document.querySelector(
    ".one-building-info-box__descriptions"
  );

  floorItems.forEach(function (items) {
    items.addEventListener("mouseover", function () {
      const dataFloarNumber = items.getAttribute("data-floor-number");
      const dataFlatsAllNumber = items.getAttribute("data-flats-all-number");
      const dataFlatsFreeValue = items.getAttribute("data-flats-free-number");
      const dataFlatsBookingValue = items.getAttribute(
        "data-flats-booking-number"
      );
      const dataFlatsActioningValue = items.getAttribute(
        "data-flats-action-number"
      );
      const dataFlatsSoldValue = items.getAttribute("data-flats-sold-number");
      const dataFlatsDescriptions = items.getAttribute(
        "data-flats-descriptions"
      );

      setTimeout(function () {
        floorValue.innerHTML = dataFloarNumber;
        flatsAllValue.innerHTML = dataFlatsAllNumber;
        flatsFreeValue.innerHTML = dataFlatsFreeValue;
        flatsBookingValue.innerHTML = dataFlatsBookingValue;
        flatsActionValue.innerHTML = dataFlatsActioningValue;
        flatsSoldValue.innerHTML = dataFlatsSoldValue;
        redBuildDescriptions.innerHTML = dataFlatsDescriptions;
      }, 100);
    });

    items.addEventListener("mouseout", function () {
      setTimeout(function () {
        floorValue.innerHTML = "_";
        flatsAllValue.innerHTML = "_";
        flatsFreeValue.innerHTML = "_";
        flatsBookingValue.innerHTML = "_";
        flatsActionValue.innerHTML = "_";
        flatsSoldValue.innerHTML = "_";
        redBuildDescriptions.innerHTML = "Random text";
      }, 100);
    });
  });
}
const roomFullInfo = [
  {
    flatNumber: "1",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "2",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "3",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "4",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "5",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "6",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "7",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "8",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "9",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "10",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "11",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "12",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "13",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "14",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "15",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "16",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "17",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "18",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "19",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "20",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "21",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "22",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "23",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "24",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "25",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "26",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "27",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "28",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "29",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "30",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "31",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "32",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "33",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "34",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "35",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "36",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "37",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "38",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "39",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "40",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "41",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "42",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "43",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "44",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "45",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "46",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "47",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "48",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "49",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "50",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "51",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "52",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "53",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "54",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "55",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "56",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "82,3 м.кв.",
    price: "1000$",
    priceTotal: "82300$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "57",
    rooms: "2",
    square: "35,6 м.кв.",
    squareFull: "60,7 м.кв.",
    price: "1000$",
    priceTotal: "60700$",

    description: [
      {
        text: "Двокімнатна квартира",
      },
      {
        text: "Загальна площа - 60,7 м.кв.",
      },
      {
        text: "Жила площа - 35,6 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "58",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "82,0 м.кв.",
    price: "1000$",
    priceTotal: "82000$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 82,0 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "59",
    rooms: "3",
    square: "48,1 м.кв.",
    squareFull: "79,7 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,7 м.кв.",
      },
      {
        text: "Жила площа - 48,1 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "60",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "61",
    rooms: "1",
    square: "21,9 м.кв.",
    squareFull: "42,0 м.кв.",
    price: "1000$",
    priceTotal: "42000$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 42,0 м.кв.",
      },
      {
        text: "Жила площа - 21,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "62",
    rooms: "1",
    square: "19,0 м.кв.",
    squareFull: "39,2 м.кв.",
    price: "1000$",
    priceTotal: "39200$",

    description: [
      {
        text: "Однокімнатна квартира",
      },
      {
        text: "Загальна площа - 39,2 м.кв.",
      },
      {
        text: "Жила площа - 19,0 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },

  {
    flatNumber: "63",
    rooms: "3",
    square: "47,9 м.кв.",
    squareFull: "79,3 м.кв.",
    price: "1000$",
    priceTotal: "79700$",

    description: [
      {
        text: "Трикімнатна квартира",
      },
      {
        text: "Загальна площа - 79,3 м.кв.",
      },
      {
        text: "Жила площа - 47,9 м.кв.",
      },
      {
        text: "Ціна за 1 м.кв. - 1000$",
      },
    ],
  },
];

window.addEventListener("load", function name(params) {
  document.querySelector(".rooms-info") ? installInfo() : null;
});
function installInfo() {
  // room info
  const flatInfo = document.querySelector("#flat-info");
  const flats = document.querySelectorAll(".flat");

  flats.forEach((item) => {
    if (item.classList.contains("booking")) {
      item.querySelector(".status-text").innerHTML = "Бронь";
    } else if (item.classList.contains("sold")) {
      item.querySelector(".status-text").innerHTML = "Продано";
    } else if (item.classList.contains("action")) {
      item.querySelector(".status-text").innerHTML = "Акція";
    } else {
      item.querySelector(".status-text").innerHTML = "У продажу";
    }
  });

  const flatGroup = document.querySelectorAll(".flat");

  function deleteClassActiv() {
    flatGroup.forEach((activ) => {
      activ.classList.remove("activ");
    });
  }

  const roomObject = [
    {
      flatNumber: "3",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",

      description: [
        {
          text: "Трикімнатна квартира",
        },
        {
          text: "Загальна площа - 79,3 м.кв.",
        },
        {
          text: "Жила площа - 47,9 м.кв.",
        },
        {
          text: "Ціна за 1 м.кв. - 1000$",
        },
      ],
    },
  ];

  const renderInfo = (flatInfoTemplate) => {
    const flatInformation = flatInfoTemplate
      .map((item) => {
        return `
          <div class="flat-info flat-info-box__flat-number">Номер кваритри <span id="room-number">${item.flatNumber}</span></div>
          <div class="flat-info flat-info-box__rooms">Кількіскь кімнат <span id="rooms">${item.rooms}</span></div>
          <div class="flat-info flat-info-box__square">Жила площа <span id="square">${item.square}</span></div>
          <div class="flat-info flat-info-box__square-full">Загальна площа <span id="square-full">${item.squareFull}</span></div>
          <div class="flat-info flat-info-box__price">Ціна за 1 м.кв. <span id="price">${item.price}</span></div>
          <div class="flat-info flat-info-box__price-total">Загальні ціна <span id="price-total">${item.priceTotal}</span></div>
                `;
      })
      .join("");

    flatInfo.innerHTML = flatInformation;
  };
  renderInfo(roomObject);

  flatGroup.forEach((flat) => {
    flat.addEventListener("click", function () {
      deleteClassActiv();
      flat.classList.add("activ");

      let thisFlat = flat.getAttribute("data-rooms-number");

      let flatNumber = roomFullInfo.filter(
        (obj) => obj.flatNumber === thisFlat
      );
      renderInfo(flatNumber);
    });
  });
}
// Получаем текущий параметр "tab" из URL
const urlParams = new URLSearchParams(window.location.search);
const currentTab = urlParams.get("tab");

// Если текущий параметр "tab" определен, присваиваем класс "current" соответствующей вкладке
if (currentTab) {
  const tabs = document
    .getElementsByClassName("tab-list")[0]
    .getElementsByTagName("a");
  for (let i = 0; i < tabs.length; i++) {
    const tabNumber = i + 1;
    if (currentTab === tabNumber.toString()) {
      tabs[i].classList.add("current");
    }
  }
}
