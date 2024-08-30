const modal = document.getElementById("modal");
const contactBtn = document.getElementById("contactBtn");
const closeModal = document.querySelector(".close");
const hoverBox = document.getElementById("hover-box");

contactBtn.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const text = {
            about: 'This is where your about information goes. Brief introduction about yourself.',
            skills: 'Here you will list your skills, such as programming languages and tools you are proficient in.',
            experience: 'This section details your work experience, including companies you\'ve worked for and roles you\'ve held.',
            contact: 'Your contact information or a form for users to reach out to you.'
        };

        hoverBox.innerHTML = text[item.id];
        hoverBox.style.display = 'block';
        hoverBox.style.top = e.clientY + 'px';
        hoverBox.style.left = (e.clientX + 20) + 'px';
    });

    item.addEventListener('mouseleave', () => {
        hoverBox.style.display = 'none';
    });
});
