import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    pet:{},
    petHousehold:{},
    aboutPet:{},
    petType:{},
    petHealth: {},
    petStory: {},
    finalCheck: {},
  },
  reducers: {
    updatePet: (state, action) => {
      state.petHealth = action.payload;
    },
    updatePetHousehold: (state, action) => {
      state.petHealth = action.payload;
    },
    updateAboutPet: (state, action) => {
      state.petHealth = action.payload;
    },
    updatePetType: (state, action) => {
      state.petHealth = action.payload;
    },
    updatePetHealth: (state, action) => {
      state.petHealth = action.payload;
    },
    updatePetStory: (state, action) => {
      state.petStory = action.payload;
    },
    updateFinalCheck: (state, action) => {
      state.finalCheck = action.payload;
    },
    clearFormData: (state) => {
      state.pet = {};
      state.petHousehold = {};
      state.aboutPet = {};
      state.petType = {};
      state.petHealth = {};
      state.petStory = {};
      state.finalCheck = {};
    },
  },
});

export const { updatePet,updatePetHousehold,updateAboutPet,updatePetType,updatePetHealth, updatePetStory, updateFinalCheck, clearFormData } = formSlice.actions;
export default formSlice.reducer;

