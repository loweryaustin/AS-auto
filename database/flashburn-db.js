/**
 * Flash Burn (Astron)
 * Database file for the "Flash Burn" supplement.
 * Product Line: Astron
 * Protocol: Metabolic Acceleration & Weight Loss
 */
DATABASE_CONFIGS["Flash Burn"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Flash Burn",
        "pitch": "The goal is to increase your body's efficiency. Flash Burn provides powerful ingredients to support healthy metabolism and assist your body in its natural fat-burning efforts.",
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
            "text": "Have you noticed any blurriness or changes in your vision lately? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-fb-4",
            "text": "Do you struggle with overeating or not feeling full?",
            "group": "Appetite"
        },
        {
            "id": "q-fb-5",
            "text": "Do you have high stress or trouble sleeping?",
            "group": "Stress/Cortisol"
        },
        {
            "id": "q-fb-6",
            "text": "Do you take any Blood Pressure, Cholesterol, or Diabetic medications currently?",
            "group": "Medical History"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-vision-metab",
                    "text": "Blurry Vision / Metabolic Stress",
                    "pitch": "Metabolic issues often affect the eyes first (like Diabetic Retinopathy). Optivell protects the delicate vessels in your eyes from metabolic stress.",
                    "benefit": "help protect vision from metabolic damage"
                }
            ]
        },
        {
            "id": "supp-gluco-control",
            "name": "Gluco Control",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "High Blood Sugar / Cravings",
                    "pitch": "Weight loss often stalls because of blood sugar spikes. Gluco Control supports healthy glucose levels to curb cravings and stabilize energy.",
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
                    "text": "Overeating / Snacking",
                    "pitch": "This is your discipline partner. Gelatide supports natural appetite control, making smaller portions feel more satisfying.",
                    "benefit": "help control appetite and satiety"
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
                    "pitch": "High stress sabotages fat loss. Nerve Alive calms the nervous system to help manage stress, which is crucial for hormonal balance.",
                    "benefit": "help balance stress hormones to allow fat loss"
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
                    "text": "Constipation / Bloating",
                    "pitch": "To kick things off, Flora Zen acts as your reset button, promoting healthy regularity and optimal system function. (Use for 7-10 days only!)",
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
                    "pitch": "Better circulation means better results. Vital Blood supports the blood flow necessary to optimize nutrient delivery and boost physical performance.",
                    "benefit": "help improve circulation and stamina"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-app", "name": "Appetite", "gender": "any" },
        { "id": "g-stress", "name": "Stress/Cortisol", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" }
    ],
    "references": []
};
