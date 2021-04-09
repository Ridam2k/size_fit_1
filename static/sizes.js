//source: https://line.17qq.com/articles/mkkgwggsy.html
//uk size to international sizes (s,m,l) conversion:
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
//SKIRT SIZESCHART source: https://www.asos.com/discover/size-charts/women/skirts/
//DRESS SIZECHART source: https://www.asos.com/discover/size-charts/women/dresses/
const skirtDressSizeChart=[
    {"size":4, "bust": 78, "waist": 60, "hip": 83.5},
    {"size":6, "bust": 80.5, "waist": 62.5, "hip": 86},
    {"size":8, "bust": 83, "waist": 65, "hip": 88.5},
    {"size":10, "bust": 88, "waist": 70, "hip": 93.5},
    {"size":12, "bust": 93, "waist": 75, "hip": 98.5},
    {"size":14, "bust": 98, "waist": 80, "hip": 103.5},
    {"size":16, "bust": 103, "waist": 85, "hip": 108.5},
    {"size":18, "bust": 110.5, "waist": 92.5, "hip": 116.5}
]

//all sizes in cm 
//T-SHIRT SIZECHART source: https://cdn.shopify.com/s/files/1/0972/9846/files/WOMENS-HALF-SLEEVE-SIZE-CHART-1024x429_large.jpg?v=1549543220
const tshirtSizeChart=[
    {"size":"XS", "chest": cm(32), "len": cm(23), "shoulder": cm(14), "sleevelen": cm(5.5), "sleeveopen": cm(5)},
    {"size":"S", "chest": cm(34), "len": cm(24), "shoulder": cm(15), "sleevelen": cm(6), "sleeveopen": cm(5.5)},
    {"size":"M", "chest": cm(36), "len": cm(25), "shoulder": cm(16), "sleevelen": cm(6.5), "sleeveopen": cm(5.5)},
    {"size":"L", "chest": cm(38), "len": cm(26), "shoulder": cm(17), "sleevelen": cm(7), "sleeveopen": cm(6)},
    {"size":"XL", "chest": cm(40), "len": cm(27), "shoulder": cm(18), "sleevelen": cm(7.5), "sleeveopen": cm(6.5)},
    {"size":"XXL", "chest": cm(41), "len": cm(28), "shoulder": cm(19), "sleevelen": cm(8), "sleeveopen": cm(7)}
]

//all sizes in cm
//JEANS SIZECHART source: https://www.motorcyclegear.com/neml_images/Aarons%20Folder/Bull-it%20size%20chart/Womens%20jeans.png
const jeansSizeChart=[
    {"size":6, "waist": cm(24), "hip": cm(16.7), "thigh": cm(9.2), "frontrise": cm(7.1), "backrise": cm(12.2), "knee": cm(5.9), "legopening": cm(5.1)},
    {"size":8, "waist": cm(26), "hip": cm(17.7), "thigh": cm(9.8), "frontrise": cm(7.5), "backrise": cm(12.6), "knee": cm(6.3), "legopening": cm(5.5)},
    {"size":10, "waist": cm(28), "hip": cm(18.7), "thigh": cm(10.4), "frontrise": cm(7.9), "backrise": cm(13), "knee": cm(6.7), "legopening": cm(5.9)},
    {"size":12, "waist": cm(30), "hip": cm(19.7), "thigh": cm(11), "frontrise": cm(8.3), "backrise": cm(13.4), "knee": cm(7.1), "legopening": cm(6.3)},
    {"size":14, "waist": cm(32), "hip": cm(20.7), "thigh": cm(11.6), "frontrise": cm(8.7), "backrise": cm(13.8), "knee": cm(7.5), "legopening": cm(6.7)},
    {"size":16, "waist": cm(34), "hip": cm(21.7), "thigh": cm(12.2), "frontrise": cm(9.1), "backrise": cm(14.2), "knee": cm(7.9), "legopening": cm(7.1)},
    {"size":18, "waist": cm(36), "hip": cm(22.7), "thigh": cm(12.8), "frontrise": cm(9.5), "backrise": cm(14.6), "knee": cm(8.3), "legopening": cm(7.5)},
    {"size":20, "waist": cm(40), "hip": cm(23.7), "thigh": cm(13.4), "frontrise": cm(9.9), "backrise": cm(15), "knee": cm(8.7), "legopening": cm(7.9)},
    // {"size":22, "waist": cm(42), "hip": cm(24.7), "thigh": cm(14), "frontrise": cm(10.3), "backrise": cm(15.4), "knee": cm(9.1), "legopening": cm(8.3)},
]

