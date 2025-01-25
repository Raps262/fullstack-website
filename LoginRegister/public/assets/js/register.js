document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register');
  const fnameInput = document.getElementById('fname');
  const lnameInput = document.getElementById('lname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const cnfPasswordInput = document.getElementById('cnfPassword');

  fnameInput.addEventListener('input', () => {
    const fnameWarning = document.getElementById('fnameWarning');
    const fname = fnameInput.value;

    if (fname.length < 1) {
      fnameWarning.style.visibility = 'visible';
      fnameInput.style.borderColor = 'red';
    } else {
      fnameWarning.style.visibility = 'hidden';
      fnameInput.style.borderColor = '#ddd';
    }
  });

  lnameInput.addEventListener('input', () => {
    const lnameWarning = document.getElementById('lnameWarning');
    const lname = lnameInput.value;

    if (lname.length < 1) {
      lnameWarning.style.visibility = 'visible';
      lnameInput.style.borderColor = 'red';
    } else {
      lnameWarning.style.visibility = 'hidden';
      lnameInput.style.borderColor = '#ddd';
    }
  });

  emailInput.addEventListener('input', () => {
    const emailWarning = document.getElementById('emailWarning');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com)$/;

    if (!emailRegex.test(emailInput.value)) {
      emailWarning.style.visibility = 'visible';
      emailInput.style.borderColor = 'red';
    } else {
      emailWarning.style.visibility = 'hidden';
      emailInput.style.borderColor = '#ddd';
    }
  });

  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const passwordWarning = document.getElementById('passwordWarning');

    if (password.length < 8) {
      passwordWarning.style.visibility = 'visible';
      passwordInput.style.borderColor = 'red';
    } else {
      passwordWarning.style.visibility = 'hidden';
      passwordInput.style.borderColor = '#ddd';
    }
  });

  cnfPasswordInput.addEventListener('input', ()=> {
    const cnfPasswordWarning = document.getElementById('cnfPasswordWarning');

    if (passwordInput.value !== cnfPasswordInput.value) {
      cnfPasswordWarning.style.visibility = 'visible';
      cnfPasswordInput.style.borderColor = '#red';
    } else {
      cnfPasswordWarning.style.visibility = 'hidden';
      cnfPasswordInput.style.borderColor = '#ddd';
    }
  });

  registerForm.addEventListener('submit', (event) => {
    let isValid = true;

    if (fnameInput.value.length < 1) {
      document.getElementById('fnameWarning').style.visibility = 'visible';
      fnameInput.style.borderColor = 'red';
      isValid = false;
    }
    if (lnameInput.value.length < 1) {
      document.getElementById('lnameWarning').style.visibility = 'visible';
      lnameInput.style.borderColor = 'red';
      isValid = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com)$/.test(emailInput.value)) {
      document.getElementById('emailWarning').style.visibility = 'visible';
      emailInput.style.borderColor = 'red';
      isValid = false;
    }
    if (passwordInput.value.length < 8) {
      document.getElementById('passwordWarning').style.visibility = 'visible';
      passwordInput.style.borderColor = 'red';
      isValid = false;
    }

    if (passwordInput.value !== cnfPasswordInput.value) {
      document.getElementById('cnfPasswordWarning').style.visibility = 'visible';
      cnfPasswordInput.style.borderColor = 'red';
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  const formData = new FormData(registerForm);
  const data = {};
  formData.forEach((value, key)=> {
    data[key] = value;
  });
  fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);

      if (result.success) {
        registerForm.reset();
      }
    })

    .catch((error)=>{
      console.error('Error', error);
    });
});