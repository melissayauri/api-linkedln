
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
  /* almacena el nombre*/
  localStorage.Name = data.firstName;
  /* almacena la referencia */
  localStorage.place = data.headline;
  /* almacena el apellido*/
  localStorage.lastName = data.lastName;
}
function view(data) {
  localStorage.contacts = data.numConnections;
  window.location.href = 'views/profile.html';
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
  /* Datos de la imagen, contactos*/
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(view).error(onError);
}