//for skirt and dress
const getSkirtDressSize= function(skirtDressSizeChart,form){
    let input= fillInputArray(form);
    let mindiffsum= 10000;
    let minsize= skirtDressSizeChart[0].size;

    for(let size of skirtDressSizeChart){
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
    }
    return uksizes.get(minsize);    
}

//for tshirt
const getTshirtSize= function(tshirtSizeChart,form){
    let input= fillInputArray(form);
    let mindiffsum= 10000;
    let minsize= tshirtSizeChart[0].size;

    for(let size of tshirtSizeChart){
        let diff1=0, diff2= 0, diff3=0, diff4= 0, diff5= 0, diff6= 0, diff7= 0, diff8= 0, diff9= 0, diff10=0;
        // if(input.waist)diff1= Math.abs((size.waist/2)-input.waist);
        if(input.hip)diff2= Math.abs((size.hip/2)-input.hip);
        if(input.bust)diff3= Math.abs((size.bust/2)-input.bust);
        // if(input.hem)diff4= Math.abs((size.hem/2)-input.hem);
        if(input.len)diff5= Math.abs((size.len)-input.len);
        if(input.shoulder)diff6= Math.abs((size.shoulder)-input.shoulder);
        if(input.sleevelen)diff7= Math.abs((size.sleevelen)-input.sleevelen);
        if(input.sleeveopen)diff8= Math.abs((size.sleeveopen)-input.sleeveopen);
        if(input.chest)diff9= Math.abs((size.chest/2)-input.chest);
        // if(input.necktoshoulder)diff10= Math.abs((size.necktoshoulder)-input.necktoshoulder);
    
        let sumdiff= diff1+diff2+diff3+diff4+diff5+diff6+diff7+diff8+diff9+diff10;
        if(sumdiff<= mindiffsum){
            mindiffsum= sumdiff;
            minsize= size.size;
        }
    }
    return minsize; 
}

//for jeans
const getJeansSize= function(jeansSizeChart,form){
    let input= fillInputArray(form);
    console.log(input);
    let mindiffsum= 10000;
    let minsize= jeansSizeChart[0].size;
    console.log(form.elements);

    for(let size of jeansSizeChart){
        let diff1=0, diff2= 0, diff3=0, diff4= 0, diff5= 0, diff6= 0, diff7= 0;
        if(input.waist)diff1= Math.abs((size.waist/2)-input.waist);
        if(input.hip)diff2= Math.abs((size.hip)-input.hip); 
        if(input.legopening)diff4= Math.abs((size.legopening)-input.legopening); 
        if(input.frontrise)diff5= Math.abs((size.frontrise)-input.frontrise); 
        if(input.thigh)diff6= Math.abs((size.thigh)-input.thigh); 
        if(input.knee)diff7= Math.abs((size.knee)-input.knee);
    
        let sumdiff= diff1+diff2+diff3+diff4+diff5+diff6+diff7;
        if(sumdiff<= mindiffsum){
            mindiffsum= sumdiff;
            minsize= size.size;
        }
    }
    return uksizes.get(minsize); 
}

function fillInputArray(form){

    let input= [
        {"bust":0},
        {"hip":0},
        {"len":0},
        {"hem":0},
        {"waist":0},
        {"chest":0},
        {"shoulder":0},
        {"sleevelen":0},
        {"sleeveopen":0},
        {"necktoshoulder":0},
        {"frontrise":0},
        {"thigh":0},
        {"knee":0},
        {"legopening":0},
        {"inseam":0}
    ];

    if(form.elements.bust) input.bust= form.elements.bust.value;
    if(form.elements.waist) input.waist= form.elements.waist.value;
    if(form.elements.hip) input.hip= form.elements.hip.value;
    if(form.elements.len) input.len= form.elements.len.value;
    if(form.elements.hem) input.hem= form.elements.hem.valsleevelen
    if(form.elements.chest) input.chest= form.elements.chest.value;
    if(form.elements.shoulder) input.shoulder= form.elements.shoulder.valshoulder
    if(form.elements.sleevelen) input.sleevelen= form.elements.sleevelen.value;
    if(form.elements.sleeveopen) input.sleeveopen= form.elements.sleeveopen.value;
    if(form.elements.necktoshoulder) input.necktoshoulder= form.elements.necktoshoulder.value;
    if(form.elements.frontrise) input.frontrise= form.elements.frontrise.value;
    if(form.elements.thigh) input.thigh= form.elements.thilegopening
    if(form.elements.legopening) input.legopening= form.elements.legopening.value;
    if(form.elements.inseam) input.inseam= form.elements.inseam.value;


    return input;
}

