
const textValue = document.getElementById("text")
const btn = document.getElementById("btn")
const word = document.getElementById("word")
const character = document.querySelector(".char")
const words = document.querySelector(".words")
const cap = document.getElementById("cap")

function textInput() {
    textValue.addEventListener("input", () => {
        let val = textValue.value
        let trim = val.trim()
        character.innerHTML = trim.length + " Characters"
        let wordSplit = trim.split(" ")
        let clean = wordSplit.filter((c) => {
            return c != ""
        })
        words.innerHTML = clean.length + " Words"
    })

}
textInput()
btn.addEventListener("click", (e) => {
    e.preventDefault()
    textValue.value = ""
})
cap.addEventListener("click", (e) => {
    e.preventDefault()
    let item = textValue.value.toUpperCase()
    textValue.value = item
})
