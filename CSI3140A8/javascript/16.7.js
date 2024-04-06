/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

function validateNotEmpty(field) {
    var errorDiv = document.getElementById(field.name + 'Error');
    if (field.value.trim() === '') {
        errorDiv.textContent = 'This field is required.';
        errorDiv.style.display = 'block';
        return false;
    } else {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
        return true;
    }
}

function validateEmailFormat(emailField) {
    var errorDiv = document.getElementById('emailFormatError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        errorDiv.style.display = 'block';
        return false;
    } else {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
        checkEmailAgainstList(emailField);
        return true;
    }
}

function checkEmailAgainstList(emailField) {
    var errorDiv = document.getElementById('emailListError');
    errorDiv.textContent = ''; 
    var request = new XMLHttpRequest();
    request.onload = function() {
        if (this.status == 200 && this.responseXML) {
            var emails = this.responseXML.getElementsByTagName('email');
            var emailArray = Array.from(emails).map(function(node) {
                return node.textContent.trim().toLowerCase();
            });
            if (emailArray.includes(emailField.value.trim().toLowerCase())) {
                errorDiv.textContent = 'This email address is not allowed to post feedback.';
                errorDiv.style.display = 'block';
            } else {
                errorDiv.textContent = '';
                errorDiv.style.display = 'none';
            }            
        } else {
            errorDiv.textContent = 'Error checking email against list.';
            errorDiv.style.display = 'block';
        }
    };
    request.onerror = function() {
        errorDiv.textContent = 'Error connecting to the server.';
        errorDiv.style.display = 'block';
    };
    request.open('GET', '../xml/validEmails.xml', true);
    request.send();
}

function validateForm(event) {
    event.preventDefault();
    var nameValid = validateNotEmpty(document.forms["feedbackForm"]["name"]);
    var emailValid = validateEmailFormat(document.forms["feedbackForm"]["email"]);
    var commentsValid = validateNotEmpty(document.forms["feedbackForm"]["comments"]);

    if (nameValid && emailValid && commentsValid) {
    }
}