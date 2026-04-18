// script.js

// Smooth Animations and Fluid Transitions

// Login Animation
function loginAnimation() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.transition = 'all 0.5s ease';
    loginForm.style.opacity = '1';
}

// Admin Panel Transition
function adminPanelTransition() {
    const adminPanel = document.getElementById('admin-panel');
    adminPanel.style.transition = 'transform 0.5s ease-in-out';
    adminPanel.style.transform = 'translateY(0)';
}

// Movie Management Area Transition
function movieManagementTransition() {
    const movieManagement = document.getElementById('movie-management');
    movieManagement.style.transition = 'all 0.5s ease';
    movieManagement.style.opacity = '1';
}

// Access Code Generation Animation
function accessCodeGenerationAnimation() {
    const codeContainer = document.getElementById('access-code');
    codeContainer.style.transition = 'width 0.5s ease';
    codeContainer.style.width = '100%';
}

// Event Listeners
document.getElementById('login-button').addEventListener('click', loginAnimation);
document.getElementById('admin-button').addEventListener('click', adminPanelTransition);
document.getElementById('manage-movies-button').addEventListener('click', movieManagementTransition);
document.getElementById('generate-code-button').addEventListener('click', accessCodeGenerationAnimation);
