const uploadContainer = document.getElementById('upload-container');
        const fileInput = document.getElementById('file-upload');
        const fileList = document.getElementById('file-list');

        // Trigger file input when clicking the label
        uploadContainer.addEventListener('click', () => fileInput.click());

        // Handle file input change event
        fileInput.addEventListener('change', handleFiles);

        // Drag-and-drop functionality
        uploadContainer.addEventListener('dragover', (event) => {
            event.preventDefault();
            uploadContainer.classList.add('dragover');
        });

        uploadContainer.addEventListener('dragleave', () => {
            uploadContainer.classList.remove('dragover');
        });

        uploadContainer.addEventListener('drop', (event) => {
            event.preventDefault();
            uploadContainer.classList.remove('dragover');
            const files = event.dataTransfer.files;
            handleFiles({ target: { files } });
        });

        // Handle the files and display them in a list
        function handleFiles(event) {
            const files = event.target.files;
            fileList.innerHTML = ''; // Clear the previous file list
            for (const file of files) {
                const fileItem = document.createElement('div');
                fileItem.textContent = file.name;
                fileList.appendChild(fileItem);
            }
        }