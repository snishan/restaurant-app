import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mockData from '../../data/mock-data.json';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuCategory {
  id: string;
  category: string;
  items: MenuItem[];
}

interface MenuState {
  menu: MenuCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  menu: mockData.menu,
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenu: (state) => {
      state.loading = true;
    },
    fetchMenuSuccess: (state, action: PayloadAction<MenuCategory[]>) => {
      state.menu = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMenuFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMenu,
  fetchMenuSuccess,
  fetchMenuFailure,
} = menuSlice.actions;

export default menuSlice.reducer;