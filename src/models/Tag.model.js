import { STRING, INTEGER } from "sequelize";
import sequelize from "./config";

export const Tag = sequelize.define(
  "tags",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    slug: {
      type: STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    timestamps: false,
  }
);
