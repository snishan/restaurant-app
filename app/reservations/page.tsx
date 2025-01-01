'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { fetchReservations } from '@/lib/store/reducers/reservationsSlice';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { MoreVertical } from 'lucide-react';
import Loader from '@/components/ui/loader';

export default function ReservationsPage() {
  const dispatch = useDispatch();
  const { reservations, loading } = useSelector((state: RootState) => state.reservations);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationsPerPage] = useState(7); // Number of reservations per page

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  // Filter reservations based on search query
  const filteredReservations = reservations.filter((reservation) =>
    reservation.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalReservations = filteredReservations.length;
  const totalPages = Math.ceil(totalReservations / reservationsPerPage);

  // Get current reservations to display on the current page
  const indexOfLastReservation = currentPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = filteredReservations.slice(indexOfFirstReservation, indexOfLastReservation);


  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Reservations</h1>

      {/* Search Section */}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search by customer name..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Reservations Table */}
      <div className="rounded-lg shadow overflow-x-auto">
        <Table className='bg-white/50 backdrop-blur'>
          <TableHeader className='bg-white backdrop-blur-sm'>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Guests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentReservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.customerName}</TableCell>
                <TableCell>{reservation.date}</TableCell>
                <TableCell>{reservation.time}</TableCell>
                <TableCell>{reservation.guests}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm capitalize ${
                      reservation.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : reservation.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {reservation.status}
                  </span>
                </TableCell>
                <TableCell>
                  <MoreVertical size={20} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
