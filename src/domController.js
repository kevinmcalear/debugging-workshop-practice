function updateDOM(identicon) {
  for(let column = 0; column < 5; column++) {
    for(let row = 0; row < 5; row++) {
      if (identicon.positions[column][row]) {
        document.getElementById(`${row}-${column}`).style.backgroundColor = identicon.colorString
      } else {
        document.getElementById(`${row}-${column}`).style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    }
  }
}
