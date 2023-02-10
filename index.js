
const africa=document.getElementById('africa');
const america=document.getElementById('america');
const asia=document.getElementById('asia');
const europe=document.getElementById('europe');
const oceania=document.getElementById('oceania');
const countriesSection = document.getElementById('countries');
const spinner=document.getElementsByClassName('spinner')[0];
let continent='';

africa.addEventListener('click',e=>{ 
    continent='Africa';
    printCountries(continent);
    console.log(continent);
    
});
america.addEventListener('click',e=>{ 
    continent='Americas';
    console.log(continent);
    printCountries(continent);
    
});
asia.addEventListener('click',e=>{ 
    continent='Asia';
    console.log(continent);
    printCountries(continent);
    
    
});
europe.addEventListener('click',e=>{ 
    continent='Europe';
    console.log(continent);
    printCountries(continent);
    
});
oceania.addEventListener('click',e=>{ 
    continent='Oceania'; 
    console.log(continent);
    printCountries(continent);
});




async function getContinent(c){
    try {
        
    
        const getCont= await fetch(`https://restcountries.com/v2/region/${c}`)
        const data= await getCont.json();
        console.log(data);
        // console.log("spinner", spinner.style.display);
        if(getCont==undefined){
            spinner.style.display='block';
        }
        else {
            spinner.style.display='none';
        }
        
        return data;
        
        } catch (error) {
            console.log("Coudn't fetch your request");
        }
        
        }

        
async function printCountries(c){
    countriesSection.innerHTML='';
    const countries= await getContinent(c);
    console.log("countries:",countries);
    console.log("type: ",typeof countries);

    for (let i = 0; i < countries.length; i++) {
                const element = countries[i];
                console.log(element.name)
                const country = document.createElement('h4');
                country.innerText=element.name;
                countriesSection.appendChild(country);
        
                
            }

}


async function getCities(c){
    try {
        
    
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
        console.log(data);
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


        getCities('Israel');