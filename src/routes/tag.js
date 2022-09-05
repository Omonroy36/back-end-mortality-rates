import { Router } from "express";
import { getTags, createTag, getTagsByName, populateTags } from "../controllers/tag.controller";

const route = Router();

route.get("/getAll", getTags);
route.post("/newTag", createTag);
route.get("/getBy", getTagsByName);
route.post("/populate", populateTags);

export default route;
