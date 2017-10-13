class web {
  constructor() {
    this.onClick()
    this.body =  `<div id="main">
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
    this.render()
  }
  onClick(){
    $(".nav-element").on('click', (event)=>{
      let conten = $(event.currentTarget).data('href')
      alert(conten)
      this.body = ''
      this.render()
    })
  }
  render(){
    $('.body-container').html(this.body) 
  }
}

new web()
