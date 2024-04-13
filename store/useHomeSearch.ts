import { create } from "zustand";

interface HomeSearchState {
    searchClicked: boolean;
    setSearchClicked: (val: boolean) => void;
    homeClicked: boolean;
    setHomeClicked: (val: boolean) => void;
    player: boolean;
    setPlayer: (val: boolean) => void;
    playerImage: string,
    setPlayerImage: (val: string) => void;
    playerName: string,
    setPlayerName: (val: string) => void;
    playerAuthor: string,
    setPlayerAuthor: (val: string) => void;
}

const useHomeSearch = create<HomeSearchState>((set) => ({
    searchClicked: false,
    setSearchClicked: (val: boolean) => set({ searchClicked: val }),
    homeClicked: false,
    setHomeClicked: (val: boolean) => set({ homeClicked: val }),
    player: false,
    setPlayer: (val: boolean) => set({player: val}),
    playerImage: "",
    setPlayerImage: (val: string) => set({playerImage: val}),
    playerName: "",
    setPlayerName: (val: string) => set({playerName: val}),
    playerAuthor: "",
    setPlayerAuthor: (val: string) => set({playerAuthor: val})
}));

export default useHomeSearch;

