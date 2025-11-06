let logoutCallback;

// Login Function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    document.getElementById("login-error").innerText = "Please fill in all fields.";
  } else if (!email.includes("@")) {
    document.getElementById("login-error").innerText = "Enter a valid email address.";
  } else {
    alert("Logged in successfully!");
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".dashboard").style.display = "block";
    document.querySelector(".content-management").style.display = "block";
  }
}

// Confirm Logout
function confirmLogout() {
  logoutCallback = () => {
    alert("Logged out successfully!");
    document.querySelector(".login-page").style.display = "block";
    document.querySelector(".dashboard").style.display = "none";
    document.querySelector(".content-management").style.display = "none";
  };
  showModal("Are you sure you want to log out?");
}

// View Projects
function viewProjects() {
  alert("Viewing all projects.");
}

// View Messages
function viewMessages() {
  alert("Viewing new messages.");
}

// Add New Project
function addNewProject() {
  document.getElementById("project-form").style.display = "block";
}

// Save Project
function saveProject() {
  const title = document.getElementById("project-title").value;
  const description = document.getElementById("project-description").value;
  
  if (title && description) {
    const projectList = document.getElementById("project-list");
    const newProject = document.createElement("li");
    newProject.textContent = title;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    newProject.appendChild(editButton);
    newProject.appendChild(deleteButton);
    projectList.appendChild(newProject);
    
    alert("Project saved successfully!");
    document.getElementById("project-form").style.display = "none";
  } else {
    alert("Please enter a title and description.");
  }
}

// Modal Control
function showModal(message) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-message").innerText = message;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function confirmAction() {
  closeModal();
  if (logoutCallback) logoutCallback();
}
