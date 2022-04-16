window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let title = document.querySelector("#title")
    title.focus()
    let form = document.querySelector(".form")

    form.addEventListener("submit", (e) => {

        let errores = []
        let rating = document.querySelector("#rating")
        let awards = document.querySelector("#awards")
        let length = document.querySelector("#length")
        let release_date = document.querySelector("#release_date")
        let genre_id = document.querySelector("#genre_id")

        if (title.value == "") {
            title.classList.add("is-invalid")
            errores.push("El campo título no puede estar vacío")
        } else {
            title.classList.remove("is-invalid")
            title.classList.add("is-valid")
        }
        if (rating.value != "") {
            if (rating.value >= 0 && rating.value <= 10) {
                rating.classList.remove("is-invalid")
                rating.classList.add("is-valid")
            }
            else
                errores.push("La calificación debe valer entre 0 y 10")
        }
        else {
            rating.classList.add("is-invalid")
            errores.push("El campo Calificación no puede estar vacío")
        }
        if (awards.value != "") {
            if (awards.value >= 0 && awards.value <= 10) {
                awards.classList.remove("is-invalid")
                awards.classList.add("is-valid")
            }
            else
                errores.push("Debe haber entre 0 y 10 premios")

        } else {
            awards.classList.add("is-invalid")
            errores.push("El campo Premios no puede estar vacío")
        }
        if (length.value != "") {
            if (length.value >= 60 && length.value <= 360) {
                length.classList.remove("is-invalid")
                length.classList.add("is-valid")
            }
            else

                errores.push("La duración debe estar entre 60 y 360 minutos")

        } else {
            length.classList.add("is-invalid")
            errores.push("El campo duración no puede estar vacío")
        }
        if (release_date.value == "") {
            release_date.classList.add("is-invalid")
            errores.push("El campo fecha no puede estar vacío")
        } else {
            release_date.classList.remove("is-invalid")
            release_date.classList.add("is-valid")
        } if (genre_id.value == "") {
            genre_id.classList.add("is-invalid")
            errores.push("El campo género no puede estar vacío")
        } else {
            genre_id.classList.remove("is-invalid")
            genre_id.classList.add("is-valid")
        }

        if (errores.length > 0) {
            e.preventDefault()
            let ulErrors = document.querySelector(".errores")
            let labelTitle = document.querySelector(".labelTitle")
            ulErrors.innerText = ""
            errores.forEach(error =>
                ulErrors.innerHTML += "<li>" + error + "</li>"
            )
            labelTitle.innerHTML = "<br> Titulo"
        }
        else
            alert("La película se guardó satisfactoriamente")

    })

}