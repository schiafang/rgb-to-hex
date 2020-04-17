const valueR = document.querySelector('#input-r')
const valueG = document.querySelector('#input-g')
const valueB = document.querySelector('#input-b')
const valueHex = document.querySelector('#value-hex')
const colorBoxR = document.querySelector('#box-r')
const colorBoxG = document.querySelector('#box-g')
const colorBoxB = document.querySelector('#box-b')
const colorBoxHex = document.querySelector('.hexbox')
const convertBtn = document.querySelector('.convert-btn')

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0').toUpperCase()

//-------------------------- Form Version --------------------------//
//輸入框數值RGB轉換成Hex
function switchToHex() {
  let r = Number(valueR.value)
  let g = Number(valueG.value)
  let b = Number(valueB.value)
  let textContent = `#${RGBToHex(r, g, b)}`
  valueHex.innerText = textContent
  colorBoxHex.style.backgroundColor = valueHex.innerText
}
//轉換R預覽顏色
function switchRedBox() {
  colorBoxR.style.backgroundColor = `#${RGBToHex(Number(valueR.value), 0, 0)}`
}
//轉換G預覽顏色
function switchGreenBox() {
  colorBoxG.style.backgroundColor = `#${RGBToHex(0, Number(valueG.value), 0)}`
}
//轉換B預覽顏色
function switchBlueBox() {
  colorBoxB.style.backgroundColor = `#${RGBToHex(0, 0, Number(valueB.value))}`
}
//input數值限制並且不為空值
function valueRange() {
  if ((Number(valueR.value) < 0 || Number(valueR.value) > 255 || (valueR.value) === '')
    || (Number(valueG.value) < 0 || Number(valueG.value) > 255 || (valueG.value) === '')
    || (Number(valueB.value) < 0 || Number(valueB.value) > 255 || (valueB.value) === '')) {
    alert('please enter number 0-255')
  }
}
//----------- Form Handler ----------//
//監控convert按鈕
convertBtn.addEventListener('click', event => {
  valueRange()

  return switchToHex()
})
//監控input數值填完後任意三格enter鍵直接convert
valueR.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    valueRange()

    return switchToHex()
  }
})
valueG.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    valueRange()

    return switchToHex()
  }
})
valueB.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    valueRange()

    return switchToHex()
  }
})
//監控輸入值不在0-255狀況，並即時預覽R.G.B.顏色
valueR.addEventListener('input', event => {
  if (Number(valueR.value) < 0 || Number(valueR.value) > 255) { alert('please enter number 0-255') }
  switchRedBox()
})
valueG.addEventListener('input', event => {
  if (Number(valueG.value) < 0 || Number(valueG.value) > 255) { alert('please enter number 0-255') }
  switchGreenBox()
})
valueB.addEventListener('input', event => {
  if (Number(valueB.value) < 0 || Number(valueB.value) > 255) { alert('please enter number 0-255') }
  switchBlueBox()
})
//-------------------------- Slider Version --------------------------//
const sliderR = document.querySelector('.slider-r')
const sliderG = document.querySelector('.slider-g')
const sliderB = document.querySelector('.slider-b')
const outputR = document.querySelector('.slider-value-r')
const outputG = document.querySelector('.slider-value-g')
const outputB = document.querySelector('.slider-value-b')
// 轉換hex碼
function switchToHexSlider() {
  let r = Number(sliderR.value)
  let g = Number(sliderG.value)
  let b = Number(sliderB.value)
  let hexValue = `#${RGBToHex(r, g, b)}`
  document.querySelector('.slider-hex-value').innerText = hexValue
  document.querySelector('.container-slider').style.backgroundColor = hexValue

  return hexValue
}
// 轉換預覽顏色
function switchRedSlider(value) {
  value = `#${RGBToHex(value, 0, 0)}`

  return value
}
function switchGreenSlider(value) {
  value = `#${RGBToHex(0, value, 0)}`

  return value
}
function switchBlueSlider(value) {
  value = `#${RGBToHex(0, 0, value)}`

  return value
}
// 即時更新顏色
outputR.innerText = sliderR.value
sliderR.oninput = function () {
  outputR.innerText = this.value
  switchToHexSlider()
  outputR.style.color = switchRedSlider(Number(this.value))
}
outputG.innerText = sliderG.value
sliderG.oninput = function () {
  outputG.innerText = this.value
  switchToHexSlider()
  outputG.style.color = switchGreenSlider(Number(this.value))
}
outputB.innerText = sliderB.value
sliderB.oninput = function () {
  outputB.innerText = this.value
  switchToHexSlider()
  outputB.style.color = switchBlueSlider(Number(this.value))
}