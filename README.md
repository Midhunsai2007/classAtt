# 🎓 Class Attendance Tracker

A modern, professional web-based attendance management system designed for university sections. Built with a sleek **Glassmorphism UI**, it offers a seamless experience for faculty to track student attendance, manage class duration, and generate instant absentee reports.

## ✨ Features

- **🎨 Modern Glassmorphism UI**: A premium, frosted-glass interface with professional gradients and smooth animations.
- **📅 Smart Date & Duration**: Auto-defaults to the current date and supports **1 Hour** or **2 Hours (Lab)** duration selection.
- **🔍 Real-Time Search**: Instantly filter the student list by Name or Register Number.
- **📋 Seamless Submission**: Mark students as absent and submit to generate a dedicated report.
- **📤 Instant Export**:
    - **Copy for WhatsApp**: One-click button to format and copy the absentee list for faculty groups.
    - **Print Ready**: Optimized layout for physical printing.
- **🛡️ Data Safety**: Built-in confirmation dialogs to prevent accidental submissions or resets.
- **💾 Local Persistence**: Uses browser `localStorage` to securely pass data between pages without a backend.

## 🚀 How to Use

1.  **Open the App**: Simply open `index.html` in any modern web browser.
2.  **Select Details**: Choose the **Subject** and **Class Duration**.
3.  **Mark Attendance**:
    -   All students are marked "Present" by default (Green).
    -   Click "Present" to toggle it to "Absent" (Red).
    -   Use the **Reset** button to clear all absent marks if needed.
4.  **Submit**: Click **Submit Attendance**.
5.  **Review & Export**: On the confirmation page (`absentees.html`), verify the list and use "Copy for WhatsApp" or "Print List".

## 🛠️ Technology Stack

-   **HTML5**
-   **CSS3** (Backdrop filters, Gradients, Flexbox, Animations)
-   **Vanilla JavaScript** (ES6+, DOM Manipulation, LocalStorage)

## 📂 Project Structure

-   `index.html`: Main attendance sheet interface.
-   `absentees.html`: Report generation and export page.
-   `style.css`: Centralized styling for the glassmorphism theme.
-   `script.js`: Core logic for toggling, search, and data handling.

## 📝 License

This project is open-source and free to use for educational purposes.
