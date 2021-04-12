let Sum = 0
let list = [5, 8, 19, 23, 46, 53, 68, 79, 84, 95]
for (let index = 0; index <= list.length - 1; index++) {
    serial.writeValue("index", index)
    serial.writeValue("list", list[index])
}
for (let index = 0; index <= list.length - 1; index++) {
    Sum += list[index]
}
serial.writeValue("Sum", Sum)
basic.forever(function () {
	
})
