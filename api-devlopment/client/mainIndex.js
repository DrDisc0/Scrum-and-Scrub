let dynamicFieldCount = 0;

document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .catch(error =>{console.error('error fetching stuff:', error);

    });
});

        // Add a new input box
        function addField(label) {
            dynamicFieldCount++;
            const fieldWrapper = document.createElement('div');
            fieldWrapper.classList.add('mb-3');
            fieldWrapper.id = `fieldWrapper${dynamicFieldCount}`;

            fieldWrapper.innerHTML = `
                <label class="form-label">${label}</label>
                <input type="text" class="form-control" data-label="${label}" id="field${dynamicFieldCount}" placeholder="Enter ${label}">
            `;
            document.getElementById('dynamicFields').appendChild(fieldWrapper);
        }

        function displayUserInfo() {
            // Retrieve values from the form
            const name = document.getElementById('name').value || "N/A";
            const age = document.getElementById('age').value || "N/A";
            const contact = document.getElementById('contact').value || "N/A";

            // 显示主要信息
            document.getElementById('displayName').textContent = name;
            document.getElementById('displayAge').textContent = age;
            document.getElementById('displayContact').textContent = contact;

            // Dynamically retrieve and display additional input information
            const additionalFieldsContainer = document.getElementById('displayAdditionalFields');
            additionalFieldsContainer.innerHTML = '';
            for (let i = 1; i <= dynamicFieldCount; i++) {
                const inputField = document.getElementById(`field${i}`);
                const label = inputField.getAttribute('data-label');
                const value = inputField.value || "N/A";

                const fieldCard = document.createElement('div');
                fieldCard.classList.add('card');
                fieldCard.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${label}</h5>
                        <p class="card-text">${value}</p>
                    </div>
                `;
                additionalFieldsContainer.appendChild(fieldCard);
            }

            {
                const name = document.querySelector('#name');
                const nameDb = name.value;
                name.value = "";
                const age = document.querySelector('#age');
                const ageDb = age.value;
                age.value = "";
                const contact = document.querySelector('#contact');//phone num
                const contactDb = contact.value;
                contact.value = "";
                /*const background = document.querySelector('');
                const focus = document.querySelector('');//career focus
                const projects = document.querySelector('');//project
                const achieve = document.querySelector('');
                */
        
                const dataToSend = {
                    phoneNumber: contactDb,
                    age: ageDb,
                    firstName: nameDb,
                    //lastName: Lname,
                    //email: email,
                    //careerFocus: career
                  };
                  
            
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({dataToSend})
                })
                .then(res => res.json);

                console.log(dataToSend);
            }
        

            // Switch page view
            document.getElementById('userFormSection').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
        }
       

