import { Op } from "sequelize";
import { Tag } from "../models/Tag.model";

export async function getTags(req, res) {
  try {
    const tags = await Tag.findAll();
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
    const { name, slug } = tag;
    if (!name || !slug)
      res.status(400).json({
        error: "name or slug field is missing",
      });
    const newTag = Tag.create({
      name,
      slug
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

export async function getTagsByName(req, res) {
  try {
    const { name } = req.query;
    const tags = await Tag.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    });
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