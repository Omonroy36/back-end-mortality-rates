import { Mortality } from "../models/Mortality.model";
import axios from "axios";

export async function populateModel(req, res) {
    try {
        const request = await axios.get(process.env.DATA_API);
        const { data } = request;
        for (let row of data) {
            await Mortality.create(row);
        }
        res.status(200).json({
            msg: 'db populated'
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

export async function getAll(req, res) {
    try {
        const mortalities = await Mortality.findAll({
            order: [['year', 'ASC']]
        });
        if (mortalities) res.status(200).json({
            results: mortalities,
        });
        else res.status(404).json({
            msg: "no mortalities where found",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

export async function getBy(req, res) {
    try {
        const { year, tag } = req.query;
        const mortalities = await Mortality.findAll({
            where: { year: year },
            attributes: [tag, "month", "year", "jurisdiction_of_occurrence"],
            order: [["month", "ASC"]],
        });
        if (mortalities) res.status(200).json({
            results: mortalities,
        });
        else res.status(404).json({
            msg: "no mortalities where found",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
};

