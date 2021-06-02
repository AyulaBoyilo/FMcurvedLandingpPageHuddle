let emailInput = document.querySelector('#email');

function validateEmailAccess(){
  let emailString = emailInput.value;

  if (emailString.includes('@')) {
    return true;

  } else {
    
    if (document.querySelector('.alert')) {
      document.querySelector('.alert').remove();
      emailInput.style.border = 'none';
    }

    emailInput.style.border = '1px solid hsl(0, 100%, 63%)';
    emailInput.insertAdjacentHTML('afterend', '<span class="alert">Check your email please</span>');
    return false;
  }
};