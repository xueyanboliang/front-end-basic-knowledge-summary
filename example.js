function func (a, b) {
	console.log(arguments.callee)
}
func(1, 2)