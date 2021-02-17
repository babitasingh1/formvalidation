const form = document.querySelector('form');
const passwordEl = document.querySelector('#pwd');
const confirmPwdEl = document.querySelector('#confirmpwd');
let skills = [];

function validateForm(e) {
  e.preventDefault();
  //Compare password and confirm password
  if (passwordEl.value !== confirmPwdEl.value) {
    alert('Password and Confirmpassword are not same!');

    return;
  } else {
    storeskills();
    storeFormData();
    alert('Registered successfully!');
  }
}

//store selected skills
function storeskills() {
  let oParent = document.getElementById('skillset');
  let aElements = oParent.getElementsByTagName('input');

  for (let i = 0; i < aElements.length; i++) {
    if (aElements[i].type == 'checkbox' && aElements[i].checked == true) {
      skills.push(aElements[i].value);
    }
  }
}

function storeFormData() {
  const user = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: form.telephone.value,
    email: form.email.value,
    Password: form.password.value,
    linkedin: form.linkedin.value,
    country: form.country.value,
    maritalstatus: form.maritalstatus.value,
    skillset: skills,
    otherInfo: form.otherinfo.value,
  };
}

form.addEventListener('submit', validateForm);
