seleniumAjax = {
  active: null
}

document.addEventListener('seleniumAjax', function (e) {
  seleniumAjax.active += e.detail.active
  console.log(seleniumAjax);
});
