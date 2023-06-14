const buildItems = document.querySelectorAll(".build");
const buildsValue = document.querySelector("#builds-value");
const stagesValue = document.querySelector("#stages-value");
const flatsValue = document.querySelector("#flats-value");
const flatsSalesValue = document.querySelector("#flats-sales-value");
const buildDescriptions = document.querySelector(
  ".building-info-box__descriptions"
);

buildItems.forEach((items) => {
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

buildLink.forEach((link) => {
  console.log(link);

  link.addEventListener("click", function (event) {
    if (link.classList.contains("sold")) {
      event.preventDefault();
      alert("Дом продано");
    } else {
      null;
    }
  });
});
