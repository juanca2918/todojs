const textadd = document.getElementById('textadd')
const btnadd = document.getElementById('btnadd')
const root = document.getElementById('root')
const listItem = []

textadd.addEventListener("keypress",(e) => {
  if (e.key === 'Enter') {
    addItem(textadd.value)
  }
})

btnadd.addEventListener("click",() => {
  addItem(btnadd.value)
})

//toDo Crea el elemento en el DOM
function addItem(item) {
  listItem.push(item)
  console.log(listItem);
  root.innerHTML+= createTask(listItem)
}

//Crea el elemento Card
function createTask(task) {
  return(
  `
  <div class="card">
  <p>${task}</p>
  </div>
  `
  )} 

/* const deleteItem = (cb) => {
  cb(() => {
    
  })
} */

  /* Array.from({ length: cantidadepisodios.info.count }, (_,index) => createOption(index+1)).join("") */