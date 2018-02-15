
window.addEventListener('load', function() {
  let container = document.getElementById('information');
  /* creando la foto*/
  let img = document.createElement('img');
  img.setAttribute('alt', 'photo');
  img.setAttribute('src', localStorage.picture);
  container.appendChild(img);
  /* creando el nombre y apellido*/
  let name = document.createElement('h1');
  name.innerText = localStorage.Name + localStorage.lastName;
  container.appendChild(name);
  /* creando referencia*/
  let reference = document.createElement('p');
  reference.innerText = localStorage.place;
  container.appendChild(reference);
  /* creando el n° de contactos*/
  let contacts = document.createElement('p');
  contacts.innerText = 'Contactos :' + localStorage.contacts;
  container.appendChild(contacts);
});
