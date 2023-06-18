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
