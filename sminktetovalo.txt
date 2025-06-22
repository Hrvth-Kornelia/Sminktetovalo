
function copytoclipboard(elementID){
    const text=document.getElementById(elementID).innerText;
    navigator.clipboard.writeText(text).then(()=>{
        alert('Másolva: ' + text);
    
    });
}

const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'kornelia.k.css?v=' + new Date().getTime(); // mindig új URL
  document.head.appendChild(css);