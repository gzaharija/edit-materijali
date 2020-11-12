document.body.style.background = 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)';
document.querySelector("canvas").style = 'border-radius: 0.5em;'
document.querySelector("main").style = 'max-width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;'

function crtajSliku(sirinaSlike, slika){
  let el = document.querySelector("#slika");
  let grafika = el.getContext("2d");
  let brStupaca = slika.length
  let rezolucija = Math.pow(brStupaca,2)
  let velPiksela = sirinaSlike / brStupaca;
  
  let i, x, y = -1;

  el.width = sirinaSlike;
  el.height = sirinaSlike;

  for (i = 0; i < rezolucija; i++) {
    x++;
    if (i % brStupaca == 0) {
      y++;
      x = 0;
    }
    grafika.beginPath();
    grafika.rect(x * velPiksela, y * velPiksela, velPiksela, velPiksela);
    grafika.fillStyle = slika[y][x]
    grafika.fill();
  }

}
