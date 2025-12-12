/**
 * Karylief (Tinnitus)
 * Database file for the "Karylief" supplement.
 * Product Line: Digital Lions
 * Protocol: Tinnitus & Auditory Health
 */
DATABASE_CONFIGS["Karylief"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Karylief (Base)",
        "pitch": "Tinnitus support.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-tin-1",
            "text": "Is the ringing/buzzing constant, or does it come and go? (Diagnostic)",
            "group": "Severity & Pattern"
        },
        {
            "id": "q-tin-2",
            "text": "Does the noise make it difficult to concentrate, read, or follow conversations? (Memyts)",
            "group": "Impact"
        },
        {
            "id": "q-tin-3",
            "text": "Does the ringing make it difficult to fall asleep or wake you up during the night? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-tin-4",
            "text": "Do you ever feel like you have cold hands or feet, or notice other signs of poor circulation? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-tin-5",
            "text": "Is the tinnitus worse when you are feeling stressed, anxious, or have trouble relaxing? (Arialief)",
            "group": "Stress"
        },
        {
            "id": "q-tin-6",
            "text": "Has the ringing coincided with any change in your ability to hear? (Resverador)",
            "group": "Hearing"
        },
        {
            "id": "q-univ-1",
            "text": "What is your Height and Weight? (Duration Logic)",
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
            "id": "supp-tenurima",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-tin",
                    "text": "Poor circulation / Cold hands",
                    "pitch": "The inner ear has tiny blood vessels that need good flow to function and repair. This drives oxygenated blood to the auditory nerves.",
                    "benefit": "help improve microcirculation to the ears"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress-tin",
                    "text": "Stress / Anxiety triggers",
                    "pitch": "Stress often triggers tinnitus spikes because it inflames the nerves. This helps calm the nervous system to reduce the 'volume' of the ringing.",
                    "benefit": "help calm the nervous system"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-hear-loss",
                    "text": "Hearing changes / Inflammation",
                    "pitch": "Inflammation in the ear canal or auditory system can worsen ringing. This helps reduce that inflammation to protect your hearing.",
                    "benefit": "help reduce auditory inflammation"
                }
            ]
        },
        {
            "id": "supp-memyts",
            "name": "Memyts",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-conc",
                    "text": "Difficulty concentrating",
                    "pitch": "Constant noise makes it hard for the brain to focus. This supports cognitive function so you can think clearly despite the ringing.",
                    "benefit": "help improve focus and cognitive function"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-tin",
                    "text": "Trouble sleeping due to ringing",
                    "pitch": "Sleep is when the brain 'tunes out' noise. This helps you fall asleep and stay asleep so your auditory system can rest.",
                    "benefit": "help restore healthy sleep patterns"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-sev", "name": "Severity & Pattern", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-str", "name": "Stress", "gender": "any" },
        { "id": "g-hear", "name": "Hearing", "gender": "any" },
        { "id": "g-slp", "name": "Sleep", "gender": "any" },
        { "id": "g-close", "name": "Closing", "gender": "any" }
    ]
};
