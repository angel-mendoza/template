import  contenido  from './template'
let title = require('title')

class Template {
  constructor() {
    this.body = contenido.home
    this.title = 'Development'
    this.onClick()
    this.render()
  }
  onClick(){
    $(".nav-element").on('click', (event)=>{
      let conten = $(event.currentTarget).data('href')
      this.body = contenido. +conten
      this.title = conten
      this.render()
    })
  }
  render(){
    $('.body-container').html(this.body)
    title(this.title)
  }
}

new Template()
