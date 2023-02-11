import { continent } from "./index.js";
import { drawChart } from "./chartIndex.js";
const countriesSection = document.getElementById("countries");
export const spinner = document.getElementsByClassName("spinner")[0];
export let countryDataArr = [];
export async function getContinent(c) {
  try {
    spinner.removeAttribute("hidden");
    const getCont = await fetch(`https://restcountries.com/v2/region/${c}`);
    const data = await getCont.json();
    spinner.setAttribute("hidden", "");
    return data;
  } catch (error) {
    console.log("Coudn't fetch your request");
  }
}

export async function printCountries(c) {
  countriesSection.innerHTML = "";
  const countries = await getContinent(c);
  countryDataArr = [];
  for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    const countryDataObj = {};
    // console.log(element);
    const country = document.createElement("h4");
    country.setAttribute("city", "true");
    country.innerText = element.name;
    country.setAttribute("id", element.name);
    countriesSection.appendChild(country);

    countryDataObj.name = element.name;
    countryDataObj.population = element.population;
    countryDataObj.neighbours = element.borders;

    countryDataArr.push(countryDataObj);
  }
  const y = countryDataArr.map((n) => n.population);
  const x = countryDataArr.map((n) => n.name);
  const neighboursAxis = {
    label: "# Of Neighbours",
    data: countryDataArr.map((n) =>
      n.neighbours != undefined ? n.neighbours.length : 0
    ),
    backgroundColor: ["#F79489"],
    borderWidth: 1,
    borderColor: "#F79489",
    yAxisID: "Neigbours",
  };
  const title = ` CONTINENT OF ${continent.toUpperCase()}`;
  drawChart(x, y, "Population", neighboursAxis, title);
}

// const chartData= {
//         type: "line",
//         data: {
//           labels: objArr.map((n) => n.name),
//           datasets: [
//             {
//               label: "Population",
//               data: objArr.map((n) => n.population),
//               backgroundColor: ["#68BBE3"],
//               borderWidth: 1,
//               yAxisID: "y",
//               borderColor: "#6497F0",
//             },
//             {
//               label: "# Of Neighbours",
//               data: objArr.map((n) =>
//                 n.neighbours != undefined ? n.neighbours.length : 0
//               ),
//               backgroundColor: ["#F79489"],
//               borderWidth: 1,
//               borderColor: "#F79489",
//               yAxisID: "Neigbours",
//             },
//           ],
//         },

//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//               ticks: {
//                 color: "#fff",
//               },
//               grid: {
//                 color: "#fff",
//               },
//             },
//             Neigbours: {
//               beginAtZero: true,
//               position: "right",
//               ticks: {
//                 color: "#fff",
//               },
//               grid: {
//                 color: "transparent",
//               },
//             },
//             x: {
//               ticks: {
//                 color: "#fff",
//               },
//               grid: {
//                 color: "#fff",
//               },
//             },
//           },
//           plugins: {
//             title: {
//               display: true,
//               text: ` Continent of ${continent}`,
//               color: "#fff",
//               font: {
//                 size: 20,
//               },
//             },
//           },
//         },
//       };

// const drawChart = function updateChart(objArr) {
//   mychart.destroy();
//   mychart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: objArr.map((n) => n.name),
//       datasets: [
//         {
//           label: "Population",
//           data: objArr.map((n) => n.population),
//           backgroundColor: ["#68BBE3"],
//           borderWidth: 1,
//           yAxisID: "y",
//           borderColor: "#6497F0",
//         },
//         {
//           label: "# Of Neighbours",
//           data: objArr.map((n) =>
//             n.neighbours != undefined ? n.neighbours.length : 0
//           ),
//           backgroundColor: ["#F79489"],
//           borderWidth: 1,
//           borderColor: "#F79489",
//           yAxisID: "Neigbours",
//         },
//       ],
//     },

//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//           ticks: {
//             color: "#fff",
//           },
//           grid: {
//             color: "#fff",
//           },
//         },
//         Neigbours: {
//           beginAtZero: true,
//           position: "right",
//           ticks: {
//             color: "#fff",
//           },
//           grid: {
//             color: "transparent",
//           },
//         },
//         x: {
//           ticks: {
//             color: "#fff",
//           },
//           grid: {
//             color: "#fff",
//           },
//         },
//       },
//       plugins: {
//         title: {
//           display: true,
//           text: ` Continent of ${continent}`,
//           color: "#fff",
//           font: {
//             size: 20,
//           },
//         },
//       },
//     },
//   });
// };

// const drawChart = function updateChart(objArr) {
//   mychart.destroy();
//   mychart = new Chart(ctx,{});
// };



          // [{
          //   label: "2012",
          //   data: 1222222,
          //   backgroundColor: ["#F79489"],
          //   borderWidth: 0,
            
          // },

          // {
          //   label: "2013",
          //   data: 333333333,
          //   backgroundColor: ["#F79489"],
          //   borderWidth: 0,
          // }]