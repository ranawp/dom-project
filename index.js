const milestoneData = JSON.parse(data).data


//load course milstone data 
function loadMilstones() {
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return `<div class="milestone border-b"> 
        <div class="flex"> 
            <div class="checkbox">
                <input type="checkbox">   
            </div> 
        <div>
        <p>
           ${milestone.name}
            <span><i class="fas fa-chevron-down"> </i> </span>
        </p> 
        </div>
        </div> 
        <div class='hidden_panel'> 
            <div class="module border-b"> 
           ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
            </div>`
        }).join("")}
        </div>
        </div>
        </div>`
    }).join("")}`
}

loadMilstones()