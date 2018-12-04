const Team = require('../app/data/team').Team;
const Player = require('../app/data/player').Player;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
const readJSONData = require('../app/data/json_reader').readJSONData;



test('test overral team', () => {

    let player1 = new Player(1);
    player1.overall = 5000;

    let player2 = new Player(2);
    player2.overall = 3000;

    let team = new Team('equipo1');
    team.addPlayers([player1,player2]);

    expect(team.getTeamOverallQuality()).toBe(4000);

});


test('test .any', () => {
    let jsonObject = readJSONData('./data/fifa_data.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObject);
    expect(Team.createRandomTeam(arrayPlayers, '4-5-1', 'Team1', 2000000));
});

test('test random player', () => {

	let player_random = [{
		"_isBack": false,
		"_isForward": true,
		"_isGoalKeeper": false,
		"_isMidfielder": true,
		"age": 27,
		"club": "Atletico de Madrid",
		"country": "France",
		"id": 194765,
		"name": "Antoine Griezmann",
		"overall": 91,
		"value": 87000000
	}];

	expect(Team._getRandomPlayers(player_random, 1)).toEqual(player_random);

});

test('test math.floor tacticas', () => {
	expect(Team._parseTactic('3-5-2')).toEqual([3, 5, 2]);

	expect(() => Team._parseTactic('A-5-2')).toThrowError(Error);
	expect(() => Team._parseTactic('3-A-2')).toThrowError(Error);
	expect(() => Team._parseTactic('3-5-A')).toThrowError(Error);
	expect(() => Team._parseTactic('5-3')).toThrowError(Error);
});

