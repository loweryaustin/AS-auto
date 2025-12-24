/**
 * Flash Burn (Instituto)
 * Database file for the "Flash Burn" supplement.
 * Product Line: Instituto
 * Protocol: Metabolic Acceleration & Weight Loss
 */
DATABASE_CONFIGS["Flash Burn"] = {
    "productLine": "Instituto",
    "baseProduct": {
        "name": "Flash Burn",
        "pitch": "\"The goal is to increase your body's efficiency. Flash Burn provides powerful ingredients to support healthy metabolism and assist your body in its natural fat-burning efforts, giving you daily energy.\"",
        "gender": "any"
    },
    "knowledgeBase": "FlashBurn",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-fb-1",
            "text": "What is your current age, height, and weight?",
            "group": "History"
        },
        {
            "id": "q-fb-2",
            "text": "What is your ideal weight loss goal?",
            "group": "History"
        },
        {
            "id": "q-fb-3",
            "text": "Are you trying to lose weight or just prevent weight gain?",
            "group": "Goals"
        },
        {
            "id": "q-fb-4",
            "text": "What have you tried to help with weight loss before?",
            "group": "History"
        },
        {
            "id": "q-fb-5",
            "text": "Do you struggle with overeating or not feeling full?",
            "group": "Appetite"
        },
        {
            "id": "q-fb-6",
            "text": "Do you have high stress or trouble sleeping?",
            "group": "Stress/Cortisol"
        },
        {
            "id": "q-fb-7",
            "text": "Do you take any Blood Pressure, Cholesterol, or Diabetic medications currently?",
            "group": "Medical History"
        }
    ],
    "recommendations": [
        {
            "id": "supp-gluco-control",
            "name": "Gluco Control",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "High Blood Sugar / Diabetes / Cravings",
                    "pitch": "Weight loss often stalls because of blood sugar spikes and crashes. Gluco Control is formulated to support healthy glucose levels, which is key for curbing cravings and stabilizing the energy you need to stick to your plan.",
                    "benefit": "help stabilize blood sugar and cravings"
                }
            ]
        },
        {
            "id": "supp-gela-tide",
            "name": "Gela Tide",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-appetite",
                    "text": "Overeating / Not Satiated / Snacking",
                    "pitch": "This is your discipline partner. Gelatide focuses on ingredients that support natural appetite control and boost metabolism — it's about making those smaller portions feel more satisfying.",
                    "benefit": "help control appetite and satiety"
                }
            ]
        },
        {
            "id": "supp-vital-green",
            "name": "Vital Green",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-energy",
                    "text": "Low Energy / Poor Diet",
                    "pitch": "We need to ensure your body gets clean fuel. Vital Green is packed with a Super Greens Blend to support overall nutritional balance and contribute to healthy gut flora, creating a strong foundation for your metabolism.",
                    "benefit": "help provide nutrient foundation and energy"
                }
            ]
        },
        {
            "id": "supp-flora-zen",
            "name": "Flora Zen",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-digest",
                    "text": "Constipation / Bloating / Reset",
                    "pitch": "To kick things off, Flora Zen is your reset button. This formula helps support the body’s natural cleansing processes and promotes healthy intestinal regularity, ensuring your system is running optimally. (Use for 7-10 days only!)",
                    "benefit": "help cleanse digestion for a metabolic reset"
                }
            ]
        },
        {
            "id": "supp-vital-blood",
            "name": "Vital Blood",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-hbp",
                    "text": "High Blood Pressure / Poor Circulation",
                    "pitch": "Better circulation means better results. Vital Blood supports the blood flow necessary to optimize nutrient and oxygen delivery, helping to boost stamina and promote overall physical performance.",
                    "benefit": "help improve circulation and stamina"
                }
            ]
        },
        {
            "id": "supp-nerve-alive",
            "name": "Nerve Alive",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "High Stress / Cortisol / Belly Fat",
                    "pitch": "High stress and poor sleep sabotage fat loss. Nerve Alive is formulated with botanicals to support a relaxed nervous system and assist the body in managing stress, which is crucial for maintaining hormonal balance.",
                    "benefit": "help balance stress hormones to allow fat loss"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-app", "name": "Appetite", "gender": "any" },
        { "id": "g-stress", "name": "Stress/Cortisol", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" }
    ]
};
