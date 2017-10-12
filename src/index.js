class web {
  constructor(body, navbar) {
    this.body = body
    this.nav = navbar
  }
  onClick(){
    $(".nav-element").click(()=>{
      let conten = $(".nav-element").val()
      alert(conten)
    })
  }
}

$(".nav-element").click(()=>{
  let conten = $("nav-element").html()
  alert(conten)
})
