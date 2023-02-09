
const cont=window.localStorage.getItem('continent');
console.log("contin: ",cont);
const countriesSection = document.getElementById('countries');


async function getContin(){
    try {
        
    
        const getCont= await fetch(`https://restcountries.com/v2/region/Africa`)
        const data= await getCont.json();
        console.log(data);
        return data;
        // for (let i = 0; i < data.length; i++) {
        //     const element = data[i];
        //     console.log(data);


        //     const listItem = document.createElement('li');
        //     listItem.appendChild(
        //       document.createElement('strong')
        //     ).textContent = element.name;
        //     listItem.append(
        //       ` can be found in ${""
        //       }. Cost: `
        //     );
        //     listItem.appendChild(
        //       document.createElement('strong')
        //     ).textContent = `£${""}`;
        //     myList.appendChild(listItem);

            
        // }
        
        } catch (error) {
        
        }
        
        }

        
async function print(){
    const countries= await getContin();
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

print();

