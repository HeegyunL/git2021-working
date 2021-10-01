import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  image: string | undefined;
  username: string | undefined;
}

const initialState: ProfileState = {
  image: "penguin",
  username: "Heegyun Lee",
};


export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<ProfileState>) => {
      console.log(action.type);
      console.log(action.payload);
      const profile = action.payload;
      state.image = profile.image;
      state.username = profile.username;
    },
  },
});
export const { saveProfile } = profileSlice.actions;

export default profileSlice.reducer;