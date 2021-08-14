let seleniumAjax = {
  active: null
}

window.addEventListener('message', function (e) {
  if (e.data.type === 'seleniumAjax') {
    seleniumAjax.active += e.data.params.active
    // console.log(seleniumAjax)
  }
})
