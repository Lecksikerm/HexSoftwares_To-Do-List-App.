# 📝 Professional To-Do List App

A clean and modern **To-Do List application** built with **HTML, CSS, and Vanilla JavaScript**.  
The app allows users to manage daily tasks efficiently with support for task creation, editing, completion, deletion, and persistent storage using the browser’s `localStorage`.

---

## 🚀 Features

- ➕ Add new tasks  
- ✏️ Edit existing tasks  
- ✅ Mark tasks as completed  
- 🗑️ Delete tasks  
- 💾 Persistent data storage using `localStorage`  
- 🎨 Professional, responsive UI  

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure  
- **CSS3** – Modern styling and layout  
- **JavaScript (ES6+)** – Application logic and state management  
- **Browser Local Storage** – Persistent data storage  

---

## 📁 Project Structure

todo-app/
│
├── index.html # Main HTML structure
├── style.css # Styling and UI design
└── script.js # Application logic


---

## ⚙️ How to Run the Project

### Option 1: Run Directly in Browser
1. Clone or download the repository
2. Open `index.html` in any modern browser

### Option 2: Use VS Code Live Server (Recommended)
1. Open the project in **VS Code**
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

---

## 🧠 How It Works

- Tasks are stored as JavaScript objects
- All tasks are saved to `localStorage` on every update
- On page load, saved tasks are automatically restored
- Editing a task updates the existing entry instead of creating a duplicate

---

## 📌 Example Task Object

```js
{
  text: "Finish project documentation",
  completed: false
}

---

# Live URL= https://hexsoftwares-to-do-list-app.onrender.com/