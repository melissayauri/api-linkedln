
function onLinkedInLoad() {
  IN.Event.on(IN, "auth", getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
  localStorage.Name = data.firstName;
  localStorage.place = data.headline;
  localStorage.lastName = data.lastName;

}
function response(data) {
  localStorage.pictureUrl = data.pictureUrl;
  localStorage.connections = data.numConnections;
  window.location.href = 'views/profile.html';
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw("/people/~").result(onSuccess).error(onError);
  /* Datos de la imagen, contactos*/
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(response).error(onError);
}
