const fs = require('fs').promises

async function getInfo() {
    const bears = (await fs.readFile('./topics/bears.json', 'utf-8')).trim().split('_____')
    const tasty = (await fs.readFile('./topics/tasty.json', 'utf-8')).trim().split('_____')
    const infoBears = [];
    for (let i = 1; i < bears.length; i+=2) {
        infoBears.push({question:bears[i], answers:bears[i+1]});
    }
    const infoTasty = [];
    for (let i = 1; i < tasty.length; i+=2) {
        infoTasty.push({question:tasty[i], answers:tasty[i+1]});
    }
    const result = [{theme:bears[0], questions:infoBears},{theme:tasty[0], questions:infoTasty}]
    return result;
}
getInfo();
