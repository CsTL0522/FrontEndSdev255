addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click",deleteSong)
    getAllSongs()
})

async function getAllSongs() {
    const response = await fetch("https://road-tranquil-tern.glitch.me/")
    if (response.ok){
        const songs = await response.json()
        let html = ""
        for (let song of songs){
            html += `<option value="${song._id}">${song.title}</option>`
        }
        document.querySelector("#songDropDown").innerHTML = html
    }
    
}
async function deleteSong(){
    //grab id of selected song from the dropdown
    const songId = document.querySelector("#songDropDown option:checked").value
    const response = await fetch("https://road-tranquil-tern.glitch.me/", {
        method: "DELETE"
    })
    if(response.ok){
        alert("Song deleted")
        getAllSongs()        
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot delete song"
    }
}