const valueR = document.querySelector('#input-r')
const valueG = document.querySelector('#input-g')
const valueB = document.querySelector('#input-b')
const valueRGB = document.querySelector('.input-rgb')
const valueHex = document.querySelector('#value-hex')
const colorBoxR = document.querySelector('#box-r')
const colorBoxG = document.querySelector('#box-g')
const colorBoxB = document.querySelector('#box-b')
const colorBoxHex = document.querySelector('.hexbox')
const convertBtn = document.querySelector('.convert-btn')

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0').toUpperCase()


//----- Listener -----//
convertBtn.addEventListener('click', event => {
  if (Number(valueR.value) < 0 || Number(valueR.value) > 255 || isNaN(valueR.value)) {
    alert('please enter number 0-255')
  } else {
    return switchToHex()
  }
})
valueR.addEventListener('input', event => {
  switchRedBox()
})
valueG.addEventListener('input', event => {
  switchGreenBox()
})
valueB.addEventListener('input', event => {
  switchBlueBox()
})


//----- Function -----//
function switchToHex() {
  let r = Number(valueR.value)
  let g = Number(valueG.value)
  let b = Number(valueB.value)

  // 輸出HEX值
  let textContent = `#${RGBToHex(r, g, b)}`
  valueHex.innerText = textContent

  // Hex值方塊顏色
  colorBoxHex.style.backgroundColor = valueHex.innerText
}

function switchRedBox() {
  let r = Number(valueR.value)
  let g = 0
  let b = 0
  colorBoxR.style.backgroundColor = `#${RGBToHex(r, g, b)}`
}

function switchGreenBox() {
  let r = 0
  let g = Number(valueG.value)
  let b = 0
  colorBoxG.style.backgroundColor = `#${RGBToHex(r, g, b)}`
}

function switchBlueBox() {
  let r = 0
  let g = 0
  let b = Number(valueB.value)
  colorBoxB.style.backgroundColor = `#${RGBToHex(r, g, b)}`
}
