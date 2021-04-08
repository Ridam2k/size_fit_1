//source: https://line.17qq.com/articles/mkkgwggsy.html
//uk size to s,m,l conversion:
let uksizes= new Map();
uksizes.set(6,"XXS")
uksizes.set(8,"XS");
uksizes.set(10,"S");
uksizes.set(12,"M");
uksizes.set(14,"L");
uksizes.set(16,"XL");
uksizes.set(18,"XXL");
uksizes.set(20,"XXXL");

//all sizes in cm 
//SKIRT SIZES source: https://www.asos.com/discover/size-charts/women/skirts/
//DRESS SIZES source: https://www.asos.com/discover/size-charts/women/dresses/
const arr1=[
    {"size":4, "bust": 78, "waist": 60, "hip": 83.5},
    {"size":6, "bust": 80.5, "waist": 62.5, "hip": 86},
    {"size":8, "bust": 83, "waist": 65, "hip": 88.5},
    {"size":10, "bust": 88, "waist": 70, "hip": 93.5},
    {"size":12, "bust": 93, "waist": 75, "hip": 98.5},
    {"size":14, "bust": 98, "waist": 80, "hip": 103.5},
    {"size":16, "bust": 103, "waist": 85, "hip": 108.5},
    {"size":18, "bust": 110.5, "waist": 92.5, "hip": 116.5}
]


function getSize(arr1, input){

    let mindiffsum= 10000;
    let minsize= arr1[0].size;

    for(let size of arr1){
        let diff1=0, diff2= 0, diff3=0, diff4= 0, diff5= 0;
        if(input.waist)diff1= Math.abs((size.waist/2)-input.waist);
        if(input.hip)diff2= Math.abs((size.hip/2)-input.hip);
        if(input.bust)diff3= Math.abs((size.bust/2)-input.bust);
        // if(input.hem)diff4= Math.abs((size.hem/2)-input.hem);
        // if(input.len)diff5= Math.abs((size.len/2)-input.len);
    
        let sumdiff= diff1+diff2+diff3+diff4+diff5;
        if(sumdiff<= mindiffsum){
            mindiffsum= sumdiff;
            minsize= size.size;
        }
        console.log(size, diff1, diff2, diff3, sumdiff);
    }
    return uksizes.get(minsize);    
}

function helper(form,num){

    let input= [
        {"bust":0},
        {"hip":0},
        {"len":0},
        {"hem":0},
        {"waist":0}
    ];

    if(form.elements.bust) input.bust= form.elements.bust.value;
    if(form.elements.waist) input.waist= form.elements.waist.value;
    if(form.elements.hip) input.hip= form.elements.hip.value;
    if(form.elements.len) input.len= form.elements.len.value;
    if(form.elements.hem) input.hem= form.elements.hem.value;

    // return input;
    let result= getSize(arr1, input);
    document.getElementById(`result${num}`).textContent += `Your best fit would be size: ${result}`;
}

let nums=[1,3,6];

for(let num of nums){
    let form= document.querySelector(`#form${num}`);
    form.addEventListener("submit", function(event){    
        event.preventDefault(); //will prevent refreshing of the page on clicking the button
        console.log("event fired");
        helper(form,num);
    });

    //close buttons
    let close= document.querySelector(`#close${num}`);
    close.addEventListener("click", function(event){
        clearFields(form,num);
    });
}

// form.addEventListener("submit", function(event){

//     // document.getElementById("result1").textContent = "";
//     // clearFields();
//     event.preventDefault(); //will prevent refreshing of the page on clicking the button
//     console.log("event fired");
//     helper();

//     // console.log(input);
//     // console.log(getSize(arr1, input));
//     //generates a string and displays it on the modal
//     // let result= getSize(arr1, input);
//     // document.getElementById("result1").textContent += `Your best fit would be size: ${result}`;
//     // let button = document.getElementById("submit1");
//     // button.innerHTML="Try Again";
//     // clearFields();
// });



function clearFields(form,num){
    
    if(form.elements.bust) form.elements.bust.value= "";
    if(form.elements.waist) form.elements.waist.value= "";
    if(form.elements.hip) form.elements.hip.value= "";
    if(form.elements.len) form.elements.len.value= "";
    if(form.elements.hem) form.elements.hem.value= "";

    // let button = document.getElementById("submit1");
    // button.innerHTML="Done";
    document.getElementById(`result${num}`).textContent = "";

}