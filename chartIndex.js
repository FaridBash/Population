import { continent } from "./index.js"



const ctx = document.getElementById("myChart");
let mychart = new Chart(ctx, {});
ctx.style.display = "none";


// export const drawChart = function updateChart(objArr) {
//     mychart.destroy();
//     mychart = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: objArr.map((n) => n.name),
//         datasets: [
//           {
//             label: "Population",
//             data: objArr.map((n) => n.population),
//             backgroundColor: ["#68BBE3"],
//             borderWidth: 1,
//             yAxisID: "y",
//             borderColor: "#6497F0",
//           },
//           {
//             label: "# Of Neighbours",
//             data: objArr.map((n) =>
//               n.neighbours != undefined ? n.neighbours.length : 0
//             ),
//             backgroundColor: ["#F79489"],
//             borderWidth: 1,
//             borderColor: "#F79489",
//             yAxisID: "Neigbours",
//           },
//         ],
//       },
  
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: {
//               color: "#fff",
//             },
//             grid: {
//               color: "#fff",
//             },
//           },
//           Neigbours: {
//             beginAtZero: true,
//             position: "right",
//             ticks: {
//               color: "#fff",
//             },
//             grid: {
//               color: "transparent",
//             },
//           },
//           x: {
//             ticks: {
//               color: "#fff",
//             },
//             grid: {
//               color: "#fff",
//             },
//           },
//         },
//         plugins: {
//           title: {
//             display: true,
//             text: ` Continent of ${continent}`,
//             color: "#fff",
//             font: {
//               size: 20,
//             },
//           },
//         },
//       },
//     });
//   };
  

export const drawChart = function updateChart(labelsX, labelsY, labelText, newAxisData, title ) {
    mychart.destroy();
    mychart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labelsX,
        datasets: [
          {
            label: labelText,
            data: labelsY,
            backgroundColor: ["#68BBE3"],
            borderWidth: 1,
            yAxisID: "y",
            borderColor: "#6497F0",
          },
          newAxisData,
          
        ],
      },
  
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "#fff",
            },
          },
          Neigbours: {
            beginAtZero: true,
            position: "right",
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "transparent",
            },
          },
          x: {
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "#fff",
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: title,
            color: "#fff",
            font: {
              size: 20,
            },
          },
        },
      },
    });
  };
  