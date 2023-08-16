function toggleMode() {
  const html = document.documentElement
  // função propria do javascript para toggle
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode add imagem light
    // seleciona o atributo e aponta o novo valor
    img.setAttribute('src', 'assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    // seleciona o atributo e aponta o novo valor
    img.setAttribute('src', 'assets/avatar.png')
  }
}
