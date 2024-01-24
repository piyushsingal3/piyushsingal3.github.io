
const database = [
    { name: "Piyush Singal", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BTech", department: "Material Science and Engineering", bloodGroup: "AB+" ,rollno:230755,hometown:"Hisar"},
{ name: "Yuvraj Singh", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BS", department: "Earth Science", bloodGroup: "A+",rollno:231206,hometown:"Mathura"},
{ name: "Pradyumna Deshmukh", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BTech", department: "Mechanical Engineering", bloodGroup: "0+" ,rollno:230566,hometown:"Aurangabad,Maharashtra"},
{ name: "Arnav Jagtap", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BTech", department: "Electrical Engineering", bloodGroup: "A+" ,rollno:230491,hometown:"Pune"},
{ name: "Pratyush Singh", batch: "Y10", gender: "Male", hall: "Hall 1", programme: "BTech", department: "Electrical Engineering", bloodGroup: "O-" ,rollno:100785,hometown:"Noida"},
{ name: "Ayush Raj", batch: "Y11", gender: "Male", hall: "Hall 2", programme: "BS", department: "Mathematics and Scientific Computing", bloodGroup: "A-" ,rollno:110120,hometown:"Patna"},
{ name: "Neha", batch: "Y12", gender: "Female", hall: "Hall 6", programme: "BS", department: "Statistics and Data Science", bloodGroup: "A+" ,rollno:120475,hometown:"Rohtak"},
{ name: "Gunjeet jain", batch: "Y13", gender: "Male", hall: "Hall 3", programme: "BTech", department: "Computer Science and Engineering", bloodGroup: "AB+" ,rollno:230500,hometown:"Chandigarh"},
{ name: "Sunita", batch: "Y14", gender: "Female", hall: "Hall 4", programme: "BTech", department: "Aerospace Engineering", bloodGroup: "B-" ,rollno:230920,hometown:"Haridwar"},
{ name: "Abhishek", batch: "Y15", gender: "Male", hall: "Hall 5", programme: "BS", department: "Economics", bloodGroup: "B+" ,rollno:230120,hometown:"Bangalore"},
{ name: "Tanmay Rajput", batch: "Y16", gender: "Male", hall: "Hall 7", programme: "BTech", department: "Aerospace Engineering", bloodGroup: "A+" ,rollno:231088,hometown:"Ahemdabad"},
{ name: "Pulkit Bhardwaj", batch: "Y17", gender: "Male", hall: "Hall 8 ", programme: "BTech", department: "Chemical Engineering", bloodGroup: "B+" ,rollno:230809,hometown:"Gurgaon"},
{ name: "Samarth Singh", batch: "Y18", gender: "Male", hall: "Hall 9", programme: "BTech", department: "Mechanical Engineering", bloodGroup: "AB+" ,rollno:230900,hometown:"Kanpur"},
{ name: "Aman Maloo", batch: "Y19", gender: "Male", hall: "Hall 10", programme: "BTech", department: "Electrical Engineering", bloodGroup: "AB-" ,rollno:230100,hometown:"Jaipur"},

{ name: "Utkarsh Kesharvani", batch: "Y20", gender: "Male", hall: "Hall 11", programme: "BS", department: "Statistics and Data Science", bloodGroup: "A+" ,rollno:231020,hometown:"Prayagraj"},
{ name: "Yashwant", batch: "Y21", gender: "Male", hall: "Hall 12", programme: "BTech", department: "Mechanical Engineering", bloodGroup: "O+" ,rollno:231111,hometown:"Delhi"},
{ name: "Laksh Bansal", batch: "Y22", gender: "Male", hall: "Hall 14", programme: "BTech", department: "Civil Engineering", bloodGroup: "A+" ,rollno:230320,hometown:"Delhi"},
{ name: "Ayush Gautam", batch: "Y23", gender: "Male", hall: "Hall 13", programme: "BTech", department: "Electrical Engineering", bloodGroup: "AB-" ,rollno:230077,hometown:"kannauj"},
{ name: "Adarsh Singh", batch: "Y22", gender: "Male", hall: "Hall 5", programme: "BS-MBA", department: "Mathematics and Scientific Computing", bloodGroup: "A+" ,rollno:220001,hometown:"Bathinda"},
{ name: "Rohit", batch: "Y15", gender: "Male", hall: "Hall 1", programme: "Mtech", department: "Biological Sciences and Bioengineering", bloodGroup: "A+" ,rollno:150995,hometown:"Hyderabad"},
{ name: "Rahul", batch: "Y20", gender: "Male", hall: "Hall 1", programme: "MS", department: "Chemistry", bloodGroup: "A+" ,rollno:200991,hometown:"LUcknow"},
{ name: "Kushal", batch: "Y18", gender: "Male", hall: "Hall 8", programme: "PHD", department: "Chemistry", bloodGroup: "AB+" ,rollno:230997,hometown:"Hisar"},
{ name: "Rahul kumar", batch: "Y16", gender: "Male", hall: "Hall 1", programme: "BT-MS", department: "Chemical Engineering", bloodGroup: "A+" ,rollno:230996,hometown:"Kolkata"},
{ name: "Sahil", batch: "Y17", gender: "Male", hall: "Hall 9", programme: "BS-MT", department: "Statistics and Data Science", bloodGroup: "AB+" ,rollno:231000,hometown:"Ranchi"},
{ name: "Saksham", batch: "Y19", gender: "Male", hall: "Hall 8", programme: "MBA", department: "", bloodGroup: "A+" ,rollno:230010001,hometown:"Mumbai"},
{ name: "Divya kumar", batch: "Y16", gender: "Female", hall: "Hall 6", programme: "MDes", department: "", bloodGroup: "B+" ,rollno:1600091,hometown:"Nagpur"},
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
      (selectedGender === "" ||  student.gender=== selectedGender||selectedGender=== "Any") &&
      (selectedHall === "" || student.hall === selectedHall) &&
      (selectedProgramme === "" || student.programme === selectedProgramme) &&
      (selectedDepartment === "" || student.department === selectedDepartment) &&
      (selectedBloodGroup === "" || student.bloodGroup === selectedBloodGroup) &&
      (inputHometown === "" || student.hometown.toLowerCase().startsWith(inputHometown)) &&

      (inputSearch === "" || student.name.toLowerCase().startsWith(inputSearch) || student.rollno.toString().startsWith(inputSearch))
      ));
  
    
    const result = document.getElementById('result');
    result.innerHTML = ""; 
  
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
      result.appendChild(resultDiv);
    });
  }
  
