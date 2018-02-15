let $photo = $('#photo');
let $name = $('#name');
let $lastname = $('#lastname');
let $studyPlace = $('#study-place');
let $contacts = $('#contacts');

function profile() {
  let url = localStorage.pictureUrl;
  $photo.attr('src', url);

  $name.text(localStorage.Name);
  $lastname.text(localStorage.lastName);
  $studyPlace.text(localStorage.place);
  $contacts.text(localStorage.connections);
}

profile();
