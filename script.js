
const state = document.querySelector("span")
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === 'visible'){
        document.title = "Active Tab"
    }else{
        document.title = "InActive Tab"
    }
    state.innerHTML = "(faild)"
    state.classList.add("faild")
})