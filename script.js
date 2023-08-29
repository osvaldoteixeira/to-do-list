// BUTTONS
let btnAdd = document.querySelector(".btnAdd")
let btnCon = document.querySelector(".btnCon")
let btnRem = document.querySelector(".btnRem")

let counter = 0

let svgDel = `
<svg id="svgDel" width="" height="" viewBox="3 2.2 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="System" transform="translate(-336.000000, 0.000000)" fill-rule="nonzero"> <g id="delete_line" transform="translate(336.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M20,5 C20.5523,5 21,5.44772 21,6 C21,6.55228 20.5523,7 20,7 L19.0001,7 L18.9975,7.07129 L18.9975,7.07129 L18.0638,20.1425 C17.9891,21.1891 17.1182,22 16.0689,22 L7.93116,22 C6.88189,22 6.011,21.1891 5.93624,20.1425 L5.00258,7.07129 C5.00088,7.04738 5.00002,7.02361 5,7 L4,7 C3.44772,7 3,6.55228 3,6 C3,5.44772 3.44772,5 4,5 L20,5 Z M16.9975,7 L7.00259,7 L7.93116,20 L16.0689,20 L16.9975,7 Z M14,2 C14.5523,2 15,2.44772 15,3 C15,3.55228 14.5523,4 14,4 L10,4 C9.44772,4 9,3.55228 9,3 C9,2.44772 9.44772,2 10,2 L14,2 Z" id="形状" fill="white"> </path> </g> </g> </g> </g></svg>
`
let svgRef = `
<svg id="svgRef" xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="2 2 11 11" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z" fill="white"/>
</svg>
`

let inputItem = document.querySelector(".inputItem")
let list = document.querySelector(".list")
// let cardTarefa = document.querySelector(".card")

btnAdd.addEventListener("click", ()=>{
  ++counter;
  let task = `
  <div id="${counter}" class="card-tarefa">
    <div class="listItem">${inputItem.value}</div>
    <button class="btnCon" onclick="completar(${counter})">Completed</button>
    <button class="btnRef" onclick="refazer(${counter})">
      ${svgRef}
    </button>
    <button class="btnRem" onclick="deletar(${counter})">
      ${svgDel}
    </button>
  </div>
  `
  inputItem.value = ""
  // inputItem.focus()
  list.innerHTML += task
})

inputItem.addEventListener("keyup",(event)=>{
  if(event.keyCode === 13){
    event.preventDefault();
    btnAdd.click();
  }
})

function deletar(id){
  var id = document.getElementById(id);
  id.remove();
}

function completar(id){
  var taskCard = document.getElementById(id)
  if (taskCard.classList.contains("card-tarefa")){
    taskCard.setAttribute("class", "card-tarefa-complete")
  }else{
    taskCard.setAttribute("class", "card-tarefa")
  }
}

function refazer(id) {
  var taskCard = document.getElementById(id)
  if (taskCard.classList.contains("card-tarefa-complete")) {
    taskCard.setAttribute("class", "card-tarefa")
  } else {
    taskCard.setAttribute("class", "card-tarefa-complete")
  }
}