const tabs = document.querySelector(".pricing-container");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-pane");

if (tabs !== null) {
  tabs.onclick = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  };
}

const billingSwitch = document.getElementById("billingSwitch");
const billingOnly = document.getElementById("billingOnly");
var duration = "halfYearly";

if (billingSwitch !== null) {
  billingSwitch.addEventListener("click", (e) => {
    if (duration == "halfYearly") {
      duration = "yearly";
    } else {
      duration = "halfYearly";
    }
    updatePricing();
    updateDuration();
  });
  billingOnly.addEventListener("click", (e) => {
    updatePricing();
    updateCasesIncluded();
    updateFeatureList();
  });
}

function updatePricing() {
  if (billingOnly.checked) {
    billingOnlyDuration = duration + "BillingOnly";
  } else {
    billingOnlyDuration = duration;
  }
  console.log("Duration - " + duration);
  document.querySelectorAll(".full-price").forEach((ele) => {
    console.log("Price: " + ele.dataset[billingOnlyDuration]);
    ele.textContent = ele.dataset[billingOnlyDuration];
  });
}

function updateFeatureList() {
  document.querySelectorAll(".remove-feature").forEach((ele) => {
    if (billingOnly.checked) {
      ele.classList.add("hide-feature");
    } else {
      ele.classList.remove("hide-feature");
    }
  });
}

function updateCasesIncluded() {
  document.querySelectorAll(".cases-included").forEach((ele) => {
    ele.textContent = ele.dataset[duration];
  });
}

function updateDuration() {
  document.querySelectorAll(".duration-text").forEach((ele) => {
    ele.textContent = ele.dataset[duration];
  });
}
