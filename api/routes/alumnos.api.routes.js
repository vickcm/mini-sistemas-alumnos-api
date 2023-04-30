import { Router } from "express";
import * as controller from "../controllers/alumnos.api.controllers.js";

const router = Router();

router.get("/students", controller.getAlumnos);
router.post("/students", controller.createAlumno);
router.get("/students/:alumnoLegajo", controller.getAlumnoByLegajo);
router.put("/students/:alumnoLegajo", controller.replaceAlumno);
router.patch("/students/:alumnoLegajo", controller.updateAlumno);
router.delete("/students/:alumnoLegajo", controller.deleteAlumno);


export default router;
