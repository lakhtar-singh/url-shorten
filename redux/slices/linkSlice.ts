import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Link {
  short_link: string;
  original_link: string;
  click: number;
  status: string;
  date: string;
}

interface LinkState {
  links: Link[];
}

const initialState: LinkState = {
  links: [],
};

const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setLinks: (state, action: PayloadAction<Link[]>) => {
      state.links = action.payload;
    },
    addLink: (state, action: PayloadAction<Link>) => {
      state.links.push(action.payload);
    },
  },
});

export const { setLinks, addLink } = linkSlice.actions; // ✅ Export the action

export default linkSlice.reducer;
