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
    },

    {
      flatNumber: "2",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "3",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "4",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "5",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "6",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "7",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "8",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "9",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "10",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "11",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "12",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "13",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "14",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "15",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "16",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "17",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "18",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "19",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "20",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "21",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "22",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "23",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "24",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "25",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "26",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "27",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "28",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "29",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "30",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "31",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "32",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "33",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "34",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "35",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "36",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "37",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "38",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "39",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "40",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "41",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "42",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "43",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "44",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "45",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "46",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "47",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "48",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "49",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "50",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "51",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "52",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "53",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "54",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "55",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "56",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "57",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "58",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "59",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "60",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "61",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "62",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "63",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "64",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "65",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "66",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "67",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "68",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "Free",
    },

    {
      flatNumber: "69",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "70",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "71",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "72",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "73",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "74",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "75",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "76",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "77",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "78",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "79",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "80",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "81",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "82",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "83",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "84",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "85",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "86",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "87",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "88",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "89",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "90",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "91",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "92",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "93",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "94",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "95",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "96",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "97",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "98",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "99",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "100",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "101",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "102",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "103",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "104",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "105",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "106",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "107",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "108",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "109",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "110",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "111",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "112",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "113",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "114",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "115",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "116",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "117",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "118",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "119",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "120",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "121",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "122",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "123",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "124",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "125",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "126",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "127",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "128",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "129",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "130",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "131",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "132",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "133",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "134",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "135",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "136",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "137",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "138",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "139",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "140",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "141",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "142",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "143",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "144",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "145",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "146",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "147",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "148",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "149",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "150",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "151",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "152",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "153",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "154",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "155",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "156",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "157",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "158",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "159",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "160",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "161",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "162",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "163",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "164",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "165",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "166",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "167",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "168",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "169",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "170",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "171",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "172",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "173",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "174",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "175",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "176",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "177",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "178",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "179",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "180",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "181",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "182",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "183",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "184",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "185",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "186",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "187",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "188",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "189",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "190",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "191",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "192",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "193",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "194",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "195",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "196",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "197",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "198",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "199",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "200",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "201",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "202",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "203",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "204",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "205",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "206",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "207",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "208",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "209",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "210",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "211",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "212",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "213",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "214",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "215",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "216",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "217",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "218",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "219",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "220",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "221",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "222",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "223",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "224",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "225",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "226",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "227",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "228",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "229",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "230",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "231",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "232",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "233",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "234",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "235",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "236",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "237",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "238",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "239",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "240",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "241",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "242",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "243",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "244",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "245",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "246",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "247",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "248",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "249",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "250",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "251",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "252",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "253",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "254",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "255",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "256",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "257",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "258",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "259",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "260",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "261",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "262",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "263",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "264",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "265",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "266",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "267",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "268",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "269",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "270",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "271",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "272",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "273",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "274",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "275",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "276",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "277",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "278",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "279",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "280",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "281",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "282",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "283",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "284",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "285",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "286",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "287",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "288",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "289",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "290",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "291",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "292",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "293",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "294",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "295",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "296",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "297",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "298",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "299",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "300",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "301",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "302",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "303",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "304",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "305",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "306",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "307",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "308",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "309",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "310",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "311",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "312",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "313",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "314",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "315",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "316",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "317",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "318",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "319",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "320",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "321",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "322",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "323",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "324",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "325",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "326",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "327",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "328",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "329",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "330",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "331",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "332",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "333",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "334",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "335",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "336",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "337",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "338",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "339",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "340",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "341",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "342",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "343",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "344",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "345",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "346",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "347",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "348",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "349",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "350",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "351",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "352",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "353",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "354",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "355",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "356",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "357",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "358",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "359",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "360",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "361",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "362",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "363",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "364",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "365",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "366",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "367",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "368",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "369",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "370",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "371",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "372",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "373",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "374",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "375",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "376",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "377",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "378",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "379",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "380",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "381",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "382",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "383",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "384",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "385",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "386",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "387",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "388",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "389",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "390",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "391",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "392",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "393",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "394",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "395",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "396",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "397",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "398",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "399",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "400",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "401",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "402",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "403",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "404",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "405",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "406",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "407",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "408",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "409",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "410",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "411",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "412",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "413",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "414",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "415",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "416",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "417",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "418",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "419",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "420",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "421",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "422",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "423",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "424",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "425",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "426",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "427",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "428",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "429",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "430",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "431",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "432",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "433",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "434",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "435",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "436",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "437",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "438",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "439",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "440",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "441",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "442",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "443",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "82,3 м.кв.",
      price: "1000$",
      priceTotal: "82300$",
      status: "_",
    },

    {
      flatNumber: "444",
      rooms: "2",
      square: "35,6 м.кв.",
      squareFull: "60,7 м.кв.",
      price: "1000$",
      priceTotal: "60700$",
      status: "_",
    },

    {
      flatNumber: "445",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "82,0 м.кв.",
      price: "1000$",
      priceTotal: "82000$",
      status: "_",
    },

    {
      flatNumber: "446",
      rooms: "3",
      square: "48,1 м.кв.",
      squareFull: "79,7 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },

    {
      flatNumber: "447",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "448",
      rooms: "1",
      square: "21,9 м.кв.",
      squareFull: "42,0 м.кв.",
      price: "1000$",
      priceTotal: "42000$",
      status: "_",
    },

    {
      flatNumber: "449",
      rooms: "1",
      square: "19,0 м.кв.",
      squareFull: "39,2 м.кв.",
      price: "1000$",
      priceTotal: "39200$",
      status: "_",
    },

    {
      flatNumber: "450",
      rooms: "3",
      square: "47,9 м.кв.",
      squareFull: "79,3 м.кв.",
      price: "1000$",
      priceTotal: "79700$",
      status: "_",
    },
  ];

  //  попробовать интегрировать в цикл на 122 строке
  flats.forEach((el) => {
    const roomNumber = el.dataset.roomsNumber;
    const roomStatus =
      el.classList[1] === undefined ? "У продажу" : el.classList[1];
    //это эквивалентно этому:
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
