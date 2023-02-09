
const africa=document.getElementById('africa');
const america=document.getElementById('america');
const asia=document.getElementById('asia');
const europe=document.getElementById('europe');
const oceania=document.getElementById('oceania');

let continent='';

africa.addEventListener('click',e=>{ 
    continent='Africa';
    window.localStorage.setItem("continent", continent);
    continent='';
});
console.log("getItem",localStorage.getItem("continent"))
america.addEventListener('click',e=>{ 
    continent='America';
    localStorage.setItem("continent", continent);
});
asia.addEventListener('click',e=>{ 
    continent='Asia';
    localStorage.setItem("continent", continent);

});
europe.addEventListener('click',e=>{ 
    continent='Europe';
    localStorage.setItem("continent", continent);
 });
oceania.addEventListener('click',e=>{ 
    continent='Oceania'; 
    localStorage.setItem("continent", continent);
});

