
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar ul');
    sidebar.classList.toggle('sidebar-expanded');
}


document.querySelector('.logo ion-icon[name="menu-outline"]').addEventListener('click', toggleSidebar);