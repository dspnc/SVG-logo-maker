class Circle{
    constructor(text, textcolor, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    setColor(color){
        this.shapecolor = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapecolor}" />`
    }

    renderText(){
       return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="5em" fill="${this.textcolor}">${this.text}</text>`
    }

    generateSVG() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          ${this.render()}
          ${this.renderText()}
        </svg>
        `
    }

}

class Triangle{
    constructor(text, textcolor, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    setColor(color){
        this.shapecolor = color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
    }

    renderText(){
        return `<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="2em" fill="${this.textcolor}">${this.text}</text>`
    }

    generateSVG() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          ${this.render()}
          ${this.renderText()}
        </svg>
        `
    }

}

class Square{
    constructor(text, textcolor, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    setColor(color){
        this.shapecolor = color;
    }

    render() {
        return `<rect width="200" height="200" fill="${this.shapecolor}" />`   
    }

    renderText(){
        return `<text x="33%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="5em" fill="${this.textcolor}">${this.text}</text>`
    }

    generateSVG() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          ${this.render()}
          ${this.renderText()}
        </svg>
        `
    }

}

module.exports = {Circle, Triangle, Square}