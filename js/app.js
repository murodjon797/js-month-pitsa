let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".select");
let elStr = document.querySelector(".output__bread");
let elHajm = document.querySelector(".output__size");
let elPizzaAdd = document.querySelector(".output__additions");


let arr = ["Yupqa","O'rtacha","Qalin"];

function Nonselect(array,list){

  for (let i = 0; i < array.length; i++){

        let elOption = document.createElement("option");
        elOption.setAttribute("value",array[i]);
        elOption.setAttribute("class",".option_val");
        elOption.textContent = array[i];
        elOption.value = array[i];
        list.appendChild(elOption); 

  }

}

Nonselect(arr,elSelect);

elSelect.addEventListener("click", function(evt){
   evt.preventDefault();
   let elStrCout = evt.target.value;
   elStr.textContent =  elStrCout;
   
})


let elRadio1 = document.querySelector(".input__cm1");
let elRadio2 = document.querySelector(".input__cm2");
let elRadio3 = document.querySelector(".input__cm3");
let elResult = document.querySelector(".output__size");

elRadio1.addEventListener("click", function(evt){
  evt.preventDefault();

  if (elRadio1.checked == true) {
    elResult.textContent = '25 cm';
  }

});


elRadio2.addEventListener("click", function(evt){
  evt.preventDefault();

  if (elRadio2.checked == true) {
    elResult.textContent = '30 cm';
  }

});

elRadio3.addEventListener("click", function(evt){
  evt.preventDefault();

  if (elRadio3.checked == true) {
    elResult.textContent = '35 cm';
  }
});


let elList = document.querySelector(".list");
let elList1 = document.querySelector(".list1");
let elItem = document.createElement("li");
let elItem1 = document.createElement("li");
let elItem2 = document.createElement("li");
let elItem3 = document.createElement("li");
let elItem4 = document.createElement("li");
let elItem5 = document.createElement("li");
let elItem6 = document.createElement("li");
let elItem7 = document.createElement("li");

let ellabel = document.querySelector(".chek__label");
let elInput = document.querySelector(".chek__input");

elInput.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput.checked == true) {
  elItem.textContent = "pomidor";
  elList.appendChild(elItem)
} else if (elInput.checked == false) {
  elList.removeChild(elItem);

}
})


let ellabel1 = document.querySelector(".chek__label1");
let elInput1 = document.querySelector(".chek__input1");

elInput1.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput1.checked == true) {
  elItem1.textContent = "zaytun";
  elList.appendChild(elItem1)
} else if (elInput1.checked == false) {
  elList.removeChild(elItem1);

}
})

let ellabel2 = document.querySelector(".chek__label2");
let elInput2 = document.querySelector(".chek__input2");

elInput2.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput2.checked == true) {
  elItem2.textContent = "Qo'ziqorin";
  elList.appendChild(elItem2)
} else if (elInput2.checked == false) {
  elList.removeChild(elItem2);

}
})


let elInput3 = document.querySelector(".chek__input3");
let ellabel3 = document.querySelector(".chek__label3");

elInput3.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput3.checked == true) {
  elItem3.textContent = "Kurka go'shti";
  elList.appendChild(elItem3)
} else if (elInput3.checked == false) {
  elList.removeChild(elItem3);

}
})

let elInput4 = document.querySelector(".chek__input4");
let ellabel4 = document.querySelector(".chek__label4");

elInput4.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput4.checked == true) {
  elItem4.textContent = "Tuzlangan bodring";
  elList.appendChild(elItem4)
} else if (elInput4.checked == false) {
  elList.removeChild(elItem4);

}
})


let elInput5 = document.querySelector(".chek__input5");
let ellabel5 = document.querySelector(".chek__label5");

elInput5.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput5.checked == true) {
  elItem5.textContent = "Qazi";
  elList.appendChild(elItem5)
} else if (elInput5.checked == false) {
  elList.removeChild(elItem5);

}
})


let elInput6 = document.querySelector(".chek__input6");
let ellabel6 = document.querySelector(".chek__label6");

elInput6.addEventListener("change", function(evt){
evt.preventDefault();

if (elInput6.checked == true) {
  elItem6.textContent = "Achchiq";
  elList1.appendChild(elItem6)
} else if (elInput6.checked == false) {
  elList1.removeChild(elItem6);

}
});


let elInput7 = document.querySelector(".chek__input7");
let ellabel7 = document.querySelector(".chek__label7");

elInput7.addEventListener("change", function(evt){
  evt.preventDefault();
  
  if (elInput7.checked == true) {
    elItem7.textContent = "Sosiskali";
    elList1.appendChild(elItem7)
  } else if (elInput6.checked == false) {
    elList1.removeChild(elItem7);
  
  }
  })
