window.addEventListener("load", function name(params) {
  document.querySelector(".building") ? installBuild() : null;
});
function installBuild() {
  // floor info
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
}
window.addEventListener("load", function name(params) {
  document.querySelector(".build") ? installFloor() : null;
});
function installFloor() {
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
      flatNumber: "_",
      rooms: "_",
      square: "_",
      squareFull: "_",
      price: "_",
      priceTotal: "_",
      status: "_",

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
          <div class="flat-info flat-info-box__status">Статус квартири<span id="status">${item.status}</span></div>
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

  const roomFullInfo = [
    {
      flatNumber: "1",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: flats,

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      status: "_",

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
      flatNumber: "64",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "65",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "66",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "67",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "68",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "Free",

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
      flatNumber: "69",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "70",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "71",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "72",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "73",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "74",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "75",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "76",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "77",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "78",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "79",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "80",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "81",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "82",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "83",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "84",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "85",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "86",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "87",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "88",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "89",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "90",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "91",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "92",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "93",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "94",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "95",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "96",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "97",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "98",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "99",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "100",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "101",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "102",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "103",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "104",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "105",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "106",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "107",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "108",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "109",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "110",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "111",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "112",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "113",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "114",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "115",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "116",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "117",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "118",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "119",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "120",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "121",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "122",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "123",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "124",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "125",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "126",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "127",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "128",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "129",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "130",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "131",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "132",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "133",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "134",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "135",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "136",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "137",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "138",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "139",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "140",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "141",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "142",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "143",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "144",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "145",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "146",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "147",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "148",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "149",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "150",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "151",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "152",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "153",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "154",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "155",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "156",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "157",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "158",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "159",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "160",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "161",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "162",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "163",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "164",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "165",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "166",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "167",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "168",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "169",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "170",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "171",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "172",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "173",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "174",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "175",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "176",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "177",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "178",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "179",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "180",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "181",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "182",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "183",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "184",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "185",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "186",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "187",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "188",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "189",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "190",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "191",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "192",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "193",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "194",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "195",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "196",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "197",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "198",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "199",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "200",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "201",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "202",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "203",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "204",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "205",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "206",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "207",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "208",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "209",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "210",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "211",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "212",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "213",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "214",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "215",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "216",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "217",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "218",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "219",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "220",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "221",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "222",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "223",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "224",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "225",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "226",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "227",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "228",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "229",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "230",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "231",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "232",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "233",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "234",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "235",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "236",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "237",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "238",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "239",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "240",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "241",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "242",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "243",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "244",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "245",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "246",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "247",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "248",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "249",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "250",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "251",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "252",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "253",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "254",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "255",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "256",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "257",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "258",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "259",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "260",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "261",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "262",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "263",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "264",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "265",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "266",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "267",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "268",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "269",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "270",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "271",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "272",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "273",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "274",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "275",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "276",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "277",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "278",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "279",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "280",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "281",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "282",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "283",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "284",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "285",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "286",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "287",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "288",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "289",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "290",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "291",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "292",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "293",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "294",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "295",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "296",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "297",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "298",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "299",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "300",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "301",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "302",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "303",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "304",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "305",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "306",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "307",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "308",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "309",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "310",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "311",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "312",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "313",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "314",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "315",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "316",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "317",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "318",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "319",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "320",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "321",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "322",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "323",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "324",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "325",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "326",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "327",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "328",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "329",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "330",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "331",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "332",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "333",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "334",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "335",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "336",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "337",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "338",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "339",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "340",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "341",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "342",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "343",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "344",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "345",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "346",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "347",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "348",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "349",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "350",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "351",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "352",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "353",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "354",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "355",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "356",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "357",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "358",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "359",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "360",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "361",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "362",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "363",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "364",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "365",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "366",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "367",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "368",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "369",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "370",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "371",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "372",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "373",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "374",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "375",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "376",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "377",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "378",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "379",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "380",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "381",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "382",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "383",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "384",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "385",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "386",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "387",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "388",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "389",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "390",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "391",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "392",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "393",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "394",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "395",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "396",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "397",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "398",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "399",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "400",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "401",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "402",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "403",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "404",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "405",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "406",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "407",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "408",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "409",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "410",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "411",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "412",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "413",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "414",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "415",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "416",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "417",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "418",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "419",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "420",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "421",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "422",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "423",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "424",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "425",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "426",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "427",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "428",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "429",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "430",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "431",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "432",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "433",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "434",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "435",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "436",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "437",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "438",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "439",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "440",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "441",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "442",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "443",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",

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
      flatNumber: "444",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",

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
      flatNumber: "445",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",

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
      flatNumber: "446",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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
      flatNumber: "447",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "448",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",

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
      flatNumber: "449",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",

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
      flatNumber: "450",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",

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

  //  попробовать интегрировать в цикл на 122 строке
  flats.forEach((el) => {
    const roomNumber = el.dataset.roomsNumber;
    const roomStatus =
      el.classList[1] === undefined ? "У продажу" : el.classList[1]; //это эквивалентно этому:
    // let roomStatus = el.classList[1];
    // if (roomStatus == 'undefined') roomStatus = 'У продажу';

    let statusText;
    switch (roomStatus) {
      case "sold":
        statusText = "Продано";
        break;
      case "booking":
        statusText = "Бронь";
        break;
      case "action":
        statusText = "Акція";
        break;
      default:
        statusText = roomStatus;
    }

    const roomIndex = roomFullInfo.findIndex(
      (room) => room.flatNumber == roomNumber
    );

    roomFullInfo[roomIndex].status = statusText;
  });

  const bigIndex = document.querySelector(".big");
  const buttonIndex = document.querySelector(".button-index");

  buttonIndex.addEventListener("click", function () {
    bigIndex.classList.toggle("zindex");
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
