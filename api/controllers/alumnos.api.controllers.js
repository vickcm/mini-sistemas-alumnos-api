import * as service from '../../services/alumnos.services.js'


function getAlumnos(req, res) {
    service.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.status(200).json(alumnos)
            
        })
}

function createAlumno(req, res) {
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: req.body.anio,
    }
    service.createAlumno(alumno)
        .then(function (alumno) {
            res.status(201).json(alumno)
        })



}

function getAlumnoByLegajo(req, res) {
    
    let alumnoLegajo = req.params.alumnoLegajo // 1    service.getAlumnoByLegajo(alumnoLegajo)
    service.getAlumnoByLegajo(alumnoLegajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ message: `Alumno con legajo ${alumnoLegajo} no encontrado` })
            }
        })
}

function replaceAlumno(req, res) {

    let legajo = req.params.alumnoLegajo // 1    service.getAlumnoByLegajo(alumnoLegajo)

    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: req.body.anio,
    }

    service.editAlumno(legajo, alumno)
        .then(function (alumno) {

            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ message: `Alumno con legajo ${legajo} no encontrado` })
            }
        })
}

function updateAlumno(req, res) { 
    let legajo = req.params.alumnoLegajo // 1    service.getAlumnoByLegajo(alumnoLegajo)
    const alumno = {}
    if (req.body.nombre) {
        alumno.nombre = req.body.nombre
    }
    if (req.body.apellido) {
        alumno.apellido = req.body.apellido
    }
    if (req.body.anio) {
        alumno.anio = req.body.anio
    }
      

    service.editAlumno(legajo, alumno)
        .then(function (alumno) {

            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ message: `Alumno con legajo ${legajo} no encontrado` })
            }
        })
}

function deleteAlumno(req, res) {
    let legajo = req.params.alumnoLegajo // 1    service.getAlumnoByLegajo(alumnoLegajo)
    service.deleteAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ message: `Alumno con legajo ${legajo} no encontrado` })
            }
        })
}

/* function undeletedAlumno(req, res) {
    let legajo = req.params.alumnoLegajo // 1    service.getAlumnoByLegajo(alumnoLegajo)
    service.undeletedAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ message: `Alumno con legajo ${legajo} no encontrado` })
            }
        })
} */



export { getAlumnos, createAlumno, getAlumnoByLegajo, replaceAlumno, updateAlumno, deleteAlumno }
