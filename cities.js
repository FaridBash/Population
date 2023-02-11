import { spinner, countryDataArr } from "./cont.js";
import { drawChart } from "./chartIndex.js";

const citiesObjArr = [];
const citiesInCountry = [];


// const ctx2 = document.getElementById("myChart");
// let mychart = new Chart(ctx2, {});
// ctx2.style.display = "none";



export async function getCities() {
  try {
    spinner.removeAttribute("hidden");
    const getCont = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population/cities`,
      {
        method: "GET",
        headers: {
          "X-Powered-By": "Express",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "1855923",
          ETag: 'W/"1c51b3-lSOVyN7KLj5chKlJMCQY6t3Ha9E"',
          Connection: "keep-alive",
        },
      }
    );
    const data = await getCont.json();
    spinner.setAttribute("hidden", "");
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.log("Coudn't fetch your request");
  }
}

export async function getCitiesForCountry(arr1, c) {
  let citiesArr = [];
  let citiesObj = {};
  let MyCountry = [];
  const arr2 = await getCities();

  arr2.forEach((e) => {
    if (e.country.toLowerCase() === c.toLowerCase()) {
      citiesObj.country = c;
      citiesObj.city = e.city;
      citiesObj.populationCounts = e.populationCounts;
      citiesObj.populationDisplay=e.populationCounts[0].value;
      citiesArr.push(citiesObj);
      MyCountry.push(citiesObj);
    }
    arr1.forEach((e) => {
      if (e.name.toLowerCase() === c.toLowerCase()) {
        e.cities = citiesArr;
      }
    });
    citiesObj = {};
  });
  const y=MyCountry.map((n) => n.populationDisplay);
  const x=MyCountry.map((n) => n.city);
  const yearsAxis={
            //   label: "# Of Neighbours",
            //   data: countryDataArr.map((n) =>
            //     n.neighbours != undefined ? n.neighbours.length : 0
            //   ),
            //   backgroundColor: ["#F79489"],
            //   borderWidth: 1,
            //   borderColor: "#F79489",
            //   yAxisID: "Neigbours",
            };
    drawChart(x, y, "Population",yearsAxis);
  console.log(MyCountry)
  return MyCountry;
}


// const y=countryDataArr.map((n) => n.population);
// const x=countryDataArr.map((n) => n.name);
// const neighboursAxis={
//           label: "# Of Neighbours",
//           data: countryDataArr.map((n) =>
//             n.neighbours != undefined ? n.neighbours.length : 0
//           ),
//           backgroundColor: ["#F79489"],
//           borderWidth: 1,
//           borderColor: "#F79489",
//           yAxisID: "Neigbours",
//         };
// drawChart(x, y, "Population", neighboursAxis);
