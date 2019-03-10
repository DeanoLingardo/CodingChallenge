const newCandidates = [{
    name: "Kerrie",
    skills: ["JavaScript", "Docker", "Ruby"]
  },
  {
    name: "Mario",
    skills: ["Python", "AWS"]
  },
  {
    name: "Jacquline",
    skills: ["JavaScript", "Azure"]
  },
  {
    name: "Kathy",
    skills: ["JavaScript", "Java"]
  },
  {
    name: "Anna",
    skills: ["JavaScript", "AWS"]
  },
  {
    name: "Matt",
    skills: ["PHP", "AWS"]
  },
  {
    name: "Matt",
    skills: ["PHP", ".Net", "Docker"]
  },
];

function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName("tr");

  while (rows.length > 1) {
    table.deleteRow(1);
  }
}

function insertCandidate(tbody, name, skills) {
  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(', '));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}

//Used for initial commit, replaced by function below to support search function
function filterCandidateBySkill(candidates, skill) {
  let filteredCandidates = candidates.filter(candidate => candidate.skills.includes(skill))
  return filteredCandidates;
}

function filterCandidate(candidates, skill) {
  return candidates;
}

//Filters through hardcoded table for names typed in search bar
function NameFilterFunction() {
  // Declare variables
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById("NameInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("candidates_example");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//Filters through JS created table for skills typed in second search bar
function SkillFilterFunction() {
  // Declare variables
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById("SkillInput");
  filter = input.value.toUpperCase();
  table = newCandidatesTable;
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


const candidatesTable = document.getElementById("candidates_example");
const newCandidatesTable = candidatesTable.cloneNode(true);

removeRowsFromTable(newCandidatesTable);
const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];

const filteredCandidates = filterCandidate(newCandidates, '')
addCandidatesToTable(newTbody, filteredCandidates)


document.body.appendChild(newCandidatesTable);
