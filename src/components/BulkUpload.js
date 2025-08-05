import React, { useRef } from 'react';

export default function BulkUpload() {
  const csvRef = useRef(null);
  const attachRef = useRef(null);

  function handleUpload(e) {
    e.preventDefault();
    const csvFile = csvRef.current.files[0];
    const attachmentFiles = attachRef.current.files;

    // For demo: Just read CSV content
    if (csvFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const csvContent = event.target.result;
        alert("CSV loaded. First 100 chars: " + csvContent.slice(0, 100));
        // TODO: Send csvContent & attachments to backend or process here
      }
      reader.readAsText(csvFile);
    }
    // TODO: Handle attachmentFiles as needed (send to backend)
  }

  return (
    <div>
      <h2>Bulk Contact Upload</h2>
      <form onSubmit={handleUpload}>
        <label>
          Upload CSV file of contacts:
          <input type="file" accept=".csv" ref={csvRef} required />
        </label>
        <label>
          Upload attachments:
          <input type="file" multiple ref={attachRef} />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}