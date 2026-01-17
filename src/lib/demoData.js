export const DEMO_REPORT = {
    patientName: "John Doe",
    date: "2024-05-20",
    biomarkers: [
        {
            name: "Hemoglobin (Hb)",
            value: "11.5",
            unit: "g/dL",
            range: "13.5 - 17.5",
            status: "out_of_range",
            statusLabel: "Below Range",
            explanation: "Hemoglobin is a protein in your red blood cells that carries oxygen to your body's organs and tissues.",
            relevance: "Adequate hemoglobin levels are essential for maintaining energy levels and overall organ function.",
            context: "Your value is slightly lower than the typical reference range for adult males. This is often referred to as 'anemia' in medical terms, but mild deviations can be common.",
            lifestyle: "Iron-rich foods (like leafy greens, red meat, and beans) and Vitamin C help support healthy hemoglobin production."
        },
        {
            name: "White Blood Cell Count (WBC)",
            value: "6.8",
            unit: "x10^3/µL",
            range: "4.5 - 11.0",
            status: "normal",
            statusLabel: "Within Range",
            explanation: "White blood cells are a vital part of your immune system, helping to fight off infections and diseases.",
            relevance: "A normal count suggests your immune system is functioning well and isn't currently fighting a major infection.",
            context: "Your levels are comfortably within the standard range, indicating a healthy immune baseline.",
            lifestyle: "Regular sleep, moderate exercise, and stress management contribute to maintaining a stable immune system."
        },
        {
            name: "Platelet Count",
            value: "250",
            unit: "x10^3/µL",
            range: "150 - 450",
            status: "normal",
            statusLabel: "Within Range",
            explanation: "Platelets are tiny blood cells that help your body form clots to stop bleeding.",
            relevance: "Healthy platelet counts are crucial for wound healing and preventing excessive bleeding or bruising.",
            context: "Your platelet count is normal, meaning your blood clotting mechanism is likely functioning as expected.",
            lifestyle: "A balanced diet with Omega-3 fatty acids and limiting alcohol supports platelet health."
        },
        {
            name: "Fasting Glucose",
            value: "105",
            unit: "mg/dL",
            range: "70 - 99",
            status: "borderline",
            statusLabel: "Slightly High",
            explanation: "Glucose is the main type of sugar in the blood and is the major source of energy for the body's cells.",
            relevance: "Keeping glucose levels in check is important for long-term metabolic health and energy stability.",
            context: "Your value is slightly above the typical fasting limit. This range is sometimes called 'pre-diabetes' but can also be influenced by recent meals or stress.",
            lifestyle: "Reducing refined sugars, increasing fiber intake, and regular physical activity are the most effective ways to manage glucose levels."
        }
    ]
};
