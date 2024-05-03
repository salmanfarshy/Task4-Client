import React from "react";

function Users_table({
  selectAll,
  selectedItems,
  users,
  handleAllCheckboxChange,
  handleCheckboxChange,
}) {
  return (
    <div className="relative overflow-auto max-h-[30rem] sm:rounded-lg px-20 mt-16 mb-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-gray-800 text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleAllCheckboxChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email address
            </th>
            <th scope="col" className="px-6 py-3">
              last login time
            </th>
            <th scope="col" className="px-6 py-3">
              registration time
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-100">
          {users.map((user) => (
            <tr
              key={user.userId}
              className="border-b bg-gray-700 border-gray-800"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={user.userId}
                    checked={
                      !selectedItems.length
                        ? false
                        : selectedItems.includes(user.userId) || undefined
                    }
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                  />
                </div>
              </td>
              <th className="px-6 py-4">{user.userId}</th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td
                className={
                  !user.lastLoginTime ? "px-6 py-4 text-gray-400" : "px-6 py-4"
                }
              >
                {user.lastLoginTime || "Not logged in yet"}
              </td>
              <td className="px-6 py-4">{user.registrationTime}</td>
              <td
                className={
                  user.status
                    ? "px-6 py-4 text-green-400"
                    : "px-6 py-4 text-red-500"
                }
              >
                {user.status ? "Active" : "Blocked"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users_table;
