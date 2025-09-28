import { rest } from "msw";
import { Env } from 'env';
import testData from "./data/TestEvents";

export const handlers = [
    rest.get(`${Env.IVAO_KRONOS_API_SERVER}/event`, (req, res, ctx) => {
        const result = {
            "page": 1,
            "perPage": req.params.perPage,
            "total": testData.length,
            "data": testData
        }

        return res(ctx.json({ ...result }));
    })
];
