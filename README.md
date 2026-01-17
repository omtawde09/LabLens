# LabLens - AI-Based Blood Report Interpretation System

![LabLens Banner](https://via.placeholder.com/1200x400?text=LabLens+Banner) 
<!-- You can replace the above image with a screenshot of your landing page later -->

**LabLens** is a modern, education-focused web application designed to help non-medical users understand their blood test reports. By converting complex medical jargon and raw values into clear, human-readable explanations, LabLens empowers users to have more informed conversations with their healthcare providers.

> **⚠️ DISCLAIMER:** This application is for **educational purposes only**. It does not provide medical diagnoses, treatment advice, or predictive health analysis. Always consult a qualified healthcare professional for any medical concerns.

---

## 🚀 Key Features

*   **Human-Readable Interpretations:** Translates strict medical data into simple "What it is" and "Why it matters" explanations.
*   **Visual Clarity:** Uses a calming, color-coded system (Green/Yellow/Soft Red) to indicate reference ranges without causing alarm.
*   **Demo Mode:** Instantly experience the application's capabilities with a built-in "Demo Report" flow.
*   **Privacy-First:** Reports are processed in the browser (or ephemeral session) - no personal health data is permanently stored.
*   **Premium Design:** Built with a "Trust & Safety" aesthetic using specific color theory to ensure a professional, calming user experience.

## 🛠️ Tech Stack

*   **Frontend:** [React](https://react.dev/) (v18)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** Modern Vanilla CSS (Variables, Flexbox/Grid, Animations) - *No Tailwind dependency*
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Fonts:** Inter (Google Fonts)
*   **OCR Integration:** Architecture ready for [Tesseract.js](https://tesseract.projectnaptha.com/) (Mocked for Demo reliability)

## 📦 Installation & Parsing

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/lablens.git
    cd lablens
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` to view the app.

## 📖 Usage Guide

1.  **Landing Page:** improved understanding of the tool's purpose.
2.  **Upload:**
    *   Drag and drop a PDF or Image of a blood report.
    *   *OR* Click **"Try with Demo Report"** to see a pre-loaded example.
3.  **Analysis:** Watch the simulated AI analysis process.
4.  **Results:**
    *   Expand biomarker cards (e.g., Hemoglobin, Glucose) to read detailed explanations.
    *   Review lifestyle tips and context for specific values.

## 📂 Project Structure

```
lablens/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable UI components
│   │   ├── FileUploader.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ResultsView.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── lib/             # Logic and Mock Data
│   │   ├── demoData.js
│   │   └── utils.js
│   ├── App.jsx          # Main application controller
│   ├── main.jsx         # Entry point
│   └── index.css        # Global Design System (Variables)
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🗺️ Roadmap & Future Scope

*   **Real-time OCR:** Integrate Tesseract.js / Google Vision API for live text extraction.
*   **LLM Integration:** Connect to OpenAI/Gemini API for dynamic, personalized (but safe) summaries.
*   **Multi-Language Support:** Allow explanations in local languages.
*   **Export to PDF:** Save the interpreted summary for later reference.

## 📄 License

This project is open-source and available under the **MIT License**.

---

*Built with ❤️ for better health literacy.*
