/**
 * Cetacondor (Neuropathy)
 * Database file for the "Cetacondor" supplement.
 * Product Line: Digital Lions
 */
DATABASE_CONFIGS["Cetacondor"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Cetacondor (Base)",
        "pitch": "Nerve Health Support. 1 cap per day.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-neur-1",
            "text": "Where in the body are you feeling the numbness, tingling, or pain?",
            "group": "Neuropathy"
        },
        {
            "id": "q-neur-2",
            "text": "How long has this been going on?",
            "group": "Neuropathy"
        },
        {
            "id": "q-neur-3",
            "text": "Would you say it’s more burning, tingling, numbness — or pain?",
            "group": "Neuropathy"
        },
        {
            "id": "q-neur-4",
            "text": "Are you currently taking medications for diabetes, blood pressure, or cholesterol?",
            "group": "Medical History"
        },
        {
            "id": "q-neur-5",
            "text": "How is this affecting your daily routine — walking, sleeping, or just getting through the day?",
            "group": "Lifestyle"
        }
    ],
    "recommendations": [
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-nerve",
                    "text": "Cold hands/feet / Circulation issues",
                    "pitch": "Supports healthy blood flow to help nutrients reach the extremities.",
                    "benefit": "help improve blood flow to damaged nerves"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diab-nerve",
                    "text": "Diabetes / High Blood Sugar",
                    "pitch": "Insulin sensitivity support for blood sugar concerns linked to neuropathy.",
                    "benefit": "help manage blood sugar to protect nerves"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam-nerve",
                    "text": "Inflammation / Aging",
                    "pitch": "Antioxidant support to help reduced oxidative stress on the nervous system.",
                    "benefit": "help reduce inflammation around the nerves"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-pain",
                    "text": "Pain affecting sleep",
                    "pitch": "Sleep Support to help you rest despite discomfort.",
                    "benefit": "help improve sleep quality"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-neur", "name": "Neuropathy", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" }
    ]
};
