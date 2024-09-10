function createStudentProfile(student) {
  const profilCard = document.createElement("div");
  profilCard.classList.add("profil-card");

  profilCard.innerHTML = `
    <img src="${student.photo}" alt="${student.name}">
    <h2>${student.name}</h2>
    <p>${student.age} ans</p>
    <p>${student.description}</p>`;

  return profilCard;
}

function loadProfiles() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
      const profileContainer = document.querySelector(".profiles-container");
      data.students.forEach((student) => {
        const profileCard = createStudentProfile(student);
        profileContainer.appendChild(profileCard);
      });
    })
    .catch((err) => console.error("Error fetching data:", err));
}

document.addEventListener("DOMContentLoaded", loadProfiles);