let products=[
    {"num":1, "sizechart": skirtDressSizeChart, "fn": getSkirtDressSize},
    {"num":2, "sizechart": tshirtSizeChart, "fn": getTshirtSize},
    {"num":3, "sizechart": skirtDressSizeChart, "fn": getSkirtDressSize},
    {"num":4, "sizechart": tshirtSizeChart, "fn": getTshirtSize},
    {"num":5, "sizechart": jeansSizeChart, "fn": getJeansSize},
    {"num":6, "sizechart": skirtDressSizeChart, "fn": getSkirtDressSize}
]

for(let product of products){
    let form= document.querySelector(`#form${product.num}`);
    form.addEventListener("submit", function(event){    
        event.preventDefault(); //will prevent refreshing of the page on clicking the button
        document.getElementById(`result${product.num}`).textContent = "";
        console.log("event fired");
        let result= product.fn(product.sizechart,form); 
        if(result)document.getElementById(`result${product.num}`).textContent += `Your best fit would be size: ${result}`;
        else document.getElementById(`result${product.num}`).textContent += `Sorry we don't have a similar sized product :/`;
    });

    //close buttons
    let close= document.querySelector(`#close${product.num}`);
    close.addEventListener("click", function(){
        clearFields(form,product.num);
    });
}

function clearFields(form,num){
    for(let i=0; i<form.elements.length-2; i++){
        form.elements[i].value= "";
    }
    document.getElementById(`result${num}`).textContent = "";
}

//converts Inches To Cm
function cm(inches){
    return (2.54*inches);
}

// function clearFields(form,num){
    
//     if(form.elements.bust) form.elements.bust.value= "";
//     if(form.elements.waist) form.elements.waist.value= "";
//     if(form.elements.hip) form.elements.hip.value= "";
//     if(form.elements.len) form.elements.len.value= "";
//     if(form.elements.hem) form.elements.hem.value= "";
//     if(form.elements.sleevelen) form.elements.sleevelen.value= "";
//     if(form.elements.sleeveopen) form.elements.sleeveopen.value= "";
//     if(form.elements.chest) form.elements.chest.value= "";
//     if(form.elements.shoulder) form.elements.shoulder.value= "";
//     if(form.elements.necktoshoulder) form.elements.necktoshoulder.value= "";
//     if(form.elements.frontrise) form.elements.frontrise= "";
//     if(form.elements.thigh) form.elements.thigh= "";
//     if(form.elements.legopening) form.elements.legopening= "";
//     if(form.elements.inseam) form.elements.inseam= "";
   
//     document.getElementById(`result${num}`).textContent = "";

// }

// for(let num of nums){
//     let form= document.querySelector(`#form${num}`);
//     form.addEventListener("submit", function(event){    
//         event.preventDefault(); //will prevent refreshing of the page on clicking the button
//         document.getElementById(`result${num}`).textContent = "";
//         console.log("event fired");
//         let result= getSize1(arr1,form); //THIS ONLY
//         if(result)document.getElementById(`result${num}`).textContent += `Your best fit would be size: ${result}`;
//         else document.getElementById(`result${num}`).textContent += `Sorry we don't have a similar sized product :/`;
//     });

//     //close buttons
//     let close= document.querySelector(`#close${num}`);
//     close.addEventListener("click", function(){
//         clearFields(form,num);
//     });
// }

// let nums2=[2,4]; //tshirts

// for(let num of nums2){
//     let form= document.querySelector(`#form${num}`);
//     form.addEventListener("submit", function(event){    
//         event.preventDefault(); //will prevent refreshing of the page on clicking the button
//         document.getElementById(`result${num}`).textContent = "";
//         console.log("event fired");
//         let result= getSize2(arr2,form);
//         if(result)document.getElementById(`result${num}`).textContent += `Your best fit would be size: ${result}`;
//         else document.getElementById(`result${num}`).textContent += `Sorry we don't have a similar sized product :/`;
//     });

//     //close buttons
//     let close= document.querySelector(`#close${num}`);
//     close.addEventListener("click", function(){
//         clearFields(form,num);
//     });
// }

// let nums3= [5];//jeans
// for(let num of nums3){
//     let form= document.querySelector(`#form${num}`);
//     form.addEventListener("submit", function(event){    
//         event.preventDefault(); //will prevent refreshing of the page on clicking the button
//         document.getElementById(`result${num}`).textContent = "";
//         console.log("event fired");
//         let result= getSize3(arr3,form);
//         if(result)document.getElementById(`result${num}`).textContent += `Your best fit would be size: ${result}`;
//         else document.getElementById(`result${num}`).textContent += `Sorry we don't have a similar sized product :/`;
//     });

//     //close buttons
//     let close= document.querySelector(`#close${num}`);
//     close.addEventListener("click", function(){
//         clearFields(form,num);
//     });
// }