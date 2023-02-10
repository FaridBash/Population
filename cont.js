
const countriesSection = document.getElementById('countries');
export const spinner=document.getElementsByClassName('spinner')[0];
export const countryNameArr=[];
export const countryPopulationArr=[];

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

    for (let i = 0; i < countries.length; i++) {
                const element = countries[i];
                // const countryData={};
                // console.log(element);
                const country = document.createElement('h4');
                country.innerText=element.name;
                countriesSection.appendChild(country);
                // countryData.name=element.name;
                // countryData.population=element.population;
                countryNameArr.push(element.name);
                countryPopulationArr.push(element.population);
        
                
            }

        console.log(countryNameArr);
        console.log(countryPopulationArr);

            updateChart(countryNameArr, countryPopulationArr);

    }


async function updateChart(cname, cpop){

    const ctx = document.getElementById("myChart");
    
    await new Chart(ctx, {
        type: "line",
        data: {
            labels: cname,
            datasets: [
                {
                    label: "label",
                    data: cpop,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}