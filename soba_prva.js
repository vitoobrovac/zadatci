function showNote() {
    var note = document.getElementById("papirek");
    if (note.style.display === "none" || note.style.display === "") {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  }

  let button = document.getElementById('gumbic');
    button.addEventListener('click', () => {
      const bla = parseInt(document.getElementById('bla').value);
      var dynamicLink = document.createElement("a");
      var dynamicDiv = document.createElement("div");

      if (bla === 27) {
        dynamicLink.classList.add("linkzasobu");
        dynamicLink.textContent = "zadatak 2";
        dynamicLink.href="/soba_druga/soba_druga.html"
        var container = document.getElementById("stolcina");
        container.appendChild(dynamicLink);
      } else{
        dynamicDiv.classList.add("linkzasobu");
        dynamicDiv.textContent = "probaj opet";
        var container = document.getElementById("stolcina");
        container.appendChild(dynamicDiv);
      }
    });