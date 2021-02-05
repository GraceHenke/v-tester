led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
})
