// // Updates the modal's contents based on the member that was clicked
// function updateModal(member) {    
//     modalLabel.textContent = member.name;
//     modalImg.src = `../images/${member.photoFileName}`;
//     modalImg.alt = `${member.name}`;
//     modalTitle.textContent = member.name;
//     modalSubtitle.textContent = member.role;
//     modalBody.textContent = member.bio;
// }

// // When the user clicks on a team member's name/photo, open and update the modal 
// photoGrid.addEventListener('click', event => {
//     if (event.target.className === "photo" || event.target.className === "name") {
//         console.log(event)
//         const member = teamMembers.find(element => element.name === event.target.title);
//         updateModal(member);
//         modal.style.display = "block";
//     }
// });

// // When the user clicks on Close (x), close the modal
// closeBtn.addEventListener('click', () => {
//     modal.style.display = "none";
// });

// // When the user clicks anywhere outside of the modal, close the modal
// window.addEventListener('click', event => {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });

let modal = document.getElementById('modal'); // The modal

// When the user clicks on a team member's card, open and update the modal 
modal.addEventListener('show.bs.modal', event => {
    const memberDiv = event.relatedTarget; // Team member that was clicked
    const name = memberDiv.getAttribute('data-bs-name'); // Extract name of team member from data-bs-name attribute
    const member = teamMembers.find(element => element.name === name); // Find member object with that name
    updateModal(member); // Update the modal's content
})

// Updates the modal's contents based on the member that was clicked
function updateModal(member) {    
    const modalLabel = document.getElementById("modal-label");
    const modalImg = document.getElementById("modal-img");
    const modalSubtitle = document.getElementById("modal-subtitle");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");

    modalLabel.textContent = member.name;
    modalImg.src = `../images/${member.photoFileName}`;
    modalImg.alt = `${member.name}`;
    modalTitle.textContent = member.name;
    modalSubtitle.textContent = member.role;
    modalBody.textContent = member.bio;
}