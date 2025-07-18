import React from "react";
import {UserProps} from "@/interfaces"; // Must be here exactly

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-700">📧 {email}</p>
      <p className="text-gray-700">📞 {phone}</p>
      <p className="text-gray-700">🌐 {website}</p>
      <p className="text-gray-700 mt-2">
        🏠 {address.street}, {address.city}
      </p>
      <p className="text-gray-700 mt-2">
        🏢 {company.name} - <i>{company.catchPhrase}</i>
      </p>
    </div>
  );
};

export default UserCard;
