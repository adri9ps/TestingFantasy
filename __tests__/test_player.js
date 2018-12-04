const Player = require('../app/data/player').Player;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
const readJSONData = require('../app/data/json_reader').readJSONData;

let jsonObjects = readJSONData('./data/sample.json');
let arrayPlayers = extractDataFromRawJSON(jsonObjects);

const cristiano=arrayPlayers[0];
const ramos=arrayPlayers[1];



test('test isForward',()=>{

    expect(cristiano.isForward()).toBe(true);
	expect(ramos.isForward()).toBe(false);
});