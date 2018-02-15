
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
}
function response(data) {
  //window.location.href = 'views/add.html';

}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(response).error(onError);
}
