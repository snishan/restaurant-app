
'use client';
import React, { useState } from 'react';
import { Search, MoreVertical, ChevronDown, UserPlus } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

const CustomerManagement = () => {
  // Sample customer data
  const initialCustomers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      totalOrders: 15,
      totalSpent: 420.50,
      lastVisit: "2024-12-20",
      status: "active"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@example.com",
      totalOrders: 8,
      totalSpent: 235.75,
      lastVisit: "2024-12-18",
      status: "inactive"
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.w@example.com",
      totalOrders: 23,
      totalSpent: 890.25,
      lastVisit: "2024-12-23",
      status: "active"
    },
    {
      id: 4,
      name: "James Brown",
      email: "j.brown@example.com",
      totalOrders: 12,
      totalSpent: 345.00,
      lastVisit: "2024-12-15",
      status: "active"
    }
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setCustomers(initialCustomers);
    } else {
      const filtered = initialCustomers.filter(customer =>
        customer.name.toLowerCase().includes(term) ||
        customer.email.toLowerCase().includes(term)
      );
      setCustomers(filtered);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <div className="flex justify-end items-center mb-6">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <UserPlus size={20} className="mr-2" />
          Add Customer
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-50 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="mr-2">Status</span>
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="mr-2">Last Order</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Customer Table */}
      <div className=" rounded-lg shadow overflow-x-auto">
        <Table className='bg-white/50 backdrop-blur'>
          <TableHeader className='bg-white backdrop-blur-sm'>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.name}</TableCell>
                <TableCell>{reservation.totalOrders}</TableCell>
                <TableCell>{reservation.totalSpent}</TableCell>
                <TableCell>{reservation.lastVisit}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm capitalize ${reservation.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : reservation.status === 'paused'
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
};

export default CustomerManagement;