const btn = document.querySelector('button');
const min = document.querySelector('#messageIn')
const mout = document.querySelector('#msgout')
btn.addEventListener('click',display)
function display(){
    let content = min.value;
    if(content==''){
        alert('Please enter valid value');
    }
    else{
    mout.innerHTML=content;
    min.innerHTML=''
}
}