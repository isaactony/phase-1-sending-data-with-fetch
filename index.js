// Add your code here
const form = document.querySelector('form');



function submitData(name, email) {
    return fetch('http://localhost:3000/users',    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    //data were sending to the server
        body: JSON.stringify({
            name: name,
            email: email

        }),
})
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
        const newSpan = document.createElement('span')
        newSpan.innerHTML = data.id;
        form.append(newSpan);
})
        
    .catch((error) => {
        //console.log(error);
        let errorMessage = document.createElement('span');
        errorMessage.innerHTML = error.message;
        form.append(errorMessage);

    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formdata = event.target.elements
    //console.log(formdata)
    //console.log(formdata.name.value);
   // console.log(formdata.email.value);

    
    //const name = document.querySelector('#dogName').value;
    //const email = document.querySelector('#dogBreed').value;
    
    submitData(formdata.name.value, formdata.email.value);
})

//submitData();
//})
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     //data were sending to the server
//     body: JSON.stringify({
//         name: 'name',
//         email: 'email'

//     })

// }

// function createSpan(data) {
//     const newSpan = document.createElement('span');
//     newSpan.innerHTML = data.id;
//     form.append(newSpan);


// }
