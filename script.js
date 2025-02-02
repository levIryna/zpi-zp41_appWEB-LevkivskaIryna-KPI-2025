function openModal() {
    document.getElementById("registerForm").style.display = "block";
  }
  
  function closeModal() {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.style.display = "none";
    });
  }
  
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal();
    }
  }
  
  document.querySelectorAll('.close-button').forEach(button => {
    button.onclick = function() {
      closeModal();
    };
  });
  
  document.getElementById("registrationForm").onsubmit = function(event) {
    event.preventDefault();
  
    const data = {
      childName: document.getElementById("child-name").value.trim(),
      guardianName: document.getElementById("guardian-name").value.trim(),
      guardianPhone: document.getElementById("guardian-phone").value.trim()
    };
  
    if (!data.childName || !data.guardianName || !data.guardianPhone) {
      alert("Будь ласка, заповніть всі поля форми.");
      return false;
    }
  
    const phonePattern = /^[\d\s\-()+]+$/;
    if (!phonePattern.test(data.guardianPhone)) {
      alert("Будь ласка, введіть дійсний номер телефону.");
      return false;
    }
  
    const isSuccess = Math.random() > 0.5;
    closeModal();
    if (isSuccess) {
      document.getElementById("paymentSuccess").style.display = "block";
    } else {
      document.getElementById("paymentFailure").style.display = "block";
    }
  };
  
  function retryPayment() {
    closeModal();
    openModal();
  }
  
  document.querySelectorAll(".enroll-button").forEach(button => {
    button.onclick = function() {
      openModal();
    };
  });
  