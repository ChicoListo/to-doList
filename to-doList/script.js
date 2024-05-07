// Click en el boton de cerrar para esconder la tarea
var close = document.querySelectorAll('.close');
close.forEach(function (el) {
  el.addEventListener('click', function () {
    var div = this.parentElement;
    div.style.display = "none";
  });
});

// Agregar un boton de checado cuando la tarea este hecha
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// agregar una tarea a la lista cuando se presione el boton agregar
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("Debes escribir una tarea! D:");
  } else {
    var li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    span.textContent = "\u00D7";
    span.className = "close";
    li.appendChild(span);

    span.addEventListener('click', function () {
      var div = this.parentElement;
      div.style.display = "none";
    });
  }
}
