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
    const dataFlatsDescriptions = items.getAttribute("data-flats-descriptions");

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

// room info
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

const roomFullInfo = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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

console.log(roomFullInfo);
