import { Router } from "express";
import { getTags, createTag, getTagsByName } from "../controllers/tag.controller";

const route = Router();

route.get("/all", getTags);
route.post("/newTag", createTag);
route.get("/getBy", getTagsByName);

export default route;
