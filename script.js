function main(){
  let inputarea=document.getElementById("inputarea");
  let img=document.getElementById("img");
  let v="https://joeschmoe.io/api/v1/"+inputarea.value;
  if(inputarea.value!=""){
    img.src=v;
  }
}
