function run() {
  let c = +document.getElementById("cantigrade").value;
  console.log(c);
  if (c !== 0) {
    let f = c * 1.8 + 32;
  document.getElementById("output").innerHTML = f;

  } else {

  document.getElementById("output").innerHTML = "";

  }

}