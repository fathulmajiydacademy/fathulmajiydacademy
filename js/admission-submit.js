// Firebase configuration
const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyAp5n0vdNpYw1pJ2f5dB-yv1PRNkBqK3So",
    authDomain: "student-registrationdata.firebaseapp.com",
    projectId: "student-registrationdata",
    storageBucket: "student-registrationdata.firebasestorage.app",
    messagingSenderId: "968650884284",
    appId: "1:968650884284:web:219ed6062b8db63a44fcb9",
    measurementId: "G-Y8MNT1BS2H"
  };
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Listen to form submit
document
  .getElementById("studentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Collect form data
    const getRadioValue = (name) => {
      const checked = document.querySelector(`input[name="${name}"]:checked`);
      return checked ? checked.value : "";
    };
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      middleName: document.getElementById("middleName").value,
      dateOfBirth: document.getElementById("dateOfBirth").value,
      gender: getRadioValue("gender"),
      nationality: document.getElementById("nationality").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      emergencyContact: document.getElementById("emergencyContact").value,
      emergencyPhone: document.getElementById("emergencyPhone").value,
      stateOfOrigin: document.getElementById("stateOfOrigin").value,
      lga: document.getElementById("lga").value,
      stateOfResidence: document.getElementById("stateOfResidence").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
      intendedSession: document.getElementById("intendedSession").value,
      admissionYear: document.getElementById("admissionYear").value,
      previousSchool: document.getElementById("previousSchool").value,
      graduationYear: document.getElementById("graduationYear").value,
      medicalCondition: getRadioValue("medicalCondition"),
      medicalConditionDescription:
        document.getElementById("medicalConditionDescription")?.value || "",
      currentMedication:
        document.getElementById("currentMedication")?.value || "",
      doctorName: document.getElementById("doctorName")?.value || "",
      doctorPhone: document.getElementById("doctorPhone")?.value || "",
      parentName: document.getElementById("parentName").value,
      relationship: document.getElementById("relationship").value,
      parentEmail: document.getElementById("parentEmail").value,
      parentPhone: document.getElementById("parentPhone").value,
      parentOccupation: document.getElementById("parentOccupation").value,
      parentWorkplace: document.getElementById("parentWorkplace").value,
      undertakings: document.getElementById("undertakings").checked,
      declaration: document.getElementById("declaration").checked,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    // Save to Firestore
    try {
      await db.collection("admissions").add(formData);
      document.getElementById("successMessage").style.display = "block";
      // Optionally reset form: this.reset();
    } catch (err) {
      alert("Error submitting form: " + err.message);
    }
  });
