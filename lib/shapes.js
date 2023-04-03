class Shape {
    constructor(text, textcolor, shape, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
}

class Circle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor)
    }

    render() {

    }
}

class Triangle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor)
    }

    render() {
        
    }
}

class Square extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor)
    }

    render() {
        
    }
}

module.exports = {Shape, Circle, Triangle, Square}