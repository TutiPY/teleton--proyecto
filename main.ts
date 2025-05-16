input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        music.play(music.stringPlayable("E D E C G E F D ", 300), music.PlaybackMode.UntilDone)
        basic.pause(100)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        music.play(music.stringPlayable("- B C5 B G B G C5 ", 300), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        music.play(music.stringPlayable("E D E C G E F D ", 300), music.PlaybackMode.UntilDone)
        basic.pause(100)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        music.play(music.stringPlayable("- B C5 B G B G C5 ", 300), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
})
