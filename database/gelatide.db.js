/**
 * Gela Tide (Instituto)
 * Database file for the "Gela Tide" supplement.
 * Product Line: Instituto
 * Protocol: Weight Loss & Metabolism
 */
DATABASE_CONFIGS["Gela Tide"] = {
    "productLine": "Instituto",
    "baseProduct": {
        "name": "Gela Tide",
        "pitch": "\"This should be your discipline partner. Gelatide focuses on ingredients that support natural appetite control and boost metabolism — it should be helping to make those smaller portions feel more satisfying.\"",
        "gender": "any"
    },
    "knowledgeBase": "GelaTide",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gela-1",
            "text": "How long have you been working on losing weight?",
            "group": "History"
        },
        {
            "id": "q-gela-2",
            "text": "What is your current age, height, and weight?",
            "group": "History"
        },
        {
            "id": "q-gela-3",
            "text": "What is your ideal goal weight?",
            "group": "History"
        },
        {
            "id": "q-gela-4",
            "text": "Are you able to workout on a daily basis?",
            "group": "Lifestyle"
        },
        {
            "id": "q-gela-5",
            "text": "Do you struggle with sugar cravings or snacking?",
            "group": "Diet"
        },
        {
            "id": "q-gela-6",
            "text": "Do you deal with regular or constant high stress?",
            "group": "Stress/Cortisol"
        },
        {
            "id": "q-gela-7",
            "text": "Are you experiencing underlying issues such as diabetes or high blood pressure?",
            "group": "Medical History"
        },
        {
            "id": "q-gela-8",
            "text": "Are you doing anything to support your gut health or digestion?",
            "group": "Gut Health"
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
                    "text": "High Blood Sugar / Cravings / Diabetes",
                    "pitch": "Weight loss often stalls because of blood sugar spikes and crashes. Gluco Control helps to support healthy glucose levels, which is key for curbing cravings and stabilizing the energy you need to stick to your plan.",
                    "benefit": "help control blood sugar and cravings"
                }
            ]
        },
        {
            "id": "supp-flash-burn",
            "name": "Flash Burn",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-meta",
                    "text": "Slow Metabolism / Needs fast results",
                    "pitch": "This should be your fast-acting booster. The goal is to increase your body's efficiency. Flash Burn provides powerful ingredients to kick up your metabolism and assist your body in its natural fat-burning efforts.",
                    "benefit": "help accelerate metabolism and fat burning"
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
                    "pitch": "High stress and poor sleep sabotage fat loss because Cortisol tells your body to store fat. Nerve Alive is formulated with botanicals to support a relaxed nervous system, which is crucial for maintaining hormonal balance.",
                    "benefit": "help balance stress hormones to unlock fat storage"
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
                    "text": "Constipation / Bloating / Need Reset",
                    "pitch": "To kick things off, Flora Zen is your reset button. This formula helps support the body’s natural cleansing processes and promotes healthy intestinal regularity, ensuring your system is running optimally. (Use for 7-10 days only!)",
                    "benefit": "help cleanse and reset your digestion"
                }
            ]
        },
        {
            "id": "supp-vital-green",
            "name": "Vital Green",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diet",
                    "text": "Poor Diet / Low Energy",
                    "pitch": "We need to ensure your body gets clean fuel. Vital Green is packed with a Super Greens Blend to support overall nutritional balance and contribute to healthy gut flora, creating a strong foundation for your metabolism.",
                    "benefit": "help provide a strong nutrient foundation"
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
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-stress", "name": "Stress/Cortisol", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" }
    ]
};
