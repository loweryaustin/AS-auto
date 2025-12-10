/**
 * Blinzador (Fungus)
 * Database file for the "Blinzador" supplement.
 * Product Line: Digital Lions
 */
DATABASE_CONFIGS["Blinzador"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Blinzador (Base)",
        "pitch": "Fungus Support Spray. (180)",
        "gender": "any"
    },
    "guaranteeDays": 180,
    "questions": [
        {
            "id": "q-fun-1",
            "text": "How long have you been dealing with the foot or nail fungus?",
            "group": "Fungus"
        },
        {
            "id": "q-fun-2",
            "text": "Is it mostly on the skin, under the nails, or both?",
            "group": "Fungus"
        },
        {
            "id": "q-fun-3",
            "text": "Have you had any issues with recurring infections, like athlete’s foot or even candida (yeast) in the past?",
            "group": "Systemic Health"
        },
        {
            "id": "q-fun-4",
            "text": "Do you tend to have dry, cracked feet or slow healing cuts?",
            "group": "Circulation"
        },
        {
            "id": "q-fun-5",
            "text": "Are you currently taking anything to support your immune system or gut health?",
            "group": "Immunity"
        }
    ],
    "recommendations": [
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-fung",
                    "text": "Recurring infections / Gut issues",
                    "pitch": "A healthy gut supports the body's natural defense against fungus.",
                    "benefit": "help balance gut health to fight fungus internally"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-imm-fung",
                    "text": "Weak immune system",
                    "pitch": "Immune Support to help your body fight off infection.",
                    "benefit": "help boost immune defense"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-fung",
                    "text": "Dry cracked feet / Poor healing",
                    "pitch": "Improved circulation helps nutrients reach the feet for healing.",
                    "benefit": "help improve circulation to the extremities"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-fung",
                    "text": "High blood sugar / Diabetes",
                    "pitch": "Excess sugar can feed fungal infections, so support is important.",
                    "benefit": "help control blood sugar to starve the fungus"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-fung", "name": "Fungus", "gender": "any" },
        { "id": "g-sys", "name": "Systemic Health", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" }
    ]
};
