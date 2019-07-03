let rowData = []
let headerTime = document.getElementById('headerTime')
let minutes = 20
let gridArray =[]
let nameInput
let reasonInput
let notesInput
headerTime.addEventListener('keypress',(e)=>{
    if(e.code === 'Enter'){
    minutes = Number(document.getElementById('headerTime').value)

    //forloop to pop goes here

   makeGrid()

}});


const makeGrid=()=>{
   
for(i=9;i<17;i++){
    for(h=0;h<60;h+=minutes){
        if(h==0){
            h='00'
        } else if(h==5){
            h='05'
        }
       let timeRow = document.createElement('div')
       timeRow.innerHTML = `${i+':'+h}`
       timeRow.className = 'rowSpacing'
       let nameRow = document.createElement('div')
       nameRow.innerHTML = `${nameInput}`
       nameRow.className ='rowSpacing'
       let reasonRow = document.createElement('div')
       reasonRow.innerHTML = `${reasonInput}`
       reasonRow.className = 'rowSpacing'
       let notesRow = document.createElement('div')
       notesRow.innerHTML = `${notesInput}` 
       notesRow.className = 'rowSpacing' 
        let row = document.createElement('div')
        row.className = "rowClass"
        row.appendChild(timeRow)
        row.appendChild(nameRow)
        row.appendChild(reasonRow)
        row.appendChild(notesRow)
        let div = document.createElement("div")
        div.id = `id${i}${h}`
        div.appendChild(row)
        document.getElementById("myGrid").appendChild(div)
        // row.id= `row${i}`
        rowData.push(row)
        console.log("working")
        if(h=='00'){
            h=0
        }else if(h=='05'){
            h=5
        }
        
    }
}
}
