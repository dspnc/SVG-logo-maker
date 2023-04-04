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
        return `<!DOCTYPE html>
        <html>
        <body>
        
        <svg width="300" height="200">
          ${this.render()}
          ${this.renderText()}
        </svg>
        
        </body>
        </html>
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
        return `<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="3em" fill="${this.textcolor}">${this.text}</text>`
    }

    generateSVG() {
        return `<!DOCTYPE html>
        <html>
        <body>
        
        <svg width="300" height="200">
          ${this.render()}
          ${this.renderText()}
        </svg>
        
        </body>
        </html>
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
        return `<!DOCTYPE html>
        <html>
        <body>
        
        <svg width="300" height="200">
          ${this.render()}
          ${this.renderText()}
        </svg>
        
        </body>
        </html>
        `
    }

}

module.exports = {Circle, Triangle, Square}