$(document).ready(function() {
  /* variables para posicionar los datos*/
  let $photo = $('#photo');
  let $name = $('#name');
  let $studyPlace = $('#study-place');
  let $contacts = $('#contacts');

  /* función para traer los datos de la persona que inicia sesión*/
  function profile() {
    /* imagen*/
    let link = localStorage.pictureUrl;
    /* incorporando la ruta a la imagen*/
    $photo.attr('src', link);
    /* apellido y nombre*/
    $name.text(localStorage.Name + localStorage.lastName);
    /* referencia*/
    $studyPlace.text(localStorage.place);
    /* contactos*/
    $contacts.text('Contactos :' + localStorage.contacts);
  }
  profile();
});
