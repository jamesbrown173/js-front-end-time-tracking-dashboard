/*========================================================
 * CONSTANTS
 *======================================================*/

const daily_button = document.getElementById("daily_button");
const weekly_button = document.getElementById("weekly_button");
const monthly_button = document.getElementById("monthly_button");

/*========================================================
 * Get JSON DATA and Populate HTML Elements
 *======================================================*/

async function populate(time_period) {
  const requestURL = "https://js-front-end-time-tracking-dashboard.vercel.app/data.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const data = await response.json();

  const num_of_entries = Object.keys(data).length;

  //   console.log(`Requested period is ${time_period}`);

  for (const key in data) {
    const current_hours_target = document.getElementById(
      `${data[key]["title"]}_current`
    );
    current_hours_target.innerHTML = `${data[key]["timeframes"][time_period]["current"]} hrs`;
    // current_hours_target.innerText("Poop");

    const prev_hours_target = document.getElementById(
      `${data[key]["title"]}_last`
    );
    prev_hours_target.innerHTML = `${data[key]["timeframes"][time_period]["previous"]} hrs`;

    // console.log(data[key]["title"]);
    // console.log(data[key]["timeframes"][time_period]);
  }
}

/*========================================================
 * Handle Event Listeners and Set Color of Text
 *======================================================*/

daily_button.addEventListener("click", function () {
  populate("daily");
  daily_button.classList.add("text-white", "text-opactity-100");
  weekly_button.classList.remove("text-white", "text-opactity-100");
  monthly_button.classList.remove("text-white", "text-opactity-100");
});

weekly_button.addEventListener("click", function () {
  populate("weekly");
  daily_button.classList.remove("text-white", "text-opactity-100");
  weekly_button.classList.add("text-white", "text-opactity-100");
  monthly_button.classList.remove("text-white", "text-opactity-100");
});

monthly_button.addEventListener("click", function () {
  populate("monthly");
  daily_button.classList.remove("text-white", "text-opactity-100");
  weekly_button.classList.remove("text-white", "text-opactity-100");
  monthly_button.classList.add("text-white", "text-opactity-100");
});

/*========================================================
 * Set the Defeault Page Load to Weekly
 *======================================================*/

window.onload = function () {
  populate("weekly");
  daily_button.classList.remove("text-white", "text-opactity-100");
  weekly_button.classList.add("text-white", "text-opactity-100");
  monthly_button.classList.remove("text-white", "text-opactity-100");
};
