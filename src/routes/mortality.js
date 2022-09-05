import { Router } from "express";
import { populateModel, getAll, getBy } from "../controllers/mortality.controller";

const route = Router();

route.post("/populate", populateModel);
route.get("/getAll", getAll);
route.get("/getBy", getBy)

export default route;