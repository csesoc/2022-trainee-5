function revealSelfie () {
  const selfie = document.getElementById('selfie')

  if (selfie.style.display === 'none') {
    selfie.style.display = 'block'
    console.log('Selfie is now visible! 😸')
  } else {
    selfie.style.display = 'none'
    console.log('Selfie is hidden! 😿')
  }

  emojisplosion({
    container: document.getElementById('container')
  })
}
