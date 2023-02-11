import { printCountries, spinner, countryDataArr} from './cont.js'
import { getCitiesForCountry} from './cities.js'

const africa=document.getElementById('africa');
const america=document.getElementById('america');
const asia=document.getElementById('asia');
const europe=document.getElementById('europe');
const oceania=document.getElementById('oceania');
// const spinner=document.getElementsByClassName('spinner')[0];
export let continent='';

africa.addEventListener('click',e=>{ 
    continent='Africa';
    printCountries(continent);
    
    
});
america.addEventListener('click',e=>{ 
    continent='Americas';
    printCountries(continent);
    
});
asia.addEventListener('click',e=>{ 
    continent='Asia';
    printCountries(continent);
    
    
});
europe.addEventListener('click',e=>{ 
    continent='Europe';
    printCountries(continent);
    
});
oceania.addEventListener('click',e=>{ 
    continent='Oceania'; 
    printCountries(continent);
});


window.addEventListener('click', e=>{
   const item=e.target;
   const country=item.getAttribute('id');
//    console.log(item.getAttribute('id'));
   console.log(getCitiesForCountry(countryDataArr, country));



});



// printCities();




// async function getCities(){
//     try {
        
//         spinner.removeAttribute('hidden');
//         const getCont= await fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`,{
//             method:'GET',
//             headers:{
//                 'X-Powered-By':'Express',
//                 'Access-Control-Allow-Origin':'*',
//                 'Access-Control-Allow-Headers':'*',
//                 'Content-Type':'application/json; charset=utf-8',
//                 'Content-Length':'1855923',
//                 'ETag':'W/"1c51b3-lSOVyN7KLj5chKlJMCQY6t3Ha9E"',
//                 'Connection':'keep-alive'
//             }
//                 })
//         const data= await getCont.json();
//         spinner.setAttribute('hidden', '');
//         // console.log(data.data);        
//         return data.data;
        
//         } catch (error) {
//             console.log("Coudn't fetch your request");
//         }
        
//     }



//     async function getCitiesInCountry(c){
//         const cities=[];
//         const arr= await getCities();
//         console.log('arr: ', arr.length);
//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             // console.log(element);
//             // if(element.city.toLowerCase()=='israel'){
//             //     cities.push(element);
//             // }
//         }
//         arr.forEach(element => {
//             if(element.country.toLowerCase()===c.toLowerCase()){
//                 cities.push(element)
//             }
//         });
//         console.log(cities);
//         return cities;
//     }


//     getCitiesInCountry('algeria');



    // getCities();
        // async function printCities(){
            
        //     const allCities= await getCities();
        //     // console.log(allCities[0]);
        //     for (let i = 0; i < allCities.length; i++) {
        //                 const element = allCities[i];
        //                 console.log(element.name);                        
        //             }
        
        // }

        // printCities();

        // export async function printCountries(c){
        //     const countries= await getContinent(c);
        //     countryDataArr=[];
        //     for (let i = 0; i < countries.length; i++) {
        //                 const element = countries[i];
        //                 const countryDataObj={};
        //                 // console.log(element);
        //                 const country = document.createElement('h4');
        //                 country.innerText=element.name;
        //                 country.setAttribute('id',element.name);
        //                 countriesSection.appendChild(country);
        
        //                 countryDataObj.name=element.name;
        //                 countryDataObj.population=element.population;
        //                 countryDataObj.neighbours=element.borders;
                        
        //                 countryDataArr.push(countryDataObj);
                        
        //             }
                    
        //             drawChart(countryDataArr);
                    
        //     }
