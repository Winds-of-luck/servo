input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    servos.P0.setAngle(0)
    basic.showNumber(0)
    basic.pause(500)
    servos.P0.setAngle(90)
    basic.showNumber(90)
    basic.pause(500)
    servos.P0.setAngle(180)
    basic.showNumber(180)
    servos.P0.stop()
})
basic.showString("servo time", 65)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
