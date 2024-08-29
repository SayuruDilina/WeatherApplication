// document.addEventListener('DOMContentLoaded', () => {
//     // Example of updating rain probability dynamically
//     const rainProbElement = document.getElementById('rain-prob');
//     const rainProbability = 75; // Replace with actual data
//     rainProbElement.textContent = `${rainProbability}%`;
// });

// function changeContent() {
//     document.getElementById('content').innerHTML = `
//         <h1>New Content</h1>
//         <p>This is the updated content after clicking the button.</p>
//     `;
// }
const inputlocation=document.getElementById("weatherTabSearchLocationTxt");
const weathericon=document.querySelector(".weather-icon");
const tempretureTxt=document.getElementById("TempretureTxtSideTab");

WEATHER_API=`http://api.weatherapi.com/v1/current.json?key=84a486dbf73c4638baa51830242908&q=`;
function findLocation(){
   fetch(WEATHER_API+inputlocation.value).then((res)=>res.json()).then((data)=>{
    console.log(data);
    
        console.log( data.current.temp_c);
        tempretureTxt.textContent =`${data.current.temp_c}°C`
   });
} 
// function Previous(){
//     const container = document.createElement("containerTab");
// container.innerHTML="";
 
// const  newDiv=document.createElement("div");
//     // Add content to the new div
//     newDiv.innerHTML = "This is the new div that replaced the old one.";

//     // Add any necessary styles or classes
//     newDiv.className = "dynamic-div";
//     newDiv.style.backgroundImage= "url('img/cloudsbackgroundcrop.jpg')";
//      newDiv.style.padding = "60px";
//      newDiv.style.paddingLeft = "500px";
//     newDiv.style.top = "100px";
//     newDiv.style.right="80px";
//     newDiv.style.borderRadius="40px";
//     newDiv.style.position="absolute";

//     // Append the new div to the container
//     document.getElementById("container").appendChild(newDiv);
// }