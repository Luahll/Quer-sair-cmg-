var btn = document.querySelector(".no");
var position

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function() {

    const larguraTela = window.innerWidth - 100;
    const alturaTela = window.innerHeight - 50;

    const x = Math.random() * larguraTela;
    const y = Math.random() * alturaTela;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px"; });
      
      btn.addEventListener("touchend", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
  } 
  
  else {
    btn.addEventListener("mouseover", function() {

    const larguraTela = window.innerWidth - 100;
    const alturaTela = window.innerHeight - 50;

    const x = Math.random() * larguraTela;
    const y = Math.random() * alturaTela;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";});
  }

  btn.addEventListener("mouseover", function(){

    btn.style.position = "absolute";

    btn.style.left = geraPosiçao(5, 80);

    btn.style.top = geraPosiçao(5, 80);

});
  function tanks() {

    document.body.innerHTML = `
        <h1>❤️ Eu sabia que você aceitaria! ❤️</h1>
        <img src="./img/meme-fofo.gif">
    `;
  }
