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
    rehomerId: null,
  },
  reducers: {
    updatePet: (state, action) => {
      state.pet = action.payload;
    },
    updateRehomerId: (state, action) => {
      state.rehomerId = action.payload; // Action to update rehomerId
    },

    updatePetHousehold: (state, action) => {
      state.petHousehold = action.payload;
    },
    updateAboutPet: (state, action) => {
      state.aboutPet = action.payload;
    },
    updatePetType: (state, action) => {
      state.petType = action.payload;
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
      state.rehomerId = null;
    },
  },
});

export const { updatePet,updatePetHousehold,updateAboutPet,updatePetType,updatePetHealth, updatePetStory, updateFinalCheck,updateRehomerId, clearFormData } = formSlice.actions;
export default formSlice.reducer;

