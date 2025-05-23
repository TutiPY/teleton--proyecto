input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
})
