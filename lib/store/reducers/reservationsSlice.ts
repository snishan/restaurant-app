import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mockData from '../../data/mock-data.json';

interface Reservation {
  id: string;
  customerName: string;
  date: string;
  time: string;
  guests: number;
  status: string;
  specialRequests?: string;
}

interface ReservationsState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationsState = {
  reservations: mockData.reservations,
  loading: false,
  error: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    fetchReservations: (state) => {
      state.loading = true;
    },
    fetchReservationsSuccess: (state, action: PayloadAction<Reservation[]>) => {
      state.reservations = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchReservationsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchReservations,
  fetchReservationsSuccess,
  fetchReservationsFailure,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;