function toggleNavbar(val) {
    if (val) {
        document.getElementById('sidenav').style.width = '280px';
        document.getElementById('overlay').style.display = 'block';
        document.getElementsByTagName("body")[0].style.height = '100%';
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    }
    else {
        document.getElementById('sidenav').style.width = '0';
        document.getElementById('overlay').style.display = 'none';
        document.getElementsByTagName("body")[0].style.height = 'auto';
        document.getElementsByTagName("body")[0].style.overflow = 'auto';
    }
}
window.toggleNavbar = toggleNavbar