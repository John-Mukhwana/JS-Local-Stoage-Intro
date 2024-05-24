

const inputKey=document.getElementById('inputKey');
const inputValue=document.getElementById('inputValue');
const btninsert=document.getElementById('btninsert');
const Isoutput=document.getElementById('Isoutput');

btninsert.onclick =function(){

    const key=inputKey.value;
    const value=inputValue.value;
    console.log(key);
    console.log(value);

if(key && value){
  localStorage.setItem(key,value);
  location.reload();
}
};

for (let i=0; i<localStorage.length;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);

    Isoutput.innerHtml += `${key}: ${value} <br>`;
};



    