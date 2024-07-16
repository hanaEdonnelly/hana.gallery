function downloadResume() {
    var pdfUrl = '/assets/files/Resume%20-%20Hana%20Donnelly.pdf'; // URL of the PDF file
    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = pdfUrl;
    a.download = 'Resume - Hana Donnelly.pdf'; // Specify the file name to download
  
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }