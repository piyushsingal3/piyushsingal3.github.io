
const database = [
    { name: "Piyush Singal", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BTech", department: "Material Science and Engineering", bloodGroup: "AB+" ,rollno:230755,hometown:"Hisar"},
{ name: "Yuvraj Singh", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BS", department: "Earth Science", bloodGroup: "A+",rollno:231206},
{ name: "Pradyumna Deshmukh", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BTech", department: "Mechanical Engineering", bloodGroup: "0+" ,rollno:230566,hometown:"Aurangabad,Maharashtra"},
{ name: "Arnav Jagtap", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},

{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},
{ name: "John Doe", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BS", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:239},

];
  
  function search() {
    
    const selectedBatch = document.querySelector('select[name="batch"]').value;
    const selectedGender = document.querySelector('select[name="gender"]').value;
    const selectedHall = document.querySelector('select[name="hall"]').value;
    const selectedProgramme = document.querySelector('select[name="programme"]').value;
    const selectedDepartment = document.querySelector('select[name="department"]').value;
    const selectedBloodGroup = document.querySelector('select[name="bloodGroup"]').value;
    const inputHometown = document.getElementById('inputHometown').value.toLowerCase();
    const inputSearch = document.getElementById('inputSearch').value.toLowerCase();
  
    
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
  
    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ""; 
  
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
  
