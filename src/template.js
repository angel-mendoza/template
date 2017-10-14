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
        </div>
      </div>
    </div>
  </div>`
}
const Sass = ()=>{
   return `<h1 id="title">Sass</h1>`
}
const Components = ()=>{
   return `<h1 id="title">Components</h1>`
}
export default {home, Sass, Components}
