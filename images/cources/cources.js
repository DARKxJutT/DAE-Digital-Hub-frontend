function showDetails(course) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    if (course === 'civil') {
        title.textContent = 'Civil Engineering';
        description.textContent = 'This course focuses on designing and constructing infrastructures like roads, bridges, and buildings.';
    } else if (course === 'mechanical') {
        title.textContent = 'Mechanical Engineering';
        description.textContent = 'This field is all about designing mechanical systems such as engines, turbines, and HVAC systems.';
    } else if (course === 'metallurgical') {
        title.textContent = 'Metallurgical Engineering';
        description.textContent = 'Focuses on materials science and the study of metals, alloys, and manufacturing techniques.';
    } else if (course === 'aero') {
        title.textContent = 'Aerospace Engineering';
        description.textContent = 'Deals with the design and development of aircraft and spacecraft systems.';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}
