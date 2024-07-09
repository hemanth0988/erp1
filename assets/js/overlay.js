document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // Overlay JS code
    const overlays = document.querySelectorAll('.overlay');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const addNewBtn = document.querySelector('.add-new-btn');
    const newEntryOverlay = document.getElementById('new-entry-overlay');
    const newEntryForm = document.getElementById('new-entry-form');
    const addAttachmentBtn = document.getElementById('add-attachment-btn');
    const attachmentInput = document.getElementById('attachment-input');
    const attachmentList = document.getElementById('attachment-list');
    const viewDetailsOverlay = document.getElementById('overlay-1');
    const entryDetails = document.getElementById('entry-details');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const date = button.getAttribute('data-date');
            const reqNo = button.getAttribute('data-req-no');
            const projectName = button.getAttribute('data-project-name');
            const projectType = button.getAttribute('data-project-type');
            const category = button.getAttribute('data-category');
            const amount = button.getAttribute('data-amount');
            const details = button.getAttribute('data-details');

            entryDetails.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label>Date:</label>
                        <p>${date}</p>
                    </div>
                    <div class="form-group">
                        <label>Req. no.:</label>
                        <p>${reqNo}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Project name & no.:</label>
                        <p>${projectName}</p>
                    </div>
                    <div class="form-group">
                        <label>Project type:</label>
                        <p>${projectType}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Category:</label>
                        <p>${category}</p>
                    </div>
                    <div class="form-group">
                        <label>Amount:</label>
                        <p>${amount}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group full-width">
                        <label>Details:</label>
                        <p>${details}</p>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="add-attachment-btn view-attachment-btn">View Attachment</button>
                </div>
            `;

            viewDetailsOverlay.style.display = 'flex';
        });
    });

    overlays.forEach(overlay => {
        const closeBtn = overlay.querySelector('.close-btn');
        
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == overlay) {
                overlay.style.display = 'none';
            }
        });
    });

    addNewBtn.addEventListener('click', () => {
        newEntryOverlay.style.display = 'flex';
    });

    newEntryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const reqNo = document.getElementById('req-no').value;
        const projectName = document.getElementById('project-name').value;
        const projectType = document.getElementById('project-type').value;
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const details = document.getElementById('details').value;

        const table = document.querySelector('table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${reqNo}</td>
            <td>${projectName}</td>
            <td>${projectType}</td>
            <td>${category}</td>
            <td>${amount}</td>
            <td>
                <button class="view-details-btn" data-date="${date}" data-req-no="${reqNo}" data-project-name="${projectName}" data-project-type="${projectType}" data-category="${category}" data-amount="${amount}" data-details="${details}">
                    <img src="assets/icons/viewdetails.svg" alt="View Details Icon">
                </button>
            </td>
        `;
        table.appendChild(newRow);

        newEntryOverlay.style.display = 'none';

        // Add event listener for the new view details button
        const newViewDetailsButton = newRow.querySelector('.view-details-btn');
        newViewDetailsButton.addEventListener('click', () => {
            const date = newViewDetailsButton.getAttribute('data-date');
            const reqNo = newViewDetailsButton.getAttribute('data-req-no');
            const projectName = newViewDetailsButton.getAttribute('data-project-name');
            const projectType = newViewDetailsButton.getAttribute('data-project-type');
            const category = newViewDetailsButton.getAttribute('data-category');
            const amount = newViewDetailsButton.getAttribute('data-amount');
            const details = newViewDetailsButton.getAttribute('data-details');

            entryDetails.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label>Date:</label>
                        <p>${date}</p>
                    </div>
                    <div class="form-group">
                        <label>Req. no.:</label>
                        <p>${reqNo}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Project name & no.:</label>
                        <p>${projectName}</p>
                    </div>
                    <div class="form-group">
                        <label>Project type:</label>
                        <p>${projectType}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Category:</label>
                        <p>${category}</p>
                    </div>
                    <div class="form-group">
                        <label>Amount:</label>
                        <p>${amount}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group full-width">
                        <label>Details:</label>
                        <p>${details}</p>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="add-attachment-btn view-attachment-btn">View Attachment</button>
                </div>
            `;

            viewDetailsOverlay.style.display = 'flex';
        });
    });

    addAttachmentBtn.addEventListener('click', () => {
        attachmentInput.click();
    });

    attachmentInput.addEventListener('change', (event) => {
        const fileList = event.target.files;
        attachmentList.innerHTML = ''; // Clear the list before adding new files

        Array.from(fileList).forEach(file => {
            const listItem = document.createElement('span');
            listItem.className = 'attachment-item';
            listItem.textContent = file.name;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'x';
            removeBtn.className = 'remove-attachment-btn';
            removeBtn.addEventListener('click', () => {
                listItem.remove();
            });

            listItem.appendChild(removeBtn);
            attachmentList.appendChild(listItem);
        });
    });
});
