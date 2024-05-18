 const data = `{
	"fields":{
	   "college_name":"ShriRamdeobaba College of Engineering and Management, Nagpur",
	   "courses":[

		   
		  {
			 "course_name":"Civil Engineering",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":74.2012741,
				"lo":70.9370842,
				"mi":8.2596443,
				"tfws":85.0225065
			 }
		  },
		  {
			 "course_name":"Computer Science and Engineering",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":97.6715453,
				"lo":97.3519362,
				"mi":94.2383135,
				"tfws":98.7399046
			 }
		  },
		  {
			 "course_name":"Information Technology",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":97.2281449,
				"lo":97.0529612,
				"mi":92.2067826,
				"tfws":98.3843375
			 }
		  },
		  {
			 "course_name":"Electrical Engineering",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":88.2419713,
				"lo":89.4070809,
				"mi":61.6697194,
				"tfws":91.3351936
			 }
		  },
		  {
			 "course_name":"Electronics and Communication Engineering",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":93.4850788,
				"lo":92.6197648,
				"mi":73.2440997,
				"tfws":95.1073753
			 }
		  },
		  {
			 "course_name":"BioMedical Engineering",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":76.4889836,
				"lo":81.984042,
				"mi":32.5908894,
				"tfws":91.1038771
			 }
		  },
		  {
			 "course_name":"Mechanical Engineering",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":84.1495823,
				"lo":68.3772406,
				"mi":16.7412669,
				"tfws":89.978791
			 }
		  },
		  {
			 "course_name":"Electronics and Computer Science",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":90.6908949,
				"lo":89.9502487,
				"mi":75.6487214,
				"tfws":94.5135505
			 }
		  },
		  {
			 "course_name":"Computer Science and Engineering (Cyber Security)",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":95.3018223,
				"lo":95.2920027,
				"mi":84.8614274,
				"tfws":96.3138948
			 }
		  },
		  {
			 "course_name":"Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":96.0282477,
				"lo":95.7744481,
				"mi":87.1226124,
				"tfws":97.5358274
			 }
		  },
		  {
			 "course_name":"Computer Science and Engineering (Data Science)",
			 "status":"Un-Aided",
			 "autonomous":"Autonomous",
			 "linguistic_minority":"Hindi",
			 "state_level":true,
			 "category":"GOPENS",
			 "seats":{
				"general":95.9333398,
				"lo":95.445301,
				"mi":85.606492,
				"tfws":96.9477226
			 }
		  }
	   ]
	}
 }`;

const valid = JSON.parse(data);
console.dir(valid);
let selectedBranch;
const userPercentile = 99;

//////////////////////////////////

function toggleDropdown() {
	document.getElementById("dropdown-content").classList.toggle("show");
}

function performOperation(operation) {
	

	switch(operation) {
		case 'Core':
    const coreCourses = valid.fields.courses.filter(course =>
        course.course_name.includes("Mechanical") ||  course.course_name.includes("Electrical") 
    );

    if (coreCourses.length > 0) {
        console.log("Data of Mechanical Engineering courses:");
        coreCourses.forEach(course => {
            console.log(course);
        });
    } else {
        console.log("No matching courses found.");
    }

    // Constructing the fields object
    const coreFields = {
        fields: {
            college_name: valid.fields.college_name,
            courses: coreCourses
        }
    };
    
    selectedBranch = coreFields;
    console.log(coreFields);
    console.log("Core branches");


			break;

			case 'Soft':
				const softCourses = valid.fields.courses.filter(course =>
					course.course_name.includes("Computer") || course.course_name.includes("Information")
				);
		
				if (softCourses.length > 0) {
					console.log("Data of Computer and Information Technology courses:");
					softCourses.forEach(course => {
						console.log(course);
					});
				} else {
					console.log("No matching courses found.");
				}
		
				// Constructing the fields object
				const fields = {
					fields: {
						college_name: valid.fields.college_name,
						courses: softCourses
					}
				};
				
				
				selectedBranch = fields;
				console.log(fields); 
				 // Log the fields object
				
	
			break;
			
			
			case 'Emerging':
				console.log("Emerging branches");
			
				const emergingCourses = valid.fields.courses.filter(course =>
					course.course_name.includes("Electronics")
				);
			
				if (emergingCourses.length > 0) {
					console.log("Data of Emerging branches courses:");
					emergingCourses.forEach(course => {
						console.log(course);
					});
				} else {
					console.log("No matching courses found.");
				}
			
				// Constructing the fields object
				const emergingFields = {
					fields: {
						college_name: valid.fields.college_name,
						courses: emergingCourses
					}
				};
			
				selectedBranch = emergingFields;
				console.log(emergingFields);
				break;
			

			case 'Bio':
				
				const bioCourses = valid.fields.courses.filter(course =>
					course.course_name.includes("Bio")
				);
			
				if (bioCourses.length > 0) {
					console.log("Data of Bio-Technology courses:");
					bioCourses.forEach(course => {
						console.log(course);
					});
				} else {
					console.log("No matching courses found.");
				}
			
				// Constructing the fields object
				const bioFields = {
					fields: {
						college_name: valid.fields.college_name,
						courses: bioCourses
					}
				};
			
				selectedBranch = bioFields;
				console.log(bioFields);
				break;
			
		
		case 'All':
			
			console.log(" All  branches");
			selectedBranch = valid;

			break;
		
	}

	
	document.getElementById("dropdown-content").classList.remove("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropdown-button')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}



/////////////////

	function handleUserInput() {
		const gender = document.getElementById('gender').value.toLowerCase();

		if (gender === 'male'|| gender==='m') {
			 male(selectedBranch);
		} else if (gender === 'female' || gender ==="f") {
			female(selectedBranch);
		} else {
			console.log('Invalid gender input');
		}

		// document.getElementById('result').innerText = 'Result: ' + result;
	}



	function male(data) {
		const collegeName = data.fields.college_name;
		const courses = data.fields.courses;
		// const targetValue = 95;
	
		// Sort courses based on the closest seats.general value to 95
		const sortedCourses = courses
			.filter(course => course.seats.general <= userPercentile) // Ensure only courses with seats.general <= 95 are considered
			.sort((a, b) => Math.abs(a.seats.general - userPercentile) - Math.abs(b.seats.general - userPercentile))
			.slice(0, 5); // Get the top 5 closest courses
	
		// Display the top 5 closest courses with numbering
		sortedCourses.forEach((course, index) => {
			console.log(`${index + 1}. College Name: ${collegeName}`);
			console.log(`   Course Name: ${course.course_name}`);
			console.log(`   General cut OFF: ${course.seats.general}`);
		});
	}
	

	function female(data) {
		const collegeName = data.fields.college_name;
		const courses = data.fields.courses;
		// const targetValue = 95;
	
		// Sort courses based on the closest seats.lo value to 95
		const sortedCourses = courses
			.filter(course => course.seats.lo <= userPercentile) // Ensure only courses with seats.lo <= 95 are considered
			.sort((a, b) => Math.abs(a.seats.lo - userPercentile) - Math.abs(b.seats.lo - userPercentile))
			.slice(0, 5); // Get the top 5 closest courses
	
		// Display the top 5 closest courses with numbering
		sortedCourses.forEach((course, index) => {
			console.log(`${index + 1}. College Name: ${collegeName}`);
			console.log(`   Course Name: ${course.course_name}`);
			console.log(`   lOPEN cut OFF: ${course.seats.lo}`);
		});
	}
	
	
	
