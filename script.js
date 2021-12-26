function newElement () {
    const value = document.querySelector('#input').value
    const list = document.querySelector('#list')
    const li = document.createElement('li') // <li></li> element created
    li.textContent = value // now there is content to go in list
    list.appendChild(li) // appends text to li element
}