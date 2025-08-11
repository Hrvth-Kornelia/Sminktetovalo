
function copytoclipboard(elementID){
    const text=document.getElementById(elementID).innerText;
    navigator.clipboard.writeText(text).then(()=>{
        alert('Másolva: ' + text);
    
    });
}

const css = document.createElement('link');
  css.rel = 'stylesheet';
  html.href = 'index.html?v=' + new Date().getTime();
  css.href = 'sminktetovalo.css?v=' + new Date().getTime(); // mindig új URL
   css.href = 'sminktetovalo.portfolio.elolap.css?v=' + new Date().getTime(); // mindig új URL
   css.href = 'sminktetovalo.arlista.css?v=' + new Date().getTime();
    css.href = 'sminktetovalo.nyitvaatartas.css?v=' + new Date().getTime();
    html.href = 'sminktetovalo.nyitvaatartas.css?v=' + new Date().getTime();
     css.href = 'elotte-utanna-care.css?v=' + new Date().getTime();
    html.href = 'elotte-utanna-care.html?v=' + new Date().getTime();
    css.href = 'sminktetovalo.hazirend.css?v=' + new Date().getTime();
     html.href = 'sminktetovalo.hazirend.html?v=' + new Date().getTime();
   
  document.head.appendChild(css);


  

  let deferredPrompt;
const installBtn = document.getElementById('mentes-nevjegykent'); // A gomb ID-je

// Eltároljuk a telepítési promptot, ha elérhető
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// Gomb kattintás esemény
installBtn.addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Telepítés elfogadva');
      } else {
        console.log('Telepítés elutasítva');
      }
      deferredPrompt = null;
    });
  } else {
    alert('Ez az alkalmazás jelenleg nem telepíthető a böngésző által.');
  }
});