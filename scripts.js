// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  var audioPlayer = document.getElementById('audio-player');
  var listaCanciones = document.querySelectorAll('#lista-canciones li');
  var nombreCancionActual = document.getElementById('nombre-cancion-actual');
  var botonSiguiente = document.getElementById('boton-siguiente');
  var botonAnterior = document.getElementById('boton-anterior');
  var indiceActual = 0; // Mantén un registro del índice de la canción actual
  var botonAleatorio = document.getElementById('boton-aleatorio');

  botonAleatorio.addEventListener('click', function () {
    var indiceAleatorio = Math.floor(Math.random() * listaCanciones.length);
    reproducirIndice(indiceAleatorio);
  });

  function reproducirIndice(indice) {
    // Si el índice es mayor o igual que la longitud de la lista, reinicia al principio
    if (indice >= listaCanciones.length) {
      indice = 0;
    }
    var cancionSeleccionada = listaCanciones[indice];
    audioPlayer.src = 'canciones/' + cancionSeleccionada.textContent;
    audioPlayer.play();
    nombreCancionActual.textContent = cancionSeleccionada.textContent; // Actualiza el nombre de la canción actual
    indiceActual = indice; // Actualiza el índice actual con el nuevo índice
  }


  botonSiguiente.addEventListener('click', function () {
    var siguienteIndice = indiceActual + 1;
    if (siguienteIndice >= listaCanciones.length) siguienteIndice = 0; // Vuelve a la primera canción si es la última
    reproducirIndice(siguienteIndice);
  });

  botonAnterior.addEventListener('click', function () {
    var anteriorIndice = indiceActual - 1;
    if (anteriorIndice < 0) anteriorIndice = listaCanciones.length - 1; // Va a la última canción si es la primera
    reproducirIndice(anteriorIndice);
  });

  listaCanciones.forEach(function (cancion, indice) {
    cancion.addEventListener('click', function () {
      reproducirIndice(indice);
    });
  });

  audioPlayer.addEventListener('ended', function () {
    var siguienteIndice = indiceActual + 1;
    reproducirIndice(siguienteIndice);
  });

  // Añade aquí más controladores de eventos para otros botones
});


