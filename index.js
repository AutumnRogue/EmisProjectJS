let rowData = []
let headerTime = document.getElementById('headerTime')
let minutes = 20
let gridArray =[]
let nameInput = ''
let reasonInput = ''
let notesInput = ''

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

headerTime.addEventListener('keypress',(e)=>{
    if(e.code === 'Enter'){
    minutes = Number(document.getElementById('headerTime').value)
    headerTime.value = ''

    //forloop to pop goes here
    document.getElementById('myGrid').innerHTML =''

   makeGrid()

}});

function createRow({id, firstname, surname, reason, notes}) {
    let timeRow = document.createElement('div')
    timeRow.innerHTML = id
    timeRow.className = 'rowSpacing'
    let nameRow = document.createElement('div')
    nameRow.innerHTML = `${firstname+' '+surname}`
    nameRow.className ='rowSpacing'
 //    nameRow.id = `nameRowID${i}${h}`
    let reasonRow = document.createElement('div')
    reasonRow.innerHTML = `${reason}`
    reasonRow.className = 'rowSpacing'
 //    reasonRow.id = `reasonRowID${i}${h}`
    let notesRow = document.createElement('div')
    notesRow.innerHTML = `${notes}` 
    notesRow.className = 'rowSpacing' 
 //    notesRow.id = `notesRowID${i}${h}`
     let row = document.createElement('div')
     row.className = "rowClass"

     
     row.appendChild(timeRow)
     row.appendChild(nameRow)
     row.appendChild(reasonRow)
     row.appendChild(notesRow)
     return row
}

const makeGrid=()=>{
   
for(i=9;i<17;i++){
    for(h=0;h<60;h+=minutes){
        if(h==0){
            h='00'
        } else if(h==5){
            h='05'
        }
        let row = createRow({id: `${i+':'+h}`, firstname: '', surname: '', reason: '', notes: ''});
   
        let div = document.createElement("div")
        div.id = `${i}:${h}`
        //popup command 

        try {
            div.ondblclick = thing

        } catch(e) {
            console.log('adhgsauhj')
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



span.onclick = function() {
    modal.style.visibility = "hidden";
  }



  


  function thing() {
      
  
              document.getElementById('myModal').style.visibility = 'visible'
              
  
              document.getElementById('submitButton').addEventListener('click',()=>{
                  modal.style.visibility = "hidden"
                  let firstname = document.getElementById('firstname')
                  let surname = document.getElementById('surname')
                  let reason = document.getElementById('reason')
                  let notes = document.getElementById('notes')
  
                let id = this.id

                let el = createRow({id, firstname:firstname.value, surname:surname.value, reason: reason.value, notes: notes.value })

                  
                this.parentNode.replaceChild(el, this);
              })

             
              
              

                  
                  
                //   `<div class="rowClass"><div class="rowSpacing">${id}</div><div class="rowSpacing">${firstname.value + ' ' + surname.value}</div><div class="rowSpacing">${reason.value}</div><div class="rowSpacing">${notes.value}</div></div>`
  
                //   firstname.value = ''
                //   surname.value = ''
                //   reason.value = ''
                //   notes.value = ''
              //   console.log(div.id)
            
          }


//   let updateGrid = () => {

//   }