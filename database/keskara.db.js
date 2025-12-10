/**
 * Keskara (ED)
 * Database file for the "Keskara" supplement.
 * Product Line: Digital Lions
 */
DATABASE_CONFIGS["Keskara"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Keskara (Base)",
        "pitch": "Erectile Support - ED. 1 cap per day.",
        "gender": "male"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ed-1",
            "text": "What is your age, height, and current weight?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-ed-2",
            "text": "How long have you been dealing with ED?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-ed-3",
            "text": "Is it more of an issue getting an erection — or keeping one?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-ed-4",
            "text": "Are you still waking with morning erections?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-ed-5",
            "text": "Any other symptoms like low libido, low testosterone, or prostate issues?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-ed-6",
            "text": "Got it — and are you sleeping well at night, or do you feel like your rest could be better?",
            "group": "Sleep"
        },
        {
            "id": "q-ed-7",
            "text": "Have you tried anything else before?",
            "group": "History"
        },
        {
            "id": "q-ed-8",
            "text": "Are you currently taking any blood pressure, cholesterol, or diabetes medications?",
            "group": "Medical History"
        }
    ],
    "recommendations": [
        {
            "id": "supp-garaherb",
            "name": "Garaherb",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-boost",
                    "text": "Need additional potency",
                    "pitch": "Erectile Support Booster.",
                    "benefit": "help boost potency and performance"
                }
            ]
        },
        {
            "id": "supp-felaromi",
            "name": "Felaromi",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gen-health",
                    "text": "General health / Energy",
                    "pitch": "Greens and gut support for overall vitality.",
                    "benefit": "help improve overall vitality and energy"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-ed",
                    "text": "Sensitivity issues / Nerve health",
                    "pitch": "Nerve Health Support helps with nerve inflammation or dysfunction.",
                    "benefit": "help support nerve sensitivity"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-flow",
                    "text": "Blood flow / Circulation / BP Meds",
                    "pitch": "Supports healthy blood flow to help nutrients reach every part of the body.",
                    "benefit": "help maximize blood flow for performance"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diab-ed",
                    "text": "Diabetes / Blood Sugar",
                    "pitch": "Insulin sensitivity support for targeting blood sugar concerns.",
                    "benefit": "help manage blood sugar to support healthy function"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-ed", "name": "Erectile Dysfunction", "gender": "male" },
        { "id": "g-slp", "name": "Sleep", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" }
    ]
};
