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

//--------------- Function ---------------//
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
  let r = Number(valueR.value)
  let g = 0
  let b = 0
  colorBoxR.style.backgroundColor = `#${RGBToHex(r, g, b)}`
}
//轉換G預覽顏色
function switchGreenBox() {
  let r = 0
  let g = Number(valueG.value)
  let b = 0
  colorBoxG.style.backgroundColor = `#${RGBToHex(r, g, b)}`
}
//轉換B預覽顏色
function switchBlueBox() {
  let r = 0
  let g = 0
  let b = Number(valueB.value)
  colorBoxB.style.backgroundColor = `#${RGBToHex(r, g, b)}`
}
//input數值限制並且不為空值
function valueRange() {
  if ((Number(valueR.value) < 0 || Number(valueR.value) > 255 || (valueR.value) === '')
    || (Number(valueG.value) < 0 || Number(valueG.value) > 255 || (valueG.value) === '')
    || (Number(valueB.value) < 0 || Number(valueB.value) > 255 || (valueB.value) === '')) {
    alert('please enter number 0-255')
  }
}
//--------------- Handler ---------------//
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
