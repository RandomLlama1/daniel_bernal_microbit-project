let num = randint(1, 20)
let chance2 = randint(1, 2)
let chance = randint(1, 3)
while (true) {
    basic.showNumber(num)
    input.onButtonPressed(Button.A, function on_button_pressed_a(): number {
        basic.clearScreen()
        basic.pause(10)
        
        
        if (chance2 == 1) {
            num = num - 2
            return num
        } else {
            num = num - 4
            return num
        }
        
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b(): number {
        basic.clearScreen()
        basic.pause(10)
        
        
        if (chance2 == 1) {
            num = num - 1
            return num
        } else {
            num = num - 2
            return num
        }
        
    })
    input.onButtonPressed(Button.AB, function on_button_pressed_ab(): number {
        basic.clearScreen()
        basic.pause(10)
        
        
        if (chance == 1) {
            num = num - 10
            return num
        } else if (chance == 2) {
            num = num - 5
            return num
        } else {
            num = num + 20
            return num
        }
        
    })
    if (num == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        break
    }
    
    if (num < 0) {
        basic.clearScreen()
        basic.showString("X")
        break
    }
    
}
