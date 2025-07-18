// components/common/UserCard.tsx

import React from "react";
import {UserProps} from "@/interfaces";

const UserCard: React.FC<{user: UserProps}> = ({user}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-700 mt-2">{user.email}</p>
      <p className="text-sm text-gray-700">{user.phone}</p>
      <a
        href={`http://${user.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:underline"
      >
        {user.website}
      </a>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> "{user.company.catchPhrase}"
        </p>
      </div>

      <div className="mt-2 text-sm text-gray-600">
        <p>
          <strong>Address:</strong> {user.address.suite}, {user.address.street},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <strong>Geo:</strong> ({user.address.geo.lat}, {user.address.geo.lng})
        </p>
      </div>
    </div>
  );
};

export default UserCard;
