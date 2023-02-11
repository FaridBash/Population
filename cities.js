import { spinner, countryDataArr } from "./cont.js";

const citiesObjArr=[];
const citiesInCountry=[];

export async function getCities(){
    try {
        
        spinner.removeAttribute('hidden');
        const getCont= await fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`,{
            method:'GET',
            headers:{
                'X-Powered-By':'Express',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
                'Content-Type':'application/json; charset=utf-8',
                'Content-Length':'1855923',
                'ETag':'W/"1c51b3-lSOVyN7KLj5chKlJMCQY6t3Ha9E"',
                'Connection':'keep-alive'
            }
                })
        const data= await getCont.json();
        spinner.setAttribute('hidden', '');
        // console.log(data);        
        return data.data;
        
        } catch (error) {
            console.log("Coudn't fetch your request");
        }
        
    }

     export async function getCitiesForCountry(arr1, c){
            let citiesArr=[];
            let citiesObj={};
            let MyCountry=[];
            const arr2= await getCities();
            




            arr2.forEach((e)=>{
                if(e.country.toLowerCase()===c.toLowerCase()){
                        citiesObj.country=c;
                        citiesObj.city=e.city;
                        // citiesArr.push(e.city);
                        citiesObj.populationCounts=e.populationCounts;
                        citiesArr.push(citiesObj);
                        MyCountry.push(citiesObj);
                }
                arr1.forEach(e=>{
                    if(e.name.toLowerCase()===c.toLowerCase()){
                        e.cities=citiesArr;
                    }
                })
                citiesObj={};
            });
            // citiesArr=[];
            



            // arr1.forEach(country => {
            //     citiesArr=[];
            //     arr2.forEach(city=>{
            //         citiesObj={};
            //         if(country.name===city.country){
            //             citiesObj.city=city.city;
            //             // citiesArr.push(e.city);
            //             citiesObj.populationCounts=city.populationCounts;
            //             citiesArr.push(citiesObj);
            //             // console.log(citiesArr);
            //         }
            //     });
            //     country.cities=citiesArr;  
            // });
            // console.log('arrrrr: ',arr1);              

            return MyCountry;
        }



        // export async function printCities(){
        //     const allCities= await getCities();
        //     console.log(allCities);
        //     // const finalArr=getCitiesForCountry(countryDataArr, allCities);
        //     // console.log(finalArr);
        //     // const newArr=countryDataArr.map(getCitiesForCountry)
        //     for (let i = 0; i < allCities.length; i++) {
        //                 const element = allCities[i];
        //                 // if(element.city===country){
        //                 // }
        //                 console.log(element);                        
        //             }
                    
        // }
