import { spinner, countryDataArr } from "./cont.js";
import { drawChart } from "./chartIndex.js";
import { country } from "./index.js";

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
  const label=MyCountry[0].populationCounts[0].year != undefined ? MyCountry[0].populationCounts[0].year:0;
  const newLabels=MyCountry.map(labelsCity);
  const y=MyCountry.map((n) => n.populationCounts[0].value != undefined ? n.populationCounts[0].value:0 );
//   const x=MyCountry.map((n) => n.city);
  const x=newLabels.map((n)=>n.map((i)=>i.city));
  const myDataSet=newLabels.map((n)=>n.map((i)=>i.population));
  console.log("MY DATTAAA SEEET",bigArrayToDataSet(myDataSet));
  const allYearsArr=newLabels.map((n)=>n.map((i)=>i.population.map((x)=>x.year)));

  console.log("MY DATA SET: ",myDataSet);
  console.log("my labels",newLabels);
  const yearsAxis={
                label:'',
                data:[],
            };
    const title=`INFO ABOUT ${country.toUpperCase()}`
    drawChart(x, y, label,yearsAxis,title);
  console.log(MyCountry);
  return MyCountry;
}


function labelsCity(n){
    const nArr=[];
    nArr.push(n);
    const arr=[];
    let obj={};
    nArr.forEach(e=>{
        obj.city=e.city;
        obj.population=e.populationCounts;
        arr.push(obj);
        obj={};
    });

return arr;

}
function labelsObj(n){
    const nArr=[];
    nArr.push(n);
    const arr=[];
    let obj={};


    nArr.forEach(e=>{
        if(e!=undefined){
            obj.city=n.city;
            obj.year=e.year;
            obj.value=e.value
            arr.push(obj);
        }
        obj={};
    });
    return arr;
}


//   const arrayObj=MyCountry.map((n) => n.populationCounts!= undefined ? 
// n.populationCounts.map(labelsObj):0 );

// console.log('arrayObj: ',arrayObj);


function bigArrayToDataSet(arr){

    // [ [{    }] [ {  } ] [ {   }  ] [ {    } ] [{    }] ]
    let weHaveit='false';
    const DataSet=[];
    const singleObjArr=[];
    let finalObject={};
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = 0; j < element.length; j++) {
            const secondArr = element[j];

            for (let y = 0; y < secondArr.length; y++) {
                const obj = secondArr[y];
                singleObjArr.push(obj);   
            }
        }
        
    }
    let year='0';
    let popArr=[];
    
    for (let i = 0; i < singleObjArr.length; i++) {
        const element = singleObjArr[i];
        year=element.year;
        for (let m = 0; m < DataSet.length; m++) {
            const element = DataSet[m];
            if(element.year===year){
                weHaveit=true;
            }
        }
        if(weHaveit===false){
            finalObject.year=element.year;
            for (let j = i+1; j < singleObjArr.length; j++) {
                const check = singleObjArr[j];
                if(year===check.year){
                    popArr.push(check.value);
                    finalObject.value=popArr;
                }
                
            }
            DataSet.push(finalObject);
        }
        popArr=[];
        finalObject={};
        weHaveit=false;
        
    }

    

    return DataSet;

}