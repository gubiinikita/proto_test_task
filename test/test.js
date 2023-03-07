import {deviationChecker, requestUrl, avg} from './helper';
import superagent from 'superagent';
import config from "../env/config";

const {baseDiceMax, baseDiceMin} = config;

describe('Dices distribution', () => {
    const rollsNum = process.env.ROLLS_NUM || 10;
    const min = process.env.MIN || baseDiceMin;
    const max = process.env.MAX || baseDiceMax;

    it(`${min} dice distribution`, async () => {
        console.log(`Roll with parameters: number of rolls [${rollsNum}], count of dices [${min}]`);

        const res = await superagent.get(requestUrl(rollsNum, min, max));
        const resArray = res.text.split(`\n`).filter(Boolean);
        deviationChecker(resArray, avg(rollsNum, min, max));
    });
});