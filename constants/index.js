export const FROM_DATA = 'Екатеринбург'
export const TO_DATA = 'Каменск-Уральский'
export const WEEK_DAY = 6

let testDay = new Date ()
testDay.setDate(testDay.getDate() + (WEEK_DAY + 7 - testDay.getDay()) % 7);
let nextTestDay =  testDay.getUTCDate();

export const WHEN_DATA = nextTestDay

export default {
    FROM_DATA,
    TO_DATA,
    WEEK_DAY,
    WHEN_DATA
}
