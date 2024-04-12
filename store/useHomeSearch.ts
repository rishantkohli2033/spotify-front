import { create, SetState } from "zustand";

interface HomeSearchState {
    searchClicked: boolean;
    setSearchClicked: (val: boolean) => void;
    homeClicked: boolean;
    setHomeClicked: (val: boolean) => void;
}

const useHomeSearch = create<HomeSearchState>((set) => ({
    searchClicked: false,
    setSearchClicked: (val: boolean) => set({ searchClicked: val }),
    homeClicked: false,
    setHomeClicked: (val: boolean) => set({ homeClicked: val }),
}));

export default useHomeSearch;

