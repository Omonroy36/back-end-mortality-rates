import { STRING, INTEGER } from "sequelize";
import sequelize from "./config";

export const Mortality = sequelize.define(
  "mortalities",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_of_occurrence: {
      type: STRING,
    },
    year: {
      type: INTEGER
    },
    month: {
      type: INTEGER
    },
    all_cause: {
      type: INTEGER
    },
    natural_cause: {
      type: INTEGER
    },
    septicemia: {
      type: INTEGER
    },
    malignant_neoplasms: {
      type: INTEGER
    },
    diabetes_mellitus: {
      type: INTEGER
    },
    alzheimer_disease: {
      type: INTEGER
    },
    influenza_and_pneumonia: {
      type: INTEGER
    },
    chronic_lower_respiratory: {
      type: INTEGER
    },
    other_diseases_of_respiratory: {
      type: INTEGER
    },
    nephritis_nephrotic_syndrom: {
      type: INTEGER
    },
    symptoms_signs_and_abnormal: {
      type: INTEGER
    },
    diseases_of_heart: {
      type: INTEGER
    },
    cerebrovascular_diseases: {
      type: INTEGER
    },
    accidents_unintentional: {
      type: INTEGER
    },
    motor_vehicle_accidents: {
      type: INTEGER
    },
    intentional_self_harm_suicide: {
      type: INTEGER
    },
    assault_homicide: {
      type: INTEGER
    },
    drug_overdose: {
      type: INTEGER
    },
  },
  {
    timestamps: false,
  }
);