// Supongamos que tienes un array con los nombres de tus canciones
var nombresCanciones = [
  "001. Led Zeppelin - Stairway to Heaven.mp3",
  "002. Scorpions - Wind Of Change.mp3",
  "003. Guns N' Roses - November Rain.mp3",
  "004. Bon Jovi - You Give Love A Bad Name.mp3",
  "005. Kings of Leon - Sex on Fire.mp3",
  "006. AC-DC - You Shook Me All Night Long.mp3",
  "007. Scorpions - Still Loving You.mp3",
  "008. Guns N' Roses - Don't Cry (Original).mp3",
  "009. ZZ Top - Gimme All Your Lovin'.mp3",
  "010. Bon Jovi - Always.mp3",
  "011. Aerosmith - Crazy.mp3",
  "012. Pink Floyd - Wish You Were Here (2011 Remastered Version).mp3",
  "013. Scorpions - Send Me An Angel.mp3",
  "014. Survivor - Burning Heart (From _Rocky IV_ Soundtrack).mp3",
  "015. Bon Jovi - Runaway.mp3",
  "016. Bon Jovi - Bed Of Roses.mp3",
  "017. Free - All Right Now.mp3",
  "018. Cream - Sunshine Of Your Love.mp3",
  "019. Bruce Springsteen - Dancing In the Dark.mp3",
  "020. The Rolling Stones - Angie.mp3",
  "021. Toto - Rosanna.mp3",
  "022. Led Zeppelin - Thank You (Remaster).mp3",
  "023. REO Speedwagon - Can't Fight This Feeling.mp3",
  "024. Van Halen - Can't Stop Lovin' You.mp3",
  "025. KISS - Forever.mp3",
  "026. Heart - Alone.mp3",
  "027. Deep Purple - Perfect Strangers.mp3",
  "028. Queen - Under Pressure (Remastered).mp3",
  "029. Bon Jovi - This Ain't A Love Song.mp3",
  "030. The Police - Every Breath You Take (Remastered 2003).mp3",
  "031. Aerosmith - Fly Away From Here.mp3",
  "032. The Beatles - Yesterday (Remastered 2009).mp3",
  "033. Journey - Open Arms.mp3",
  "034. Aerosmith - Janie's Got A Gun.mp3",
  "035. Boston - Amanda.mp3",
  "036. Supertramp - Give A Little Bit.mp3",
  "037. Foreigner - I Want to Know What Love Is (1999 Remaster).mp3",
  "038. Journey - Separate Ways (Worlds Apart).mp3",
  "039. Rainbow - Since You Been Gone.mp3",
  "040. Ozzy Osbourne - No More Tears.mp3",
  "041. Toto - Stop Loving You.mp3",
  "042. Survivor - The Search Is Over.mp3",
  "043. Europe - Carrie.mp3",
  "044. Bryan Adams - Do I Have To Say The Words_.mp3",
  "045. Heart - All I Wanna Do Is Make Love To You.mp3",
  "046. Led Zeppelin - Tangerine (2012 Remaster).mp3",
  "047. Foreigner - Waiting for a Girl like You.mp3",
  "048. Foreigner - Urgent.mp3",
  "049. Aerosmith - Falling In Love (Is Hard On The Knees).mp3",
  "050. Def Leppard - When Love & Hate Collide.mp3",
  "051. Led Zeppelin - All My Love (Remaster).mp3",
  "052. Journey - Faithfully.mp3",
  "053. Judas Priest - Angel.mp3",
  "054. Led Zeppelin - Babe I'm Gonna Leave You (Remaster).mp3",
  "055. Motley Cre - Too Young To Fall In Love.mp3",
  "056. Rainbow - Can't Let You Go.mp3",
  "057. REO Speedwagon - Keep on Loving You.mp3",
  "058. Aerosmith - What Could Have Been Love.mp3",
  "059. Foreigner - Cold as Ice.mp3",
  "060. KISS - I Was Made For Lovin' You.mp3",
  "061. Aerosmith - I Don't Want to Miss a Thing.mp3",
  "062. Steelheart - She's Gone.mp3",
  "063. Journey - Ask the Lonely.mp3",
  "064. Survivor - Feels Like Love.mp3",
  "065. Bryan Adams - All For Love.mp3",
  "066. Whitesnake - Is This Love (2018 Remaster).mp3",
  "067. Aerosmith - Sunshine.mp3",
  "068. Deep Purple - All I Got Is You.mp3",
  "069. Foreigner - Feels like the First Time (2008 Remaster).mp3",
  "070. Toto - Afraid of Love.mp3",
  "071. Rainbow - Rainbow Eyes.mp3",
  "072. Rainbow - Street Of Dreams.mp3",
  "073. Foreigner - Girl on the Moon.mp3",
  "074. Deep Purple - Woman From Tokyo (Remastered 2000).mp3",
  "075. Black Sabbath - Walk Away (2009 Remaster).mp3",
  "076. Whitesnake - Fool for Your Loving (2011 Remaster).mp3",
  "077. Dokken - Alone Again.mp3",
  "078. Led Zeppelin - Out on the Tiles (2012 Remaster).mp3",
  "079. Foreigner - That Was Yesterday.mp3",
  "080. Journey - Stone in Love.mp3",
  "081. Foreigner - Say You Will.mp3",
  "082. Aerosmith - Beyond Beautiful.mp3",
  "083. Rainbow - Stone Cold.mp3",
  "084. Survivor - Ever Since the World Began.mp3",
  "085. Whitesnake - The Deeper the Love.mp3",
  "086. Foreigner - Head Games.mp3",
  "087. Survivor - High on You.mp3",
  "088. Rainbow - Do You Close Your Eyes.mp3",
  "089. Aerosmith - Can't Stop Lovin' You.mp3",
  "090. Styx - Lady.mp3",
  "091. Foreigner - I Don't Want to Live Without You.mp3",
  "092. Foreigner - Heart Turns to Stone.mp3",
  "093. Survivor - How Much Love.mp3",
  "094. Rainbow - Jealous Lover.mp3",
  "095. Europe - Open Your Heart.mp3",
  "096. Blue Oyster Cult - In Thee.mp3",
  "097. Russ Ballard - The Omen.mp3",
  "098. Stevie Ray Vaughan - Pride And Joy.mp3",
  "099. Boston - More Than A Feeling.mp3",
  "100. Rainbow - Desperate Heart.mp3"

  // ... más nombres de canciones
];

// Función para generar la lista de canciones en el HTML
function generarListaCanciones(nombresCanciones) {
  var listaCanciones = document.getElementById('lista-canciones');
  nombresCanciones.forEach(function (nombreCancion) {
    var li = document.createElement('li');
    li.textContent = nombreCancion;
    listaCanciones.appendChild(li);
  });
}

// Llamar a la función para generar la lista
generarListaCanciones(nombresCanciones);

// scripts.js


// Resto del código...

botonAleatorio.addEventListener('click', function () {
  var indiceAleatorio = Math.floor(Math.random() * listaCanciones.length);
  reproducirIndice(indiceAleatorio);
});
