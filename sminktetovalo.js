
function copytoclipboard(elementID){
    const text=document.getElementById(elementID).innerText;
    navigator.clipboard.writeText(text).then(()=>{
        alert('Másolva: ' + text);
    
    });
}

const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'sminktetovalo.css?v=' + new Date().getTime(); // mindig új URL
   css.href = 'sminktetovalo.portfolio.elolap.css?v=' + new Date().getTime(); // mindig új URL
   css.href = 'sminktetovalo.arlista.css?v=' + new Date().getTime();
    css.href = 'sminktetovalo.nyitvaatartas.css?v=' + new Date().getTime();
    html.href = 'sminktetovalo.nyitvaatartas.css?v=' + new Date().getTime();
     css.href = 'elotte-utanna-care.css?v=' + new Date().getTime();
    html.href = 'elotte-utanna-care.html?v=' + new Date().getTime();
    css.href = 'sminktetovalo.hazirend.css?v=' + new Date().getTime();
   
  document.head.appendChild(css);