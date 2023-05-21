const inputName = document.getElementById("Name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputSubmit = document.getElementById("inputSubmit");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const contact1 = document.querySelector(".contact1");
const contact2 = document.querySelector(".contact2");
const contact3 = document.querySelector(".contact3");
const contact4 = document.querySelector(".contact4");
const contact5 = document.querySelector(".contact5");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");
const stepNo1 = document.querySelector(".stepNo1");
const stepNo2 = document.querySelector(".stepNo2");
const stepNo3 = document.querySelector(".stepNo3");
const stepNo4 = document.querySelector(".stepNo4");
const submitBtn2 = document.getElementById("submitBtn2");
const submitBtn3 = document.getElementById("submitBtn3");
const submitBtn4 = document.getElementById("submitBtn4");
const swicherMonthly = document.querySelector(".swicherMonthly");
const planMonthly = document.querySelector(".planMonthly");
const planYearly = document.querySelector(".planYearly");
const planMonthly1 = document.querySelector(".planMonthly1");
const planYearly1 = document.querySelector(".planYearly1");
const SwitcherText1 = document.querySelector(".SwitcherText1");
const SwitcherText2 = document.querySelector(".SwitcherText2");

//Contact 1 plan

inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!inputName.value) {
    inputName.classList.add("inputError");
  } else {
    inputName.classList.remove("inputError");
  }

  if (!inputEmail.value) {
    inputEmail.classList.add("inputError");
  } else {
    inputEmail.classList.remove("inputError");
  }

  if (!inputPhone.value) {
    inputPhone.classList.add("inputError");
  } else {
    inputPhone.classList.remove("inputError");
  }

  if (inputName.value && inputEmail.value && inputPhone.value) {
    contact1.classList.add("hide");
    stepNo1.classList.remove("stepNoBgChanger");
    stepNo2.classList.add("stepNoBgChanger");
  }
});

//-------------------Contact 2 plan--------------------

//Go back button Event

back1.addEventListener("click", () => {
  contact1.classList.remove("hide");
  stepNo1.classList.add("stepNoBgChanger");
  stepNo2.classList.remove("stepNoBgChanger");
});

//Submit button Event

submitBtn2.addEventListener("click", () => {
  contact2.classList.add("hide1");
  stepNo1.classList.remove("stepNoBgChanger");
  stepNo2.classList.remove("stepNoBgChanger");
  stepNo3.classList.add("stepNoBgChanger");
});

const buttons = document.querySelectorAll(".planCategoryBtn");

// Set the first button as selected by default
buttons[0].classList.add("activePlanCategory");

// Get the plan text and price from the first button
const defaultPlanText = buttons[0].querySelector(".planHeading").innerText;
const defaultPlanPrice = buttons[0].querySelector(".planText").innerText;

// Set the default plan text and price in para1 and para2
para1.textContent = defaultPlanText;
para2.textContent = defaultPlanPrice;

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the border from all buttons
    buttons.forEach((btn) => btn.classList.remove("activePlanCategory"));

    // Add the border to the clicked button
    button.classList.add("activePlanCategory");

    // Get the plan text and price from the clicked button
    const planText = button.querySelector(".planHeading").innerText;
    const planPrice = button.querySelector(".planText").innerText;

    // Set the text and price in para1 and para2
    para1.textContent = planText;
    para2.textContent = planPrice;
  });
});

//switcher

swicherMonthly.addEventListener("click", () => {
  planMonthly.classList.toggle("hidden");
  planYearly.classList.toggle("hidden");
  planMonthly1.classList.toggle("hidden1");
  planYearly1.classList.toggle("hidden1");
  SwitcherText1.classList.toggle("switcherTextChange");
  SwitcherText2.classList.toggle("switcherTextChange");
});

//-------------------Contact 3 plan--------------------

//Go back button Event

back2.addEventListener("click", () => {
  contact2.classList.remove("hide1");
  stepNo2.classList.add("stepNoBgChanger");
  stepNo3.classList.remove("stepNoBgChanger");
});

