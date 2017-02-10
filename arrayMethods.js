var wasee = [
	{
		name: "Telvin Student Center",
		idNumber: 644724,
		email: "tnjoroge95@gmail.com",
		gender: "m",
		major: "APT",
		GPA: 0.78,
		favouriteNumbers: [10,9,1],
		isMarried: false,
	},
	{
		name: "Lydia Science Center",
		idNumber: 645418,
		email: "ltaban@usiu.ac.ke",
		gender: "f",
		major: "APT",
		GPA: 1.0,
		favouriteNumbers: [7,11,21],
		isMarried: false,
	},	
	{
		name: "Polly Laundry",
		idNumber: 646822,
		email: "pollymugure@gmail.com",
		gender: "f",
		major: "APT",
		GPA: 2.0,
		favouriteNumbers: [7,1,15],
		isMarried: false,
	},	
	{
		name: "Owiti Old Hostel",
		idNumber: 644008,
		email: "owitigrace@gmail.com",
		gender: "f",
		major: "APT",
		GPA: 0.0,
		favouriteNumbers: [0,4,7],
		isMarried: false,
	},
	{
		name: "Victor New Hostel",
		idNumber: 650445,
		email: "vnjuguna6262@gmail.com",
		gender: "m",
		major: "APT",
		GPA: 0.1,
		favouriteNumbers: [6,2,8],
		isMarried: false,
	},
  {
    name: "Zakaria Cafe Latta",
    idNumber: 652240,
    email: "zakariaadhow@gmail.com",
    gender: "m",
    major: "APT",
    GPA: 3.2,
    favouriteNumbers: [],
    isMarried: false
  },
  {
    name: "Kevin Parking",
    idNumber: 652240,
    email: "mungaikamau7@gmail.com",
    gender: "m",
    major: "APT",
    GPA: 3.8,
    favouriteNumbers: [],
    isMarried: false
  },
];


// The old way
var totalGPAs = 0;
for (var i=0; i < wasee.length; i++) {
  totalGPAs += wasee[i].GPA;
}

var averageGPA = totalGPAs / wasee.length;

// The new way
var totalGPA = (wasee.map(function(student){
  return student.GPA
}).reduce(function(total, gpa) {
  return total + gpa;
}, 0));

var averageGPA = totalGPA/wasee.length


//console.log(averageGPA)


 
var maleGender = [];
wasee.map(function(student){
  if(student.gender=='m')
    {
      return maleGender.push(student.GPA)
     
    }
});

var totalMale = maleGender.reduce(function (total, gpa)
         {
  return total+gpa;
},0);
var averageMale = totalMale/ maleGender.length;





var femaleGender =wasee.filter(function(student){
  if(student.gender=='f')
    {
      return student
    }
 })
    
      
var totalFemale = femaleGender.reduce(function (total, s)
         {
  return total+s.GPA;
},0);

var averageFemale = totalFemale/ femaleGender.length;



//shows student details of gpa below 2.0
var getArray = wasee.filter(function(student){
	if(student.GPA<2.0)
    {
		return student;
    }
})
//shows the gpa of students below 2.0 
var getArrayGpa =getArray.map(function (student)
 {
  return student.GPA;
 })


// shows people whose favorite number is greater than 5

//using find 
const x =wasee.find(function (student)
{
  return student.idNumber === 644008;
  
})
//console.log(getArray);
//console.log(getArrayGpa);


const studentFavNumber = wasee.filter(function(student){
   var greaterthanfive = student.favouriteNumbers.find(function(num){
      return num > 5;
   })
   if (greaterthanfive){
       return student;
     }
});

const maleStudents =wasee.filter(function(student)
 {
  return student.gender ==='m';
})
console.log(studentFavNumber);
console.log(maleStudents);