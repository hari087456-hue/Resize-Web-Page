// Set PDF.js worker path
pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show active tab content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // DOM Elements for Compression Tool
    const fileInput = document.getElementById('fileInput');
    const selectImageBtn = document.getElementById('selectImageBtn');
    const dropArea = document.getElementById('dropArea');
    const compressionLevel = document.getElementById('compressionLevel');
    const qualityValue = document.getElementById('qualityValue');
    const outputFormat = document.getElementById('outputFormat');
    const compressBtn = document.getElementById('compressBtn');
    const compressProgressBar = document.getElementById('compressProgressBar');
    const compressProgress = document.getElementById('compressProgress');
    const loader = document.getElementById('loader');
    const compressError = document.getElementById('compressError');
    const compressSuccess = document.getElementById('compressSuccess');
    const results = document.getElementById('results');
    const originalImage = document.getElementById('originalImage');
    const compressedImage = document.getElementById('compressedImage');
    const originalSize = document.getElementById('originalSize');
    const compressedSize = document.getElementById('compressedSize');
    const originalDimensions = document.getElementById('originalDimensions');
    const compressedDimensions = document.getElementById('compressedDimensions');
    const savings = document.getElementById('savings');
    const downloadBtn = document.getElementById('downloadBtn');
    const maxWidth = document.getElementById('maxWidth');
    const increaseWidth = document.getElementById('increaseWidth');
    const decreaseWidth = document.getElementById('decreaseWidth');
    
    // DOM Elements for Image Editing Tool
    const editFileInput = document.getElementById('editFileInput');
    const selectEditImageBtn = document.getElementById('selectEditImageBtn');
    const editDropArea = document.getElementById('editDropArea');
    const editCanvas = document.getElementById('editCanvas');
    const cropContainer = document.getElementById('cropContainer');
    const cropHandle = document.getElementById('cropHandle');
    const cropToggleBtn = document.getElementById('cropToggleBtn');
    const filterGallery = document.getElementById('filterGallery');
    const brightnessSlider = document.getElementById('brightness');
    const contrastSlider = document.getElementById('contrast');
    const saturationSlider = document.getElementById('saturation');
    const rotationSlider = document.getElementById('rotation');
    const flipHorizontalBtn = document.getElementById('flipHorizontalBtn');
    const flipVerticalBtn = document.getElementById('flipVerticalBtn');
    const resetEditBtn = document.getElementById('resetEditBtn');
    const saveEditBtn = document.getElementById('saveEditBtn');
    
    // DOM Elements for Image Merging Tool
    const mergeFileInput = document.getElementById('mergeFileInput');
    const selectMergeImagesBtn = document.getElementById('selectMergeImagesBtn');
    const mergeDropArea = document.getElementById('mergeDropArea');
    const uploadedFilesContainer = document.getElementById('uploadedFilesContainer');
    const clearAllImagesBtn = document.getElementById('clearAllImagesBtn');
    const reorderImagesBtn = document.getElementById('reorderImagesBtn');
    const mergeDirection = document.getElementById('mergeDirection');
    const mergeSpacing = document.getElementById('mergeSpacing');
    const spacingValue = document.getElementById('spacingValue');
    const backgroundColor = document.getElementById('backgroundColor');
    const mergeImagesBtn = document.getElementById('mergeImagesBtn');
    const mergeLoader = document.getElementById('mergeLoader');
    const mergeResults = document.getElementById('mergeResults');
    const mergedImage = document.getElementById('mergedImage');
    const downloadMergeBtn = document.getElementById('downloadMergeBtn');
    
    // DOM Elements for PDF Compression Tool
    const compressPdfFileInput = document.getElementById('compressPdfFileInput');
    const selectCompressPdfBtn = document.getElementById('selectCompressPdfBtn');
    const compressPdfDropArea = document.getElementById('compressPdfDropArea');
    const pdfCompressionLevel = document.getElementById('pdfCompressionLevel');
    const pdfQualityValue = document.getElementById('pdfQualityValue');
    const pdfImageQuality = document.getElementById('pdfImageQuality');
    const pdfImageQualityValue = document.getElementById('pdfImageQualityValue');
    const compressPdfBtn = document.getElementById('compressPdfBtn');
    const compressPdfProgressBar = document.getElementById('compressPdfProgressBar');
    const compressPdfProgress = document.getElementById('compressPdfProgress');
    const compressPdfLoader = document.getElementById('compressPdfLoader');
    const compressPdfError = document.getElementById('compressPdfError');
    const compressPdfSuccess = document.getElementById('compressPdfSuccess');
    const compressPdfResults = document.getElementById('compressPdfResults');
    const originalPdfSize = document.getElementById('originalPdfSize');
    const compressedPdfSize = document.getElementById('compressedPdfSize');
    const pdfSavings = document.getElementById('pdfSavings');
    const downloadCompressedPdfBtn = document.getElementById('downloadCompressedPdfBtn');
    
    // DOM Elements for PDF Resize Tool
    const resizePdfFileInput = document.getElementById('resizePdfFileInput');
    const selectResizePdfBtn = document.getElementById('selectResizePdfBtn');
    const resizePdfDropArea = document.getElementById('resizePdfDropArea');
    const pageSize = document.getElementById('pageSize');
    const customSizeControls = document.getElementById('customSizeControls');
    const customWidth = document.getElementById('customWidth');
    const customHeight = document.getElementById('customHeight');
    const pageOrientation = document.getElementById('pageOrientation');
    const pageRange = document.getElementById('pageRange');
    const resizePdfBtn = document.getElementById('resizePdfBtn');
    const resizePdfLoader = document.getElementById('resizePdfLoader');
    const resizePdfError = document.getElementById('resizePdfError');
    const resizePdfSuccess = document.getElementById('resizePdfSuccess');
    const resizePdfResults = document.getElementById('resizePdfResults');
    const downloadResizedPdfBtn = document.getElementById('downloadResizedPdfBtn');
    
    // DOM Elements for PDF Merge Tool
    const mergePdfFileInput = document.getElementById('mergePdfFileInput');
    const selectMergePdfsBtn = document.getElementById('selectMergePdfsBtn');
    const mergePdfDropArea = document.getElementById('mergePdfDropArea');
    const uploadedPdfsContainer = document.getElementById('uploadedPdfsContainer');
    const clearAllPdfsBtn = document.getElementById('clearAllPdfsBtn');
    const reorderPdfsBtn = document.getElementById('reorderPdfsBtn');
    const mergePdfsBtn = document.getElementById('mergePdfsBtn');
    const mergePdfLoader = document.getElementById('mergePdfLoader');
    const mergePdfError = document.getElementById('mergePdfError');
    const mergePdfSuccess = document.getElementById('mergePdfSuccess');
    const mergePdfResults = document.getElementById('mergePdfResults');
    const downloadMeredPdfBtn = document.getElementById('downloadMergedPdfBtn');
    
    // DOM Elements for Text to PDF Tool
    const textToConvert = document.getElementById('textToConvert');
    const pdfFilename = document.getElementById('pdfFilename');
    const pdfFontSize = document.getElementById('pdfFontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const pdfPageSize = document.getElementById('pdfPageSize');
    const pdfFontFamily = document.getElementById('pdfFontFamily');
    const textToPdfBtn = document.getElementById('textToPdfBtn');
    const textToPdfSuccess = document.getElementById('textToPdfSuccess');
    
    // DOM Elements for PDF to Text Tool
    const pdfToTextFileInput = document.getElementById('pdfToTextFileInput');
    const selectPdfToTextBtn = document.getElementById('selectPdfToTextBtn');
    const pdfToTextDropArea = document.getElementById('pdfToTextDropArea');
    const textPageRange = document.getElementById('textPageRange');
    const pdfToTextLoader = document.getElementById('pdfToTextLoader');
    const pdfToTextError = document.getElementById('pdfToTextError');
    const pdfToTextSuccess = document.getElementById('pdfToTextSuccess');
    const pdfToTextResults = document.getElementById('pdfToTextResults');
    const extractedText = document.getElementById('extractedText');
    const downloadTextBtn = document.getElementById('downloadTextBtn');
    
    let originalFile = null;
    let compressedDataUrl = null;
    let editImage = null;
    let editCtx = editCanvas.getContext('2d');
    let mergeFiles = [];
    let horizontalFlip = false;
    let verticalFlip = false;
    let isCropping = false;
    let cropStartX = 0;
    let cropStartY = 0;
    let cropWidth = 0;
    let cropHeight = 0;
    let currentFilter = 'normal';
    
    // PDF variables
    let compressPdfFile = null;
    let compressedPdfData = null;
    let resizePdfFile = null;
    let resizedPdfData = null;
    let mergePdfFiles = [];
    let mergedPdfData = null;
    let pdfToTextFile = null;
    
    // Reordering state variables
    let isImageReorderMode = false;
    let isPdfReorderMode = false;
    
    // Initialize edit canvas
    editCtx.fillStyle = '#2c3e50';
    editCtx.fillRect(0, 0, editCanvas.width, editCanvas.height);
    editCtx.fillStyle = '#ecf0f1';
    editCtx.textAlign = 'center';
    editCtx.font = '16px Arial';
    editCtx.fillText('Upload an image to edit', editCanvas.width/2, editCanvas.height/2);
    
    // Update quality value display
    compressionLevel.addEventListener('input', function() {
        qualityValue.textContent = `${this.value}%`;
    });
    
    // Update PDF compression level display - FIXED: Initialize and update properly
    function updatePdfCompressionDisplay() {
        const levels = ['Maximum', 'Balanced', 'Better'];
        pdfQualityValue.textContent = levels[pdfCompressionLevel.value - 1];
    }
    
    // Initialize PDF compression level display
    updatePdfCompressionDisplay();
    
    pdfCompressionLevel.addEventListener('input', updatePdfCompressionDisplay);
    
    // Update PDF image quality display
    pdfImageQuality.addEventListener('input', function() {
        pdfImageQualityValue.textContent = `${this.value}%`;
    });
    
    // Update font size value display
    pdfFontSize.addEventListener('input', function() {
        fontSizeValue.textContent = `${this.value}pt`;
    });
    
    // Update merge spacing value
    mergeSpacing.addEventListener('input', function() {
        spacingValue.textContent = `${this.value}px`;
    });
    
    // Show/hide custom size controls based on page size selection
    pageSize.addEventListener('change', function() {
        if (this.value === 'custom') {
            customSizeControls.style.display = 'flex';
        } else {
            customSizeControls.style.display = 'none';
        }
    });
    
    // Open file dialog when button is clicked (compression)
    selectImageBtn.addEventListener('click', function() {
        fileInput.click();
    });
    
    // Handle file selection (compression)
    fileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            handleFile(this.files[0]);
        }
    });
    
    // Increase/Decrease width buttons
    increaseWidth.addEventListener('click', function() {
        if (maxWidth.value === '') maxWidth.value = 100;
        maxWidth.value = parseInt(maxWidth.value) + 10;
    });
    
    decreaseWidth.addEventListener('click', function() {
        if (maxWidth.value === '' || parseInt(maxWidth.value) <= 10) return;
        maxWidth.value = parseInt(maxWidth.value) - 10;
    });
    
    // Drag and drop handlers (compression)
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
        dropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
        dropArea.style.borderColor = '#2ecc71';
    }
    
    function unhighlight() {
        dropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        dropArea.style.borderColor = '#3498db';
    }
    
    dropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        handleFile(file);
    });
    
    // Handle the selected file (compression)
    function handleFile(file) {
        const supportedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];
        
        if (!supportedTypes.includes(file.type)) {
            showError(compressError, 'Please select a supported image file (JPEG, PNG, WebP, GIF, or BMP).');
            return;
        }
        
        if (file.size > 20 * 1024 * 1024) {
            showError(compressError, 'Please select an image smaller than 20MB.');
            return;
        }
        
        originalFile = file;
        
        // Display original image
        const reader = new FileReader();
        reader.onload = function(e) {
            originalImage.src = e.target.result;
            originalSize.textContent = formatBytes(file.size);
            
            // Get image dimensions
            const img = new Image();
            img.onload = function() {
                originalDimensions.textContent = `${img.width} × ${img.height} pixels`;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
        
        // Enable compress button
        compressBtn.disabled = false;
        
        // Hide previous results and errors
        results.style.display = 'none';
        compressError.style.display = 'none';
        
        showSuccess(compressSuccess, 'Image loaded successfully. Adjust compression settings and click Compress.');
    }
    
    // Compress image when button is clicked
    compressBtn.addEventListener('click', function() {
        if (!originalFile) return;
        
        // Show loading animation
        compressProgressBar.style.display = 'block';
        compressProgress.style.width = '0%';
        loader.style.display = 'block';
        results.style.display = 'none';
        compressError.style.display = 'none';
        
        // Simulate progress for better UX
        simulateProgress(compressProgress, 70, 1000, function() {
            processImage();
        });
    });
    
    // Process the image (compression)
    function processImage() {
        const quality = compressionLevel.value / 100;
        const img = new Image();
        
        img.onload = function() {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            
            // Calculate new dimensions if maxWidth is specified
            if (maxWidth.value && !isNaN(maxWidth.value) && maxWidth.value < width) {
                const ratio = maxWidth.value / width;
                width = maxWidth.value;
                height = height * ratio;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            
            // Determine output format
            let outputType = originalFile.type;
            if (outputFormat.value !== 'original') {
                outputType = `image/${outputFormat.value}`;
            }
            
            // Get compressed data URL
            compressedDataUrl = canvas.toDataURL(outputType, quality);
            
            // Display compressed image
            compressedImage.src = compressedDataUrl;
            
            // Calculate compressed size (approximate)
            const compressedBytes = calculateDataUrlSize(compressedDataUrl);
            compressedSize.textContent = formatBytes(compressedBytes);
            compressedDimensions.textContent = `${width} × ${height} pixels`;
            
            // Calculate savings
            const originalBytes = originalFile.size;
            const savingBytes = originalBytes - compressedBytes;
            const savingPercent = (savingBytes / originalBytes * 100).toFixed(1);
            
            savings.innerHTML = `
                You saved <strong>${formatBytes(savingBytes)}</strong> 
                (<strong>${savingPercent}%</strong> reduction)
            `;
            
            // Complete progress
            compressProgress.style.width = '100%';
            
            setTimeout(function() {
                // Hide loader and show results
                loader.style.display = 'none';
                compressProgressBar.style.display = 'none';
                results.style.display = 'block';
                
                // Scroll to results
                results.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        };
        
        img.src = URL.createObjectURL(originalFile);
    }
    
    // Download compressed image
    downloadBtn.addEventListener('click', function() {
        if (!compressedDataUrl) return;
        
        const link = document.createElement('a');
        link.download = getOutputFilename(originalFile.name, '-compressed', outputFormat.value);
        link.href = compressedDataUrl;
        link.click();
    });
    
    // Image Editing Functions
    selectEditImageBtn.addEventListener('click', function() {
        editFileInput.click();
    });
    
    editFileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            handleEditImage(this.files[0]);
        }
    });
    
    // Drag and drop for edit tab
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        editDropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        editDropArea.addEventListener(eventName, () => {
            editDropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            editDropArea.style.borderColor = '#2ecc71';
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        editDropArea.addEventListener(eventName, () => {
            editDropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            editDropArea.style.borderColor = '#3498db';
        }, false);
    });
    
    editDropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        handleEditImage(file);
    });
    
    function handleEditImage(file) {
        if (!file.type.match('image.*')) {
            alert('Please select an image file.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            editImage = new Image();
            editImage.onload = function() {
                editCanvas.width = editImage.width;
                editCanvas.height = editImage.height;
                drawEditImage();
            };
            editImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    
    function drawEditImage() {
        if (!editImage) return;
        
        // Clear canvas
        editCtx.clearRect(0, 0, editCanvas.width, editCanvas.height);
        
        // Apply transformations
        editCtx.save();
        
        // Translate to center for rotation
        editCtx.translate(editCanvas.width/2, editCanvas.height/2);
        
        // Apply rotation
        const rotation = parseInt(rotationSlider.value);
        editCtx.rotate(rotation * Math.PI/180);
        
        // Apply flips
        const scaleX = horizontalFlip ? -1 : 1;
        const scaleY = verticalFlip ? -1 : 1;
        editCtx.scale(scaleX, scaleY);
        
        // Apply filters - FIXED: Use canvas filter instead of CSS filter
        let filterString = '';
        
        switch(currentFilter) {
            case 'grayscale':
                filterString += 'grayscale(1) ';
                break;
            case 'sepia':
                filterString += 'sepia(1) ';
                break;
            case 'vintage':
                filterString += 'sepia(0.5) contrast(1.2) brightness(0.9) ';
                break;
        }
        
        filterString += `
            brightness(${100 + parseInt(brightnessSlider.value)}%)
            contrast(${100 + parseInt(contrastSlider.value)}%)
            saturate(${100 + parseInt(saturationSlider.value)}%)
        `;
        
        // Apply the filter to the context
        editCtx.filter = filterString;
        
        // Draw image
        editCtx.drawImage(
            editImage, 
            -editImage.width/2, 
            -editImage.height/2,
            editImage.width,
            editImage.height
        );
        
        editCtx.restore();
        
        // Draw crop handle if cropping
        if (isCropping) {
            cropHandle.style.display = 'block';
            cropHandle.style.width = cropWidth + 'px';
            cropHandle.style.height = cropHeight + 'px';
            cropHandle.style.left = cropStartX + 'px';
            cropHandle.style.top = cropStartY + 'px';
        } else {
            cropHandle.style.display = 'none';
        }
    }
    
    // Edit control event listeners
    brightnessSlider.addEventListener('input', drawEditImage);
    contrastSlider.addEventListener('input', drawEditImage);
    saturationSlider.addEventListener('input', drawEditImage);
    rotationSlider.addEventListener('input', drawEditImage);
    
    // Filter selection
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            filterItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            drawEditImage();
        });
    });
    
    // Set first filter as active
    filterItems[0].classList.add('active');
    
    // Crop functionality
    let isDragging = false;
    let startX, startY;
    
    cropToggleBtn.addEventListener('click', function() {
        isCropping = !isCropping;
        if (isCropping) {
            // Initialize crop area to center of image
            cropWidth = editImage.width / 2;
            cropHeight = editImage.height / 2;
            cropStartX = (editImage.width - cropWidth) / 2;
            cropStartY = (editImage.height - cropHeight) / 2;
            this.innerHTML = '<i class="fas fa-crop-alt"></i> Disable Crop';
        } else {
            this.innerHTML = '<i class="fas fa-crop-alt"></i> Enable Crop';
        }
        drawEditImage();
    });
    
    cropContainer.addEventListener('mousedown', function(e) {
        if (!isCropping) return;
        
        isDragging = true;
        startX = e.clientX - cropStartX;
        startY = e.clientY - cropStartY;
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging || !isCropping) return;
        
        cropStartX = e.clientX - startX;
        cropStartY = e.clientY - startY;
        
        // Constrain to image bounds
        cropStartX = Math.max(0, Math.min(editImage.width - cropWidth, cropStartX));
        cropStartY = Math.max(0, Math.min(editImage.height - cropHeight, cropStartY));
        
        drawEditImage();
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
    
    flipHorizontalBtn.addEventListener('click', function() {
        horizontalFlip = !horizontalFlip;
        drawEditImage();
    });
    
    flipVerticalBtn.addEventListener('click', function() {
        verticalFlip = !verticalFlip;
        drawEditImage();
    });
    
    resetEditBtn.addEventListener('click', function() {
        brightnessSlider.value = 0;
        contrastSlider.value = 0;
        saturationSlider.value = 0;
        rotationSlider.value = 0;
        horizontalFlip = false;
        verticalFlip = false;
        isCropping = false;
        cropToggleBtn.innerHTML = '<i class="fas fa-crop-alt"></i> Enable Crop';
        currentFilter = 'normal';
        
        filterItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-filter') === 'normal') {
                item.classList.add('active');
            }
        });
        
        drawEditImage();
    });
    
    // FIXED: Save the edited image with all transformations applied
    saveEditBtn.addEventListener('click', function() {
        if (!editImage) return;
        
        // Create a temporary canvas to apply all edits
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        tempCanvas.width = editCanvas.width;
        tempCanvas.height = editCanvas.height;
        
        // Apply all transformations and filters to the temporary canvas
        tempCtx.save();
        
        // Apply transformations
        tempCtx.translate(tempCanvas.width/2, tempCanvas.height/2);
        tempCtx.rotate(parseInt(rotationSlider.value) * Math.PI/180);
        
        const scaleX = horizontalFlip ? -1 : 1;
        const scaleY = verticalFlip ? -1 : 1;
        tempCtx.scale(scaleX, scaleY);
        
        // Apply filters
        let filterString = '';
        
        switch(currentFilter) {
            case 'grayscale':
                filterString += 'grayscale(1) ';
                break;
            case 'sepia':
                filterString += 'sepia(1) ';
                break;
            case 'vintage':
                filterString += 'sepia(0.5) contrast(1.2) brightness(0.9) ';
                break;
        }
        
        filterString += `
            brightness(${100 + parseInt(brightnessSlider.value)}%)
            contrast(${100 + parseInt(contrastSlider.value)}%)
            saturate(${100 + parseInt(saturationSlider.value)}%)
        `;
        
        tempCtx.filter = filterString;
        
        // Draw image
        tempCtx.drawImage(
            editImage, 
            -editImage.width/2, 
            -editImage.height/2,
            editImage.width,
            editImage.height
        );
        
        tempCtx.restore();
        
        let canvasToSave = tempCanvas;
        
        // If cropping is active, create a cropped version
        if (isCropping) {
            const croppedCanvas = document.createElement('canvas');
            croppedCanvas.width = cropWidth;
            croppedCanvas.height = cropHeight;
            const croppedCtx = croppedCanvas.getContext('2d');
            
            croppedCtx.drawImage(
                tempCanvas,
                cropStartX, cropStartY, cropWidth, cropHeight,
                0, 0, cropWidth, cropHeight
            );
            
            canvasToSave = croppedCanvas;
        }
        
        const link = document.createElement('a');
        link.download = 'edited-image.png';
        link.href = canvasToSave.toDataURL('image/png');
        link.click();
    });
    
    // Image Merging Functions
    selectMergeImagesBtn.addEventListener('click', function() {
        mergeFileInput.click();
    });
    
    mergeFileInput.addEventListener('change', function(e) {
        if (this.files && this.files.length > 0) {
            handleMergeImages(Array.from(this.files));
        }
    });
    
    // Drag and drop for merge tab
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        mergeDropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        mergeDropArea.addEventListener(eventName, () => {
            mergeDropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            mergeDropArea.style.borderColor = '#2ecc71';
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        mergeDropArea.addEventListener(eventName, () => {
            mergeDropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            mergeDropArea.style.borderColor = '#3498db';
        }, false);
    });
    
    mergeDropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const files = Array.from(dt.files);
        handleMergeImages(files);
    });
    
    function handleMergeImages(files) {
        // Filter only image files
        const imageFiles = files.filter(file => file.type.match('image.*'));
        
        if (imageFiles.length < 2) {
            alert('Please select at least 2 image files.');
            return;
        }
        
        mergeFiles = imageFiles;
        
        // Display uploaded files
        uploadedFilesContainer.innerHTML = '';
        
        mergeFiles.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileElement = document.createElement('div');
                fileElement.className = 'uploaded-file';
                fileElement.setAttribute('data-index', index);
                fileElement.innerHTML = `
                    <img src="${e.target.result}" alt="${file.name}">
                    <button class="remove-btn" data-index="${index}">&times;</button>
                `;
                uploadedFilesContainer.appendChild(fileElement);
                
                // Add remove event listener
                fileElement.querySelector('.remove-btn').addEventListener('click', function() {
                    const removeIndex = parseInt(this.getAttribute('data-index'));
                    mergeFiles.splice(removeIndex, 1);
                    handleMergeImages(mergeFiles); // Refresh the list
                });
            };
            reader.readAsDataURL(file);
        });
        
        // Enable merge button
        mergeImagesBtn.disabled = false;
        mergeResults.style.display = 'none';
    }
    
    // Clear all images
    clearAllImagesBtn.addEventListener('click', function() {
        mergeFiles = [];
        uploadedFilesContainer.innerHTML = '';
        mergeImagesBtn.disabled = true;
        mergeResults.style.display = 'none';
    });
    
    // FIXED: Implement reordering functionality for images
    reorderImagesBtn.addEventListener('click', function() {
        isImageReorderMode = !isImageReorderMode;
        
        if (isImageReorderMode) {
            // Enter reorder mode
            this.innerHTML = '<i class="fas fa-check"></i> Done';
            uploadedFilesContainer.classList.add('reorder-mode');
            
            // Make items draggable
            const items = uploadedFilesContainer.querySelectorAll('.uploaded-file');
            items.forEach(item => {
                item.draggable = true;
                
                item.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', this.getAttribute('data-index'));
                    this.classList.add('dragging');
                });
                
                item.addEventListener('dragend', function() {
                    this.classList.remove('dragging');
                });
            });
            
            // Enable drop zones
            uploadedFilesContainer.addEventListener('dragover', function(e) {
                e.preventDefault();
                const afterElement = getDragAfterElement(uploadedFilesContainer, e.clientY);
                const draggable = document.querySelector('.dragging');
                if (afterElement == null) {
                    uploadedFilesContainer.appendChild(draggable);
                } else {
                    uploadedFilesContainer.insertBefore(draggable, afterElement);
                }
            });
            
            uploadedFilesContainer.addEventListener('drop', function(e) {
                e.preventDefault();
                const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                const items = Array.from(uploadedFilesContainer.querySelectorAll('.uploaded-file'));
                const toIndex = items.indexOf(document.querySelector('.dragging'));
                
                if (fromIndex !== toIndex) {
                    // Reorder the mergeFiles array
                    const item = mergeFiles[fromIndex];
                    mergeFiles.splice(fromIndex, 1);
                    mergeFiles.splice(toIndex, 0, item);
                    
                    // Update data-index attributes
                    items.forEach((item, index) => {
                        item.setAttribute('data-index', index);
                    });
                }
            });
        } else {
            // Exit reorder mode
            this.innerHTML = '<i class="fas fa-sort"></i> Reorder';
            uploadedFilesContainer.classList.remove('reorder-mode');
            
            // Make items not draggable
            const items = uploadedFilesContainer.querySelectorAll('.uploaded-file');
            items.forEach(item => {
                item.draggable = false;
            });
            
            // Remove event listeners
            uploadedFilesContainer.replaceWith(uploadedFilesContainer.cloneNode(true));
        }
    });
    
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.uploaded-file:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    mergeImagesBtn.addEventListener('click', function() {
        if (mergeFiles.length < 2) return;
        
        mergeLoader.style.display = 'block';
        
        // Load all images
        const imagePromises = mergeFiles.map(file => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = URL.createObjectURL(file);
            });
        });
        
        Promise.all(imagePromises).then(images => {
            // Create a canvas based on merge direction
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            const direction = mergeDirection.value;
            const spacing = parseInt(mergeSpacing.value);
            const bgColor = backgroundColor.value;
            
            if (direction === 'horizontal') {
                // Calculate total width and max height
                let totalWidth = 0;
                let maxHeight = 0;
                
                images.forEach(img => {
                    totalWidth += img.width;
                    maxHeight = Math.max(maxHeight, img.height);
                });
                
                // Add spacing between images
                totalWidth += spacing * (images.length - 1);
                
                canvas.width = totalWidth;
                canvas.height = maxHeight;
                
                // Fill background
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw images horizontally
                let xPos = 0;
                images.forEach(img => {
                    ctx.drawImage(img, xPos, 0);
                    xPos += img.width + spacing;
                });
            } 
            else if (direction === 'vertical') {
                // Calculate max width and total height
                let maxWidth = 0;
                let totalHeight = 0;
                
                images.forEach(img => {
                    maxWidth = Math.max(maxWidth, img.width);
                    totalHeight += img.height;
                });
                
                // Add spacing between images
                totalHeight += spacing * (images.length - 1);
                
                canvas.width = maxWidth;
                canvas.height = totalHeight;
                
                // Fill background
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw images vertically
                let yPos = 0;
                images.forEach(img => {
                    ctx.drawImage(img, 0, yPos);
                    yPos += img.height + spacing;
                });
            }
            else if (direction === 'grid') {
                // Grid layout (2 columns)
                const cols = 2;
                const rows = Math.ceil(images.length / cols);
                
                // Calculate cell size
                let cellWidth = 0;
                let cellHeight = 0;
                
                images.forEach(img => {
                    cellWidth = Math.max(cellWidth, img.width);
                    cellHeight = Math.max(cellHeight, img.height);
                });
                
                // Add spacing
                cellWidth += spacing;
                cellHeight += spacing;
                
                canvas.width = cellWidth * cols;
                canvas.height = cellHeight * rows;
                
                // Fill background
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw images in grid
                images.forEach((img, index) => {
                    const col = index % cols;
                    const row = Math.floor(index / cols);
                    
                    ctx.drawImage(
                        img, 
                        col * cellWidth + spacing/2, 
                        row * cellHeight + spacing/2
                    );
                });
            }
            
            // Display merged image
            mergedImage.src = canvas.toDataURL('image/png');
            mergeResults.style.display = 'block';
            mergeLoader.style.display = 'none';
            
            // Set up download
            downloadMergeBtn.onclick = function() {
                const link = document.createElement('a');
                link.download = 'merged-image.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            };
        });
    });
    
    // PDF Compression Functions
    selectCompressPdfBtn.addEventListener('click', function() {
        compressPdfFileInput.click();
    });
    
    compressPdfFileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            handleCompressPdfFile(this.files[0]);
        }
    });
    
    // Drag and drop for compress PDF
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        compressPdfDropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        compressPdfDropArea.addEventListener(eventName, () => {
            compressPdfDropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            compressPdfDropArea.style.borderColor = '#2ecc71';
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        compressPdfDropArea.addEventListener(eventName, () => {
            compressPdfDropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            compressPdfDropArea.style.borderColor = '#3498db';
        }, false);
    });
    
    compressPdfDropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        handleCompressPdfFile(file);
    });
    
    function handleCompressPdfFile(file) {
        if (file.type !== 'application/pdf') {
            showError(compressPdfError, 'Please select a PDF file.');
            return;
        }
        
        compressPdfFile = file;
        compressPdfBtn.disabled = false;
        compressPdfResults.style.display = 'none';
        compressPdfError.style.display = 'none';
        originalPdfSize.textContent = formatBytes(file.size);
        
        showSuccess(compressPdfSuccess, 'PDF loaded successfully. Adjust compression settings and click Compress.');
    }
    
    compressPdfBtn.addEventListener('click', async function() {
        if (!compressPdfFile) return;
        
        compressPdfProgressBar.style.display = 'block';
        compressPdfProgress.style.width = '0%';
        compressPdfLoader.style.display = 'block';
        compressPdfError.style.display = 'none';
        
        try {
            simulateProgress(compressPdfProgress, 30, 500);
            
            const arrayBuffer = await compressPdfFile.arrayBuffer();
            simulateProgress(compressPdfProgress, 60, 500);
            
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            simulateProgress(compressPdfProgress, 80, 500);
            
            // Set compression level based on user selection
            const compressionLevel = parseInt(pdfCompressionLevel.value);
            
            // Save with compression options
            const pdfBytes = await pdfDoc.save({
                useObjectStreams: compressionLevel > 1,
                compress: compressionLevel > 1,
            });
            
            compressedPdfData = new Blob([pdfBytes], { type: 'application/pdf' });
            
            // Update UI with results
            compressedPdfSize.textContent = formatBytes(compressedPdfData.size);
            
            const originalBytes = compressPdfFile.size;
            const compressedBytes = compressedPdfData.size;
            const savingBytes = originalBytes - compressedBytes;
            const savingPercent = (savingBytes / originalBytes * 100).toFixed(1);
            
            pdfSavings.innerHTML = `
                You saved <strong>${formatBytes(savingBytes)}</strong> 
                (<strong>${savingPercent}%</strong> reduction)
            `;
            
            compressPdfProgress.style.width = '100%';
            
            setTimeout(function() {
                compressPdfLoader.style.display = 'none';
                compressPdfProgressBar.style.display = 'none';
                compressPdfResults.style.display = 'block';
            }, 300);
        } catch (error) {
            console.error('Error compressing PDF:', error);
            showError(compressPdfError, 'Error compressing PDF. Please try again with a different file.');
            compressPdfLoader.style.display = 'none';
            compressPdfProgressBar.style.display = 'none';
        }
    });
    
    downloadCompressedPdfBtn.addEventListener('click', function() {
        if (!compressedPdfData) return;
        
        const link = document.createElement('a');
        link.download = getOutputFilename(compressPdfFile.name, '-compressed');
        link.href = URL.createObjectURL(compressedPdfData);
        link.click();
    });
    
    // PDF Resize Functions
    selectResizePdfBtn.addEventListener('click', function() {
        resizePdfFileInput.click();
    });
    
    resizePdfFileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            handleResizePdfFile(this.files[0]);
        }
    });
    
    // Drag and drop for resize PDF
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        resizePdfDropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        resizePdfDropArea.addEventListener(eventName, () => {
            resizePdfDropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            resizePdfDropArea.style.borderColor = '#2ecc71';
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        resizePdfDropArea.addEventListener(eventName, () => {
            resizePdfDropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            resizePdfDropArea.style.borderColor = '#3498db';
        }, false);
    });
    
    resizePdfDropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        handleResizePdfFile(file);
    });
    
    function handleResizePdfFile(file) {
        if (file.type !== 'application/pdf') {
            showError(resizePdfError, 'Please select a PDF file.');
            return;
        }
        
        resizePdfFile = file;
        resizePdfBtn.disabled = false;
        resizePdfResults.style.display = 'none';
        resizePdfError.style.display = 'none';
        
        showSuccess(resizePdfSuccess, 'PDF loaded successfully. Adjust resize settings and click Resize.');
    }
    
    resizePdfBtn.addEventListener('click', async function() {
        if (!resizePdfFile) return;
        
        resizePdfLoader.style.display = 'block';
        resizePdfError.style.display = 'none';
        
        try {
            const arrayBuffer = await resizePdfFile.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            
            // Parse page range
            let pageIndices = pdfDoc.getPageIndices();
            if (pageRange.value.trim() !== '') {
                pageIndics = parsePageRange(pageRange.value, pdfDoc.getPageCount());
            }
            
            // Get selected page size
            let width, height;
            const orientation = pageOrientation.value;
            
            switch(pageSize.value) {
                case 'a4':
                    width = 595.28; // A4 width in points (1/72 inch)
                    height = 841.89; // A4 height in points
                    break;
                case 'letter':
                    width = 612; // Letter width
                    height = 792; // Letter height
                    break;
                case 'legal':
                    width = 612; // Legal width
                    height = 1008; // Legal height
                    break;
                case 'a3':
                    width = 841.89; // A3 width
                    height = 1190.55; // A3 height
                    break;
                case 'a5':
                    width = 420.94; // A5 width
                    height = 595.28; // A5 height
                    break;
                case 'custom':
                    // Convert mm to points (1 mm = 2.83465 points)
                    width = parseFloat(customWidth.value) * 2.83465;
                    height = parseFloat(customHeight.value) * 2.83465;
                    break;
            }
            
            // Swap dimensions for landscape orientation
            if (orientation === 'landscape') {
                [width, height] = [height, width];
            }
            
            // Resize specified pages
            for (let i = 0; i < pageIndices.length; i++) {
                const pageIndex = pageIndices[i];
                const page = pdfDoc.getPage(pageIndex);
                page.setSize(width, height);
            }
            
            // Save the modified PDF
            const pdfBytes = await pdfDoc.save();
            resizedPdfData = new Blob([pdfBytes], { type: 'application/pdf' });
            
            resizePdfLoader.style.display = 'none';
            resizePdfResults.style.display = 'block';
        } catch (error) {
            console.error('Error resizing PDF:', error);
            showError(resizePdfError, 'Error resizing PDF. Please try again with a different file.');
            resizePdfLoader.style.display = 'none';
        }
    });
    
    downloadResizedPdfBtn.addEventListener('click', function() {
        if (!resizedPdfData) return;
        
        const link = document.createElement('a');
        link.download = getOutputFilename(resizePdfFile.name, '-resized');
        link.href = URL.createObjectURL(resizedPdfData);
        link.click();
    });
    
    // PDF Merge Functions
    selectMergePdfsBtn.addEventListener('click', function() {
        mergePdfFileInput.click();
    });
    
    mergePdfFileInput.addEventListener('change', function(e) {
        if (this.files && this.files.length > 0) {
            handleMergePdfs(Array.from(this.files));
        }
    });
    
    // Drag and drop for merge PDFs
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        mergePdfDropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        mergePdfDropArea.addEventListener(eventName, () => {
            mergePdfDropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            mergePdfDropArea.style.borderColor = '#2ecc71';
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        mergePdfDropArea.addEventListener(eventName, () => {
            mergePdfDropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            mergePdfDropArea.style.borderColor = '#3498db';
        }, false);
    });
    
    mergePdfDropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const files = Array.from(dt.files);
        handleMergePdfs(files);
    });
    
    function handleMergePdfs(files) {
        // Filter only PDF files
        const pdfFiles = files.filter(file => file.type === 'application/pdf');
        
        if (pdfFiles.length < 2) {
            showError(mergePdfError, 'Please select at least 2 PDF files.');
            return;
        }
        
        mergePdfFiles = pdfFiles;
        
        // Display uploaded files
        uploadedPdfsContainer.innerHTML = '';
        
        mergePdfFiles.forEach((file, index) => {
            const fileElement = document.createElement('div');
            fileElement.className = 'uploaded-file';
            fileElement.setAttribute('data-index', index);
            fileElement.innerHTML = `
                <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #2c3e50;">
                    <i class="fas fa-file-pdf" style="font-size: 2rem; color: #e74c3c;"></i>
                </div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7; padding: 5px; font-size: 0.7rem; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                    ${file.name}
                </div>
                <button class="remove-btn" data-index="${index}">&times;</button>
            `;
            uploadedPdfsContainer.appendChild(fileElement);
            
            // Add remove event listener
            fileElement.querySelector('.remove-btn').addEventListener('click', function() {
                const removeIndex = parseInt(this.getAttribute('data-index'));
                mergePdfFiles.splice(removeIndex, 1);
                handleMergePdfs(mergePdfFiles); // Refresh the list
            });
        });
        
        // Enable merge button
        mergePdfsBtn.disabled = false;
        mergePdfResults.style.display = 'none';
        mergePdfError.style.display = 'none';
        
        showSuccess(mergePdfSuccess, 'PDFs loaded successfully. Click Merge to combine them.');
    }
    
    // Clear all PDFs
    clearAllPdfsBtn.addEventListener('click', function() {
        mergePdfFiles = [];
        uploadedPdfsContainer.innerHTML = '';
        mergePdfsBtn.disabled = true;
        mergePdfResults.style.display = 'none';
    });
    
    // FIXED: Implement reordering functionality for PDFs
    reorderPdfsBtn.addEventListener('click', function() {
        isPdfReorderMode = !isPdfReorderMode;
        
        if (isPdfReorderMode) {
            // Enter reorder mode
            this.innerHTML = '<i class="fas fa-check"></i> Done';
            uploadedPdfsContainer.classList.add('reorder-mode');
            
            // Make items draggable
            const items = uploadedPdfsContainer.querySelectorAll('.uploaded-file');
            items.forEach(item => {
                item.draggable = true;
                
                item.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', this.getAttribute('data-index'));
                    this.classList.add('dragging');
                });
                
                item.addEventListener('dragend', function() {
                    this.classList.remove('dragging');
                });
            });
            
            // Enable drop zones
            uploadedPdfsContainer.addEventListener('dragover', function(e) {
                e.preventDefault();
                const afterElement = getDragAfterElement(uploadedPdfsContainer, e.clientY);
                const draggable = document.querySelector('.dragging');
                if (afterElement == null) {
                    uploadedPdfsContainer.appendChild(draggable);
                } else {
                    uploadedPdfsContainer.insertBefore(draggable, afterElement);
                }
            });
            
            uploadedPdfsContainer.addEventListener('drop', function(e) {
                e.preventDefault();
                const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                const items = Array.from(uploadedPdfsContainer.querySelectorAll('.uploaded-file'));
                const toIndex = items.indexOf(document.querySelector('.dragging'));
                
                if (fromIndex !== toIndex) {
                    // Reorder the mergePdfFiles array
                    const item = mergePdfFiles[fromIndex];
                    mergePdfFiles.splice(fromIndex, 1);
                    mergePdfFiles.splice(toIndex, 0, item);
                    
                    // Update data-index attributes
                    items.forEach((item, index) => {
                        item.setAttribute('data-index', index);
                    });
                }
            });
        } else {
            // Exit reorder mode
            this.innerHTML = '<i class="fas fa-sort"></i> Reorder';
            uploadedPdfsContainer.classList.remove('reorder-mode');
            
            // Make items not draggable
            const items = uploadedPdfsContainer.querySelectorAll('.uploaded-file');
            items.forEach(item => {
                item.draggable = false;
            });
            
            // Remove event listeners
            uploadedPdfsContainer.replaceWith(uploadedPdfsContainer.cloneNode(true));
        }
    });
    
    mergePdfsBtn.addEventListener('click', async function() {
        if (mergePdfFiles.length < 2) return;
        
        mergePdfLoader.style.display = 'block';
        mergePdfError.style.display = 'none';
        
        try {
            const mergedPdf = await PDFLib.PDFDocument.create();
            
            for (const file of mergePdfFiles) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFLib.PPDFDocument.load(arrayBuffer);
                const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                
                pages.forEach(page => {
                    mergedPdf.addPage(page);
                });
            }
            
            const pdfBytes = await mergedPdf.save();
            mergedPdfData = new Blob([pdfBytes], { type: 'application/pdf' });
            
            mergePdfLoader.style.display = 'none';
            mergePdfResults.style.display = 'block';
        } catch (error) {
            console.error('Error merging PDFs:', error);
            showError(mergePdfError, 'Error merging PDFs. Please try again with different files.');
            mergePdfLoader.style.display = 'none';
        }
    });
    
    downloadMergedPdfBtn.addEventListener('click', function() {
        if (!mergedPdfData) return;
        
        const link = document.createElement('a');
        link.download = 'merged-document.pdf';
        link.href = URL.createObjectURL(mergedPdfData);
        link.click();
    });
    
    // Text to PDF Functionality
    textToPdfBtn.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        
        const text = textToConvert.value;
        const filename = pdfFilename.value || 'document';
        const fontSize = parseInt(pdfFontSize.value);
        const fontFamily = pdfFontFamily.value;
        
        if (!text.trim()) {
            alert('Please enter some text to convert to PDF.');
            return;
        }
        
        // Determine page size
        let pageSize = 'a4';
        if (pdfPageSize.value === 'letter') pageSize = 'letter';
        if (pdfPageSize.value === 'legal') pageSize = 'legal';
        
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: pageSize
        });
        
        doc.setFontSize(fontSize);
        doc.setFont(fontFamily);
        
        // Split text into lines that fit the page
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 10;
        const maxWidth = pageWidth - (margin * 2);
        
        const lines = doc.splitTextToSize(text, maxWidth);
        
        let y = margin;
        const lineHeight = fontSize / 2.5;
        
        for (let i = 0; i < lines.length; i++) {
            if (y > doc.internal.pageSize.getHeight() - margin) {
                doc.addPage();
                y = margin;
            }
            
            doc.text(lines[i], margin, y);
            y += lineHeight;
        }
        
        // Download PDF
        doc.save(`${filename}.pdf`);
        
        showSuccess(textToPdfSuccess, 'PDF created successfully! Download started.');
    });
    
    // PDF to Text Functionality
    selectPdfToTextBtn.addEventListener('click', function() {
        pdfToTextFileInput.click();
    });
    
    pdfToTextFileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            handlePdfToTextFile(this.files[0]);
        }
    });
    
    // Drag and drop for PDF to text
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        pdfToTextDropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        pdfToTextDropArea.addEventListener(eventName, () => {
            pdfToTextDropArea.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            pdfToTextDropArea.style.borderColor = '#2ecc71';
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        pdfToTextDropArea.addEventListener(eventName, () => {
            pdfToTextDropArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            pdfToTextDropArea.style.borderColor = '#3498db';
        }, false);
    });
    
    pdfToTextDropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        handlePdfToTextFile(file);
    });
    
    function handlePdfToTextFile(file) {
        if (file.type !== 'application/pdf') {
            showError(pdfToTextError, 'Please select a PDF file.');
            return;
        }
        
        pdfToTextFile = file;
        extractTextFromPdf(file);
    }
    
    async function extractTextFromPdf(file) {
        pdfToTextLoader.style.display = 'block';
        pdfToTextError.style.display = 'none';
        pdfToTextResults.style.display = 'none';
        pdfToTextSuccess.style.display = 'none';
        
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            
            // Parse page range
            let pageIndices = Array.from({length: pdf.numPages}, (_, i) => i + 1);
            if (textPageRange.value.trim() !== '') {
                pageIndices = parsePageRange(textPageRange.value, pdf.numPages);
            }
            
            let fullText = '';
            
            for (let i = 0; i < pageIndices.length; i++) {
                const pageNumber = pageIndices[i];
                const page = await pdf.getPage(pageNumber);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                fullText += pageText + '\n\n';
            }
            
            extractedText.value = fullText;
            pdfToTextLoader.style.display = 'none';
            pdfToTextResults.style.display = 'block';
            pdfToTextSuccess.style.display = 'block';
        } catch (error) {
            console.error('Error extracting text from PDF:', error);
            showError(pdfToTextError, 'Error extracting text from PDF. Please try again with a different file.');
            pdfToTextLoader.style.display = 'none';
        }
    }
    
    downloadTextBtn.addEventListener('click', function() {
        const text = extractedText.value;
        if (!text) return;
        
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.download = getOutputFilename(pdfToTextFile.name, '-extracted-text', '.txt');
        link.href = URL.createObjectURL(blob);
        link.click();
    });
    
    // Helper function to parse page range
    function parsePageRange(rangeStr, maxPages) {
        const pages = new Set();
        const parts = rangeStr.split(',');
        
        for (const part of parts) {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(num => parseInt(num.trim()));
                const realStart = Math.max(1, isNaN(start) ? 1 : start);
                const realEnd = Math.min(maxPages, isNaN(end) ? maxPages : end);
                
                for (let i = realStart; i <= realEnd; i++) {
                    pages.add(i - 1); // Convert to 0-based index
                }
            } else {
                const page = parseInt(part.trim());
                if (!isNaN(page) && page >= 1 && page <= maxPages) {
                    pages.add(page - 1); // Convert to 0-based index
                }
            }
        }
        
        return Array.from(pages).sort((a, b) => a - b);
    }
    
    // Helper function to simulate progress
    function simulateProgress(progressElement, targetPercent, duration, callback) {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentPercent = progress * targetPercent;
            
            progressElement.style.width = currentPercent + '%';
            
            if (progress >= 1) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 20);
    }
    
    // Helper function to show error message
    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        
        // Scroll to error
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Helper function to show success message
    function showSuccess(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }
    
    // Helper function to calculate approximate size of data URL
    function calculateDataUrlSize(dataUrl) {
        const overhead = 0.37; // Base64 overhead
        const bytes = (dataUrl.length * overhead);
        return Math.round(bytes);
    }
    
    // Helper function to format bytes
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    
    // Helper function to generate output filename
    function getOutputFilename(filename, suffix = '-compressed', extension = null) {
        const dotIndex = filename.lastIndexOf('.');
        const name = dotIndex !== -1 ? filename.substring(0, dotIndex) : filename;
        const ext = extension !== null ? extension : (dotIndex !== -1 ? filename.substring(dotIndex) : '');
        
        return `${name}${suffix}${ext}`;
    }
});