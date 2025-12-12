/**
 * Keskara (ED / Men's Health)
 * Database file for the "Keskara" supplement.
 * Product Line: Digital Lions
 * Protocol: Men's Health (ED & Prostate)
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
            "name": "GaraHerb",
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
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-testo",
                    "text": "Low Testosterone / Low Libido",
                    "pitch": "Included for Testosterone boosting, energy, or libido issues.",
                    "benefit": "help boost testosterone and libido"
                }
            ]
        },
        {
            "id": "supp-jertaris",
            "name": "Jertaris",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-prostate",
                    "text": "Prostate Issues (Frequent urination, swelling)",
                    "pitch": "This helps alleviate prostate blockages permanently. We use this instead of circulation supplements because clearing the blockage often restores flow on its own.",
                    "benefit": "help alleviate prostate blockages"
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
                    "text": "Diabetes / Pre-Diabetes (High Sugar)",
                    "pitch": "High blood sugar causes permanent damage to blood vessels and veins over time. We need to repair this sugar damage to ensure the blood can actually reach the area.",
                    "benefit": "help repair blood vessel damage caused by sugar"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-numbness",
                    "text": "Low Sensation / Numbness / Neuropathy",
                    "pitch": "This strengthens the penile nerve. If you have neuropathy or numbness elsewhere, it means the penile nerve is also weak. This restores sensation and pleasure.",
                    "benefit": "help restore sensation and strengthen nerves"
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
                    "text": "Circulation Issues (High BP, Cold hands/feet)",
                    "pitch": "We need to ensure oxygenated blood flow is consistently reaching the area to maintain the erection.",
                    "benefit": "help ensure oxygenated blood flow reaches the area"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam",
                    "text": "Inflammation / General Pain",
                    "pitch": "Reduces inflammation that might be blocking blood flow pathways.",
                    "benefit": "help reduce inflammation blocking blood flow"
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
