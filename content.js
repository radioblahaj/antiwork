// var content = document.getElementsByTagName('p')
// content.remove()
const delay = 5000
function delete_Elements(tag) {

var content = document.getElementsByTagName(tag)
for (let elem = 0; elem < content.length; elem++) {
    setTimeout(() => {
        content[elem].remove()
    }, delay * (elem + 1))
}
console.log(content)
}
delete_Elements("h1")
delete_Elements("h1")
delete_Elements("h2")
delete_Elements("h3")
delete_Elements("h4")
delete_Elements("h5")
delete_Elements("h6")
delete_Elements("p")
delete_Elements("span")
delete_Elements("article")
delete_Elements("a")
delete_Elements("img")
