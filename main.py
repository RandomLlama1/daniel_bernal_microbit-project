num = randint(1,20)
chance2 = randint(1,2)
chance = randint(1,3)

def on_button_pressed_ab():
    basic.clear_screen()
    basic.pause(10)
    global num
    global chance
    if chance == 1:
        num = num - 10
        return num
    elif chance == 2:
        num = num - 5
        return num
    else: 
        num = num + 20
        return num
 
def on_button_pressed_a():
    basic.clear_screen()
    basic.pause(10)
    global num
    global chance2
    if chance2 == 1:
        num = num-2
        return num
    else:
        num = num-4
        return num
 
def on_button_pressed_b():
    basic.clear_screen()
    basic.pause(10)
    global num
    global chance2
    if chance2 == 1:
        num = num-1
        return num
    else:
        num = num-2
        return num
 
 
 
while True:
    basic.show_number(num)
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    input.on_button_pressed(Button.AB, on_button_pressed_ab)
    if num == 0:
        basic.clear_screen()
        basic.show_icon(IconNames.HEART)
        break
    if num < 0:
        basic.clear_screen()
        basic.show_string("X")
        break
 
 
 

