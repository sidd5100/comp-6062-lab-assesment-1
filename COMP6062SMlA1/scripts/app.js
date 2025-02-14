

const studentFullName = "Siddhant Mahindrakar";
const studentNumber = "1191977";
//const concat = studentFullName

const result = `${studentFullName} - ${studentNumber}`;

console.log(result);

let headerContent = document.querySelector("h1");

headerContent.innerHTML = result;

headerContent.classlist.add("headingPrimary");
