function func () {
	console.log(this)
}
func.call()
func.call(null)
func.call(undefined)
