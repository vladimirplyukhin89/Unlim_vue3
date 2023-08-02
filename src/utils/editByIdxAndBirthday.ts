import { IPlayers, IFormattedPlayers } from "./../models/IPlayers";

export const editByIdxAndBirthday = (
	players: IPlayers[]
): IFormattedPlayers[] => {
	return players.map((player, index) => ({
		...player,
		birthday: player.birthday.split("-").reverse().join("."),
		sortByIdx: index + 1,
	}));
};
