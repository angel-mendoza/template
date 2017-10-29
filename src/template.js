const home = ()=>{
   return `<div id="main">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 main-img">
          <img class="responsive-img" src="img/rocket.png" alt="web-development">
        </div>
        <div class="col s12 m6 center-align main-text">
          <h1 id="title">Programador</h1>
          <div class="divider"></div>
          <h2 id="sub-title">Mi trabajo es materializar tus proyectos utilizando la tecnologia.</h2>
          <a class="waves-effect waves-light btn btn-ornage"><i class="fa fa-envelope-o"></i>Contacto</a>
        </div>
      </div>
    </div>
  </div>`
}
const Sass = ()=>{
   return `<div class="homepage-hero-module">
    <div class="video-container">
        <div class="filter"></div>
        <video autoplay loop class="fillWidth">
            <source src="video/MP4/Aloha-Mundo.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="video/WEBM/Aloha-Mundo.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
        <div class="poster hidden">
            <img src="img/Aloha-Mundo.jpg" alt="Home banner">
        </div>
    </div>
</div>`
}
const Components = ()=>{
   return `<h1 id="title">Components</h1>`
}


export default {home, Sass, Components}
