
const countriesSection = document.getElementById('countries');
export const spinner=document.getElementsByClassName('spinner')[0];
export let countryDataArr=[];
export const countryPopulationArr=[];
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
    // myChart(countryDataArr).destroy();
    countriesSection.innerHTML='';
    const countries= await getContinent(c);
    countryDataArr=[];
    for (let i = 0; i < countries.length; i++) {
                const element = countries[i];
                const countryDataObj={};
                // console.log(element);
                const country = document.createElement('h4');
                country.innerText=element.name;
                countriesSection.appendChild(country);
                countryDataObj.name=element.name;
                countryDataObj.population=element.population;
                countryDataArr.push(countryDataObj);
                
                
                
            }
            
            drawChart(countryDataArr);
            
            

    }


    export const drawChart=function updateChart(objArr){

    mychart.destroy();
    mychart=new Chart(ctx, {
        type: "line",
        data: {
            labels: objArr.map(n=>n.name),
            datasets: [
                {
                    label: "label",
                    data: objArr.map(n=>n.population),
                    backgroundColor:[
                        '#68BBE3',
                        '#0E86D4',
                        '#055C9D',
                        '#003060',
                    ],
                    borderWidth: 1,
                },
            ],
        },

        options: {
            title:{
                display:true,
                text:'TEst',
                fontSize:25
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}