//Submit button Event

submitBtn3.addEventListener("click", () => {
  contact3.classList.add("hide2");
  stepNo3.classList.remove("stepNoBgChanger");
  stepNo4.classList.add("stepNoBgChanger");

  //calculation start

  if (!planMonthly1.classList.contains("hidden1")) {
    planSummary1.textContent = "Total (per month)";
    priceSummary.textContent = `$${
      Number(
        para2.textContent
          .split()
          .map((mov) => mov.slice(1, 3))
          .join()
      ) +
      Number(
        para4.textContent
          .split()
          .map((mov) => mov.slice(2, 3))
          .join()
      ) +
      Number(
        para6.textContent
          .split()
          .map((mov) => mov.slice(2, 3))
          .join()
      )
    }/mo`;
  } else if (!planYearly1.classList.contains("hidden1")) {
    planSummary1.textContent = "Total (per year)";
    priceSummary.textContent = `$${
      Number(
        para2.textContent
          .split()
          .map((mov) => mov.slice(1, 4))
          .join()
      ) +
      Number(
        para4.textContent
          .split()
          .map((mov) => mov.slice(2, 4))
          .join()
      ) +
      Number(
        para6.textContent
          .split()
          .map((mov) => mov.slice(2, 4))
          .join()
      )
    }/yr`;
  }

  //calculation end
});

const checkboxes = document.querySelectorAll(".checkboxThirdLevel");
const para3 = document.getElementById("para3");
const para4 = document.getElementById("para4");
const para5 = document.getElementById("para5");
const para6 = document.getElementById("para6");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checkedCheckboxes = document.querySelectorAll(
      ".checkboxThirdLevel:checked"
    );

    let output3 = "";
    let output4 = "";
    let output5 = "";
    let output6 = "";

    checkedCheckboxes.forEach((checkedCheckbox) => {
      const parentContainer = checkedCheckbox.closest(
        ".planYearly1, .planMonthly1"
      );

      if (!parentContainer.classList.contains("hidden1")) {
        // Retrieve the description and price associated with the checkbox
        const description =
          checkedCheckbox.nextElementSibling.querySelector("label").innerText;
        const price =
          checkedCheckbox.nextElementSibling.nextElementSibling.innerText;

        // Build the output strings based on the checkbox's ID
        if (checkedCheckbox.id === "online") {
          output3 += `${description}`;
          output4 += `${price}`;
        } else if (checkedCheckbox.id === "larger") {
          output5 += `${description}`;
          output6 += `${price}`;
        }
        // console.log("Sunny");
      } else {
        checkedCheckbox.checked = false; // Uncheck the checkbox
        // console.log("Sushil");
      }
    });

    para3.textContent = output3.trim();
    para4.textContent = output4.trim();
    para5.textContent = output5.trim();
    para6.textContent = output6.trim();
  });
});

//-------------------Contact 4 plan--------------------

//Go back button Event

back3.addEventListener("click", () => {
  contact3.classList.remove("hide2");
  stepNo3.classList.add("stepNoBgChanger");
  stepNo4.classList.remove("stepNoBgChanger");
});

//Submit button Event

const priceSummary = document.querySelector(".priceSummary");
const planSummary1 = document.querySelector(".planSummary1");

submitBtn4.addEventListener("click", () => {
  contact4.classList.add("hide2");
  stepNo1.classList.remove("stepNoBgChanger");
  stepNo2.classList.remove("stepNoBgChanger");
  stepNo3.classList.remove("stepNoBgChanger");
  stepNo4.classList.add("stepNoBgChanger");
});

//Change plan Event

const changePlanText = document.querySelector(".changePlanText");
changePlanText.addEventListener("click", () => {
  contact3.classList.remove("hide2");
  contact2.classList.remove("hide1");
  stepNo1.classList.remove("stepNoBgChanger");
  stepNo2.classList.add("stepNoBgChanger");
  stepNo3.classList.remove("stepNoBgChanger");
  stepNo4.classList.remove("stepNoBgChanger");
});
