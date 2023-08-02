export interface IPlayers {
	id: number;
	name: string;
	surname: string;
	birthday: string;
}

export interface IFormattedPlayers {
	id: number;
	name: string;
	surname: string;
	birthday: string;
	sortByIdx: number;
}
