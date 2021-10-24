import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@timshop.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@timshop.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@timshop.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
