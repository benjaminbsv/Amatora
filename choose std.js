// Function to update images for the left section
function updateCandidateImagesLeft() {
  var selectedCandidateLeft = document.getElementById("candidateDropdownLeft").value;

  // Check if a candidate has already been selected (through checkbox)
  if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
      alert("You cannot choose more than one candidate.");
      return; // Prevent further changes if a candidate is already selected
  }

  if (selectedCandidateLeft === "candidate1") {
    document.getElementById("candidateImage1Left").src = "./photos/student1.jpg";
    document.getElementById("candidateImage2Left").src = "./photos/student2.jpg";
    document.getElementById("candidateImage3Left").src = "./photos/student3.jpg";
    document.getElementById("candidateImage4Left").src = "./photos/student4.jpg";
    document.getElementById("candidateInfoLeft").innerHTML = "<p>Information about Headboy</p>";
  } else if (selectedCandidateLeft === "candidate2") {
    document.getElementById("candidateImage1Left").src = "./photos/student9.jpg";
    document.getElementById("candidateImage2Left").src = "./photos/student10.jpg";
    document.getElementById("candidateImage3Left").src = "./photos/student11.jpg";
    document.getElementById("candidateImage4Left").src = "./photos/student12.jpg";
    document.getElementById("candidateInfoLeft").innerHTML = "<p>Information about Vice Headboy</p>";
  } else if (selectedCandidateLeft === "candidate3") {
    document.getElementById("candidateImage1Left").src = "./photos/student13.jpg";
    document.getElementById("candidateImage2Left").src = "./photos/student14.jpg";
    document.getElementById("candidateImage3Left").src = "./photos/student15.jpg";
    document.getElementById("candidateImage4Left").src = "./photos/student16.jpg";
    document.getElementById("candidateInfoLeft").innerHTML = "<p>Information about Refectorian</p>";
  } else if (selectedCandidateLeft === "candidate4") {
    document.getElementById("candidateImage1Left").src = "./photos/student17.jpg";
    document.getElementById("candidateImage2Left").src = "./photos/student18.jpg";
    document.getElementById("candidateImage3Left").src = "./photos/student19.jpg";
    document.getElementById("candidateImage4Left").src = "./photos/student20.jpg";
    document.getElementById("candidateInfoLeft").innerHTML = "<p>Information about Chief of Hygiene</p>";
  }
}

// Function to update images for the right section
function updateCandidateImagesRight() {
  var selectedCandidateRight = document.getElementById("candidateDropdownRight").value;

  // Check if a candidate has already been selected (through checkbox)
  if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
      alert("You cannot choose more than one candidate.");
      return; // Prevent further changes if a candidate is already selected
  }

  if (selectedCandidateRight === "candidate1") {
    document.getElementById("candidateImage1Right").src = "./photos/hdb1.jpg";
    document.getElementById("candidateImage2Right").src = "./photos/hdb2.jpg";
    document.getElementById("candidateImage3Right").src = "./photos/hdb3.jpg";
    document.getElementById("candidateImage4Right").src = "./photos/hdb4.jpg";
    document.getElementById("candidateInfoRight").innerHTML = "<p>Information about Headgirl</p>";
  } else if (selectedCandidateRight === "candidate2") {
    document.getElementById("candidateImage1Right").src = "./photos/vchdb1.jpg";
    document.getElementById("candidateImage2Right").src = "./photos/vchdb2.jpg";
    document.getElementById("candidateImage3Right").src = "./photos/vchdb3.jpg";
    document.getElementById("candidateImage4Right").src = "./photos/vchdb4.jpg";
    document.getElementById("candidateInfoRight").innerHTML = "<p>Information about Vice Headgirl</p>";
  } else if (selectedCandidateRight === "candidate3") {
    document.getElementById("candidateImage1Right").src = "./photos/student5.jpg";
    document.getElementById("candidateImage2Right").src = "./photos/student6.jpg";
    document.getElementById("candidateImage3Right").src = "./photos/student7.jpg";
    document.getElementById("candidateImage4Right").src = "./photos/student8.jpg";
    document.getElementById("candidateInfoRight").innerHTML = "<p>Information about Refectorienne</p>";
  } else if (selectedCandidateRight === "candidate4") {
    document.getElementById("candidateImage1Right").src = "./photos/kanyamasuku1.jpg";
    document.getElementById("candidateImage2Right").src = "./photos/kanyamasuku2.jpg";
    document.getElementById("candidateImage3Right").src = "./photos/kanyamasuku3.jpg";
    document.getElementById("candidateImage4Right").src = "./photos/kanyamasuku4.jpg";
    document.getElementById("candidateInfoRight").innerHTML = "<p>Information about Chief of Hygiene</p>";
  }
}
