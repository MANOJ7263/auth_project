# 🔐 Full Stack Authentication App

This is a full-stack authentication application built using **Spring Boot** for the backend and **React.js** for the frontend. It supports user **Sign Up**, **Sign In**, and a **Thank You** dashboard page after successful login.

## 📁 Project Structure

auth_project/
│
├── backend/ # Spring Boot API
│ └── src/
│
├── client/ # React frontend
│ └── src/
│
└── README.md # This file

---

## ⚙️ Technologies Used

### Backend:
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL Database
- CORS Configuration

### Frontend:
- React.js
- React Router DOM
- Axios
- Bootstrap (optional)

---

## 🚀 Setup Instructions

### 1. Clone the repository

git clone https://github.com/MANOJ7263/auth_project.git
cd auth_project
---
###2. Backend Setup (Spring Boot)

Open backend folder in your IDE (e.g., IntelliJ or VS Code)
Configure database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

Run the application (BackendApplication.java)
---
###3. Frontend Setup (React)

cd client
npm install
npm start

Features

🔐 User Sign Up

🔑 User Login

🔒 Protected Thank You Page

🔁 Routing using React Router

✅ Token-based or Session logic ready for extension
---
Screenshots

<img width="1914" height="1147" alt="image" src="https://github.com/user-attachments/assets/f10332c6-619c-4feb-92b8-ab05f69203a2" />
<img width="1912" height="1145" alt="image" src="https://github.com/user-attachments/assets/4504f99c-ed32-4a3e-a186-3088fefe8532" />

---
Future Enhancements

JWT-based secure authentication

Email verification

Forgot password

Role-based access
---
Contributing
Pull requests are welcome! If you find any bugs or have suggestions, feel free to open an issue or a PR.
----

License
This project is licensed under the MIT License.
---
Developed by
Manoj Raja
GitHub | LinkedIn

---
- Create a file named `README.md` in your `auth_project` folder.
- Paste the above content into it.
- Replace `your_db_name`, `your_username`, and screenshots if needed.
- Then add, commit, and push:

git add README.md
git commit -m "Added README.md"
git push

