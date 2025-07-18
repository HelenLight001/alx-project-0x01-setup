import React, {useState} from "react";
import {UserData, UserModalProps} from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({isOpen, onClose, onAddUser}) => {
  const [formData, setFormData] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {lat: "", lng: ""},
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Math.floor(Math.random() * 10000), // just mock ID
      ...formData,
    };
    onAddUser(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "#000000aa",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          width: "400px",
        }}
      >
        <h2>Add New User</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br />
        <input name="username" placeholder="Username" onChange={handleChange} />
        <br />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <br />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <br />
        <input name="website" placeholder="Website" onChange={handleChange} />
        <br />
        <input
          name="address.street"
          placeholder="Street"
          onChange={handleChange}
        />
        <br />
        <input name="address.city" placeholder="City" onChange={handleChange} />
        <br />
        <input
          name="company.name"
          placeholder="Company"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Add User</button>
        <button onClick={onClose} style={{marginLeft: 10}}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
