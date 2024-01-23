// Sample static database
const database = [
    { name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Parker", batch: "Y10", gender: "Male", hall: "Hall 2", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+"}
  ];
  
  function search() {
    // Get selected values
    const selectedBatch = document.querySelector('select[name="batch"]').value;
    const selectedGender = document.querySelector('select[name="gender"]').value;
    const selectedHall = document.querySelector('select[name="hall"]').value;
    const selectedProgramme = document.querySelector('select[name="programme"]').value;
    const selectedDepartment = document.querySelector('select[name="department"]').value;
    const selectedBloodGroup = document.querySelector('select[name="bloodGroup"]').value;
    const inputHometown = document.getElementById('inputHometown').value.toLowerCase();
    const inputSearch = document.getElementById('inputSearch').value.toLowerCase();
  
    // Perform filtering based on selected values
    const filteredResults = database.filter(student => (
      (selectedBatch === "" || student.batch === selectedBatch) &&
      (selectedGender === "" || student.gender === selectedGender) &&
      (selectedHall === "" || student.hall === selectedHall) &&
      (selectedProgramme === "" || student.programme === selectedProgramme) &&
      (selectedDepartment === "" || student.department === selectedDepartment) &&
      (selectedBloodGroup === "" || student.bloodGroup === selectedBloodGroup) &&
      (inputHometown === "" || student.hometown.toLowerCase().includes(inputHometown)) &&
      (inputSearch === "" || student.name.toLowerCase().includes(inputSearch) || student.username.toLowerCase().includes(inputSearch) || student.rollNo.toLowerCase().includes(inputSearch))
    ));
  
    // Display the results on the website
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ""; // Clear previous results
  
    filteredResults.forEach(student => {
      const resultDiv = document.createElement('div');
      resultDiv.innerHTML = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Roll No:</strong> ${student.rollno}</p>
        <p><strong>Batch:</strong> ${student.batch}</p>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Hall:</strong> ${student.hall}</p>
        <p><strong>Programme:</strong> ${student.programme}</p>
        <p><strong>Department:</strong> ${student.department}</p>
        <p><strong>Blood Group:</strong> ${student.bloodGroup}</p>
        <p><strong>Hometown:</strong> ${student.hometown}</p>
        <hr>
      `;
      resultsContainer.appendChild(resultDiv);
    });
  }
  