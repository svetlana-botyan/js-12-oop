// 1
class Logo {
  body = document.querySelector('body')

  constructor(url) {
    this.top = 0
    this.left = 0
    this.width = 200
    this.imgUrl = url
    this.html = null
  }

  init() {
    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', this.imgUrl)
    imgElement.setAttribute('alt', 'img')

    this.html = imgElement
    this.render()

    this.body.style.backgroundColor = 'black'
  }

  render() {
    this.body.append(this.html)
    this.html.setAttribute(
      'style',
      `position: fixed; top:${this.top}px;left:${this.left}px;
       width:${this.width}px`
    )
  }

  moveUp() {
    this.top += -20
    this.render()
  }

  moveDown() {
    this.top += 20
    this.render()
  }

  moveLeft() {
    this.left += -20
    this.render()
  }

  moveRight() {
    this.left += 20
    this.render()
  }
}

const imgUrl = 'https://bit.ly/2tcDito'
var mfLogotip = new Logo(imgUrl)
console.log(mfLogotip)

mfLogotip.init()

mfLogotip.moveUp()
mfLogotip.moveLeft()
mfLogotip.moveLeft()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveUp()
mfLogotip.moveUp()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()

/* 2.  Написать класс Circle, которые принимает аргументы size (ширина и 
    высота фигуры), color (цвет фигуры). При вызове метода render() из 
    экземпляра класса Circle должен отрисовать круг с заданными стилями. */

class Circle {
  constructor(diameter, color) {
    this.diameter = diameter
    this.color = color
    this.render()
  }

  render() {
    const template = this.createTemplate()
    document.body.innerHTML += template
  }

  createTemplate() {
    return `
      <div style="
         width:${this.diameter}px;
         height:${this.diameter}px;
         border-radius: 50%;
         background-color:${this.color};">
       </div>
       `
  }
}

const circle = new Circle(150, 'red')
