import { createStore } from "vuex";

interface IState {
	selectedName: string;
}

const initialState: IState = {
	selectedName: "",
};

export default createStore({
	state: initialState,
	mutations: {
		setSelectedName(state, name) {
			state.selectedName = name;
		},
	},
	actions: {
		selectName(state, name) {
			state.commit("setSelectedName", name);
		},
	},
	getters: {
		selectedName: (state) => state.selectedName,
	},
});
