/**
 * Presgera (Neuropathy Base - Alt)
 * Database file for the "Presgera" supplement.
 * Product Line: Digital Lions
 * Protocol: Neuropathy (Alternative Base)
 */
DATABASE_CONFIGS["Presgera"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Presgera (Base)",
        "pitch": "Advanced Nerve Health Support. 1 cap per day.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-neur-1",
            "text": "Sciatic nerve pain or Peripheral Neuropathy? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-neur-2",
            "text": "Where are you experiencing it? Feet, hands, legs? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-neur-3",
            "text": "Is it tingling, numbness, or pain? (Kymezol)",
            "group": "Diagnostic"
        },
        {
            "id": "q-neur-4",
            "text": "Is this affecting your ability to walk or balance? (Urgency Builder)",
            "group": "Impact"
        },
        {
            "id": "q-neur-5",
            "text": "How did this come on? Diabetes? Alcohol? Chemo? Physical Trauma? (Cetadusse/GoldenFrib/Zalovira)",
            "group": "Root Cause"
        },
        {
            "id": "q-neur-6",
            "text": "Is this keeping you up at night? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-neur-7",
            "text": "Do you have any blood pressure issues? (Tenurina)",
            "group": "Medical History"
        },
        {
            "id": "q-neur-8",
            "text": "Are you taking Gabapentin? (Sales Positioning)",
            "group": "Medical History"
        },
        {
            "id": "q-univ-1",
            "text": "What is your Height and Weight? (18mo vs 24mo)",
            "group": "Closing"
        },
        {
            "id": "q-univ-2",
            "text": "Do you have any Thyroid issues? (Dosing Instruction)",
            "group": "Closing"
        },
        {
            "id": "q-univ-3",
            "text": "Do you have anyone military in the family? (Discount Applied)",
            "group": "Closing"
        },
        {
            "id": "q-univ-4",
            "text": "Are you good at remembering to take things? (Commitment)",
            "group": "Closing"
        }
    ],
    "recommendations": [
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell",
                    "text": "Inflammation / Swelling",
                    "pitch": "Included to reduce swelling or inflammation pressing on the nerves.",
                    "benefit": "help reduce inflammation pressing on nerves"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "Poor Circulation / Cold Hands & Feet",
                    "pitch": "Included to drive oxygen to the nerves for repair. Nerves die without oxygenated blood flow.",
                    "benefit": "help deliver oxygen to nerves for repair"
                }
            ]
        },
        {
            "id": "supp-kymezol",
            "name": "Kymezol",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-pain",
                    "text": "Severe Pain (Burning, Sharp Pains)",
                    "pitch": "Cream applied at night for immediate relief. Helps calm nerves from the outside-in.",
                    "benefit": "provide immediate topical relief"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep",
                    "text": "Sleep Disturbance",
                    "pitch": "Taken at night to relax nerves and allow sleep, which is the only time the body repairs nerve tissue.",
                    "benefit": "help relax nerves for repair during sleep"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-chemo",
                    "text": "Chemo-Induced Neuropathy",
                    "pitch": "Included for immune support and to help repair damage from harsh chemical treatments.",
                    "benefit": "help repair damage from chemical treatments"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-alcohol",
                    "text": "Alcohol-Induced Neuropathy",
                    "pitch": "Included to repair the gut-brain nerve connection damaged by alcohol.",
                    "benefit": "help repair the gut-nerve connection"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diabetes",
                    "text": "Diabetes / Pre-Diabetes",
                    "pitch": "Included to target the root cause of high blood sugar damaging the nerves.",
                    "benefit": "help manage blood sugar to protect nerves"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-root", "name": "Root Cause", "gender": "any" },
        { "id": "g-slp", "name": "Sleep", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-close", "name": "Closing", "gender": "any" }
    ]
};
