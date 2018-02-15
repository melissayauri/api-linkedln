$(document).ready(function() {
  /* variables para posicionar los datos*/
  let $photo = $('#photo');
  let $name = $('#name');
  let $lastname = $('#lastname');
  let $studyPlace = $('#study-place');
  let $contacts = $('#contacts');

  /* función para traer los datos de la persona que inicia sesión*/
  function profile() {
    let link = localStorage.pictureUrl;
    $photo.attr('src', link);
    $name.text(localStorage.Name);
    $lastname.text(localStorage.lastName);
    $studyPlace.text(localStorage.place);
    $contacts.text(localStorage.connections);
  }
  profile();
});
