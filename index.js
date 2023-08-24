function formValidation() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var pwd = document.getElementById("pwd").value;
            var dob = new Date(document.getElementById("dob").value);
            var terms = document.getElementById("terms").checked;

            var todayDate = new Date();
            var minimumAge = 18;
            var maximumAge = 55;
            var minimumDate = new Date(todayDate.getFullYear() - maximumAge, todayDate.getMonth(), todayDate.getDate());
            var maximumDate = new Date(todayDate.getFullYear() - minimumAge, todayDate.getMonth(), todayDate.getDate());

            if (dob < minimumDate || dob > maximumDate) {
                alert("Date of birth must be between " + minimumAge + " and " + maximumAge + " years");
                return false;
            }

            if (!terms) {
                alert("The terms and conditions must be accepted");
                return false;
            }

            return true;
        }

        function formDataDisplay() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
			var pwd = document.getElementById("pwd").value;
            var dob = document.getElementById("dob").value;
			var terms = document.getElementById("terms").checked;
            var output = document.getElementById("output");
            output.innerHTML = `
			<h2><center>Entries</center></h2><table><tr><th>Name</th><th>Email</th><th>Password</th><th>Date of Birth</th><th>Accepted Terms?</th></tr>
			<tr><td>${name}</td><td>${email}</td><td>${pwd}</td><td>${dob}</td><td>${terms}</td></tr></table>
                `;
        }