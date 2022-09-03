import { Tag } from "../models/Tag.model";

export async function getTags(req, res) {
  try {
    const tags = Tag.findAll();
    if (tags)
      res.status(200).json({
        results: tags,
      });
    else
      res.status(404).json({
        msg: "no tags where found",
      });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

export async function createTag(req, res) {
  try {
    const tag = req.body;
    const { name } = newTag;
    if (!name || !slug)
      res.status(400).json({
        error: "name field is missing",
      });
    const newTag = Tag.create({
      name,
    });
    if (newTag)
      res.status(200).json({
        msg: "tag created",
      });
    else
      res.status(404).json({
        msg: "error creating tag",
      });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}
