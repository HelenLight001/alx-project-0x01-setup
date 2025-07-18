// components/common/UserCard.tsx

import React from "react";
import {UserProps} from "../../interfaces"; // ✅ this fixes the import error

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2>
        {name} (@{username})
      </h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Website:</strong> {website}
      </p>
      <p>
        <strong>Company:</strong> {company.name}
      </p>
      <p>
        <strong>Address:</strong> {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
