import { Router } from "express";
import { getTags, createTag } from "../controllers/tag.controller";

const route = Router();

route.get("/all", getTags);
route.post("/newTag", createTag);

export default route;
