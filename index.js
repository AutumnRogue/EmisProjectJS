let rowData = []
let headerTime = document.getElementById('headerTime')
let minutes = 20
let gridArray =[]
let nameInput = ''
let reasonInput = ''
let notesInput = ''

headerTime.addEventListener('keypress',(e)=>{
    if(e.code === 'Enter'){
    minutes = Number(document.getElementById('headerTime').value)
    headerTime.value = ''

    //forloop to pop goes here
    document.getElementById('myGrid').innerHTML =''

   makeGrid()

}});

// ///Context Menu//////

const contextMenu = document.querySelector(".contextMenu")

const showContextMenu=(show = true)=>{
 contextMenu.style.display = show ? 'block' : 'none';
}

window.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    // console.log("right")
    showContextMenu()
    console.log(e.y , e.x)
    console.log(this)
    contextMenu.style.top = e.clientY + "px"  +contextMenu.offsetHeight > window.innerHeight ?window.innerHeight - contextMenu.offsetHeight : e.y + "px";
    contextMenu.style.left = e.clientX + "px" +contextMenu.offsetWidth > window.innerWidth ? window.innerWidth - contextMenu.offsetWidth : e.x + "px"; 
})

window.addEventListener('click', ()=>{
    showContextMenu(false)
})

const cancelItem = document.getElementById("cancelItem")

cancelItem.addEventListener("click", ()=>{
    //Delete info in selected div
})



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
    //    nameRow.id = `nameRowID${i}${h}`
       let reasonRow = document.createElement('div')
       reasonRow.innerHTML = `${reasonInput}`
       reasonRow.className = 'rowSpacing'
    //    reasonRow.id = `reasonRowID${i}${h}`
       let notesRow = document.createElement('div')
       notesRow.innerHTML = `${notesInput}` 
       notesRow.className = 'rowSpacing' 
    //    notesRow.id = `notesRowID${i}${h}`
        let row = document.createElement('div')
        row.className = "rowClass"
        row.appendChild(timeRow)
        row.appendChild(nameRow)
        row.appendChild(reasonRow)
        row.appendChild(notesRow)
        let div = document.createElement("div")
        div.id = `${i}:${h}`
        //popup command 
        div.ondblclick = () => {
            console.log(div)
            document.getElementById('myModal').style.visibility = 'visible'
            

            document.getElementById('submitButton').addEventListener('click',()=>{
                console.log('test')
                modal.style.visibility = "hidden"
                let firstname = document.getElementById('firstname').value
                let surname = document.getElementById('surname').value
                let reason = document.getElementById('reason').value
                let notes = document.getElementById('notes').value

                // console.log(div.innerHTML)

              
                

                // document.getElementById(`nameRowID${i}${h}`).innerHTML = `${surname},${firstname}`
                // document.getElementById(`reasonRowID${i}${h}`).innerHTML = reason
                // document.getElementById(`notesRowID${i}${h}`).innerHTML = notes

                div.innerHTML = `<div class="rowClass"><div class="rowSpacing">${div.id}</div><div class="rowSpacing">${firstname + ' ' + surname}</div><div class="rowSpacing">${reason}</div><div class="rowSpacing">${notes}</div></div>`

                firstname.value = ''
                surname.value = ''
                reason.value = ''
                notes.value = ''
            //   console.log(div.id)
            })
          



        }


        div.appendChild(row)
        document.getElementById("myGrid").appendChild(div)
        // row.id= `row${i}`
        rowData.push(row)
        // console.log("working")
        if(h=='00'){
            h=0
        }else if(h=='05'){
            h=5
        }
        
    }
}
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.visibility = "hidden";
  }



  let updateGrid = () => {

  }