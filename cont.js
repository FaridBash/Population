import { continent } from "./index.js";
const countriesSection = document.getElementById('countries');
export const spinner=document.getElementsByClassName('spinner')[0];
export let countryDataArr=[];
const ctx = document.getElementById("myChart");
let mychart=new Chart(ctx,{});
ctx.style.display='none';
export async function getContinent(c){
    try {
        
        spinner.removeAttribute('hidden');
        const getCont= await fetch(`https://restcountries.com/v2/region/${c}`)
        const data= await getCont.json();
        spinner.setAttribute('hidden', '');
        // console.log("spinner", spinner.style.display);
        // if(getCont==undefined){
        //     spinner.style.display='block';
        // }
        // else {
        //     spinner.style.display='none';
        // }
        
        return data;
        
        } catch (error) {
            console.log("Coudn't fetch your request");
        }
        
        }

        
export async function printCountries(c){
    
    countriesSection.innerHTML='';
    const countries= await getContinent(c);
    countryDataArr=[];
    for (let i = 0; i < countries.length; i++) {
                const element = countries[i];
                const countryDataObj={};
                console.log(element);
                const country = document.createElement('h4');
                country.innerText=element.name;
                country.setAttribute('id',element.name);
                countriesSection.appendChild(country);

                countryDataObj.name=element.name;
                countryDataObj.population=element.population;
                countryDataObj.neighbours=element.borders;
                
                countryDataArr.push(countryDataObj);
                
            }
            
            drawChart(countryDataArr);
            
    }


   const drawChart=function updateChart(objArr){

    mychart.destroy();
    mychart=new Chart(ctx, {
        type: "line",
        data: {
            labels: objArr.map(n=>n.name),
            datasets: [
                {
                    label: "Population",
                    data: objArr.map(n=>n.population),
                    backgroundColor:[
                        '#68BBE3'
                    ],
                    borderWidth: 1,
                    yAxisID:'y'
                },
                {
                    label: "# Of Neighbours",
                    data:objArr.map(n=>n.neighbours!=undefined? n.neighbours.length:0),
                    backgroundColor:[
                        '#F79489'
                    ],
                    borderWidth: 1,
                    yAxisID:'Neigbours'
                },
            ],
        },

        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks:{
                        color:"#fff"
                    }
                },
                Neigbours:{
                    beginAtZero: true,
                    position:'right',
                    ticks:{
                        color:"#fff"
                    }
                    
                },
                x:{
                    
                    ticks:{
                        color:"#fff"
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: ` Continent of ${continent}`,
                    color:"#fff",
                    font:{  
                        size:20
                    }
                
                },
                label:{
                    fontColor:['rgba(255,104,104,1)']
                }
            },
        },
    });
}