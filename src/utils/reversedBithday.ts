import { IPlayers } from "../models";

const reversedBithday = (players: IPlayers[]): IPlayers[] => {
	return players.map((player) => ({
		...player,
		birthday: player.birthday.split("-").reverse().join("."),
	}));
};

export default reversedBithday;
