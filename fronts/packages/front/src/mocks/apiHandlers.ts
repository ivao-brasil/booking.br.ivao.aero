import { rest } from "msw";
import { Env } from 'env';
import testData from "./data/TestEvents";

export const handlers = [
    rest.get(`${Env.API_HOST}/event`, (req, res, ctx) => {
        const result = {
            "page": 1,
            "perPage": req.params.perPage,
            "total": testData.length,
            "data": testData
        }

        return res(ctx.json({ ...result }));
    })
];
