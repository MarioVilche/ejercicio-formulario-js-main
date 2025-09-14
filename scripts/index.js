const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  const email = document.querySelector("#email-input").value
  // 2. Obtenemos los datos ingresados en el input de password
  const password = document.querySelector("#password-input").value
  // 3. Obtenemos el valor del input radio
  const radio = document.querySelectorAll(".age-input")
  // 4. Obtenemos el valor del input checkbox
  const checkbox = document.querySelector("#tyc-input")
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  let edadSeleccionada = null
  let edadLegal = null

  radio.forEach((input) => {
    if (input.checked){
      edadSeleccionada = input.id
    }
  })

  if (edadSeleccionada === "age_yes"){
    edadLegal = true
  } else {
    alert("Debes ser mayor de edad para registrarte en el sitio")
    return
  }
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  if (checkbox.checked ==! true){
    alert("Debes aceptar los TyCs para registrarte en el sitio")
    return
  }
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  console.log({
    email,
    password,
    edadLegal: edadLegal,
    aceptoTyC: checkbox.checked
  });
});
