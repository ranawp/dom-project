const milestoneData = JSON.parse(data).data


//load course milstone data 
function loadMilstones() {
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return `<div class="milestone border-b" id="${milestone._id}"> 
        <div class="flex"> 
            <div class="checkbox">
                <input type="checkbox" onclick="markMileStone(this,${milestone._id})">   
            </div> 
        <div onclick="openMilestone(this,${milestone._id})">
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

function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;

    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active")

    //first remove previous active class if an other than the clicked one] 
    if (active && !milestoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }

    //toogle current clicked one 
    milestoneElement.classList.toggle("active")

    //first hide previous panel if open other clicked element 
    if (!currentPanel.classList.contains("show") && shownPanel)
        shownPanel.classList.remove("show");

    // toggle current element
    currentPanel.classList.toggle("show");

    showMilstone(id);

}

function showMilstone(id) {
    const milstoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details = document.querySelector(".details");

    milstoneImage.style.opacity = "0";

    milstoneImage.src = milestoneData[id].image;
    name.innerText = milestoneData[id].name
    details.innerText = milestoneData[id].description;
}

//listen for hero image load 
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
    this.style.opacity = "1";
};

function markMileStone(checkbox, id) {
    const doneList = document.querySelector(".doneList");
    const milestoneList = document.querySelector(".milestones");
    const item = document.getElementById(id);

    if (checkbox.checked) {
        //mark as done 
        milestoneList.removeChild(item);
        doneList.appendChild(item);
    } else {
        //back to main list 
        milestoneList.appendChild(item);
        doneList.removeChild(item);
    }
}


loadMilstones()