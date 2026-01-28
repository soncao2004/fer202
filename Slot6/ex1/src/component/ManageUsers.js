import React from 'react';
import { ListOfUsers } from './ListOfUsers';

const ManageUsers = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white shadow-sm border border-gray-100 mt-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="serif text-3xl">Quản lý người dùng</h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Danh sách thành viên hệ thống</p>
        </div>
        <button className="border border-black px-5 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition">
          Thêm User +
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400 font-medium">ID</th>
              <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400 font-medium">Avatar</th>
              <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400 font-medium">Username</th>
              <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400 font-medium">Password</th>
              <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400 font-medium">Status</th>
              <th className="py-4 text-right text-[10px] uppercase tracking-widest text-gray-400 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {ListOfUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                <td className="py-4 text-sm text-gray-500">#0{user.id}</td>
                <td className="py-4">
                  <img src={user.avatar} alt={user.userName} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-gray-200" />
                </td>
                <td className="py-4 text-sm font-medium">{user.userName}</td>
                <td className="py-4 text-sm text-gray-300 font-mono">{user.password}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 text-[9px] uppercase tracking-tighter rounded-full ${
                    user.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 text-right space-x-4">
                  <button className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black">Edit</button>
                  <button className="text-[10px] uppercase tracking-widest text-red-300 hover:text-red-600">Lock</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;