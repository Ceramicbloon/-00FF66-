var hr
var mn
var sc
var scA
var mnA
var hrA

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES)

}

function draw() {
    background(0);
    noFill()
    text(sc, 200, 200)
    console.log(sc)
    hr = hour()
    mn = minute()
    sc = second();

    translate(200, 200);
    rotate(-90)

    //second
    strokeWeight(10)
    stroke("#FF3300")
    scA = map(sc, 0, 60, 0, 360)
    arc(0, 0, 300, 300, 0, scA)

    //minute
    strokeWeight(10)
    stroke("#00FF66")
    mnA = map(mn, 0, 60, 0, 360)
    arc(0, 0, 280, 280, 0, mnA)

    //hour
    strokeWeight(10)
    stroke("#00FFFF")
    hrA = map(hr, 0, 12, 0, 360)
    arc(0, 0, 260, 260, 0, hrA)


    //second
    push()
    rotate(scA)
    stroke(255, 0, 0)
    strokeWeight(7)
    line(0, 0, 80, 0)
    pop()

    //minute
    push()
    rotate(mnA)
    stroke("#00FF66")
    strokeWeight(7)
    line(0, 0, 70, 0)
    pop()

    //hour
    push()
    rotate(hrA)
    strokeWeight(7)
    stroke("#00FFFF")
    line(0, 0, 50, 0)
    pop()
    drawSprites();
    // console.log(mn)
}