/**
 * Karylief (Tinnitus)
 * Database file for the "Karylief" supplement.
 * Product Line: Digital Lions
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
            "text": "Is the ringing/buzzing constant, or does it come and go?",
            "group": "Severity & Pattern"
        },
        {
            "id": "q-tin-2",
            "text": "Does the noise make it difficult to concentrate, read, or follow conversations?",
            "group": "Impact"
        },
        {
            "id": "q-tin-3",
            "text": "Does the ringing make it difficult to fall asleep or wake you up during the night?",
            "group": "Sleep"
        },
        {
            "id": "q-tin-4",
            "text": "Do you ever feel like you have cold hands or feet, or notice other signs of poor circulation?",
            "group": "Circulation"
        },
        {
            "id": "q-tin-5",
            "text": "Is the tinnitus worse when you are feeling stressed, anxious, or have trouble relaxing?",
            "group": "Stress"
        },
        {
            "id": "q-tin-6",
            "text": "Has the ringing coincided with any change in your ability to hear?",
            "group": "Hearing"
        }
    ],
    "recommendations": [
        {
            "id": "supp-memyts",
            "name": "Memyts",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-conc",
                    "text": "Difficulty concentrating",
                    "pitch": "Memory and cognitive support to help you focus despite the noise.",
                    "benefit": "help improve focus and cognitive function"
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
                    "pitch": "Nerve Health Support for the nervous system and auditory nerves.",
                    "benefit": "help calm the nervous system"
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
                    "pitch": "Sleep Support to help you fall asleep and stay asleep.",
                    "benefit": "help restore healthy sleep patterns"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-tin",
                    "text": "Poor circulation / Cold hands",
                    "pitch": "Blood Pressure Support - Improved microcirculation can help with ear health.",
                    "benefit": "help improve microcirculation to the ears"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-sev", "name": "Severity & Pattern", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-slp", "name": "Sleep", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-str", "name": "Stress", "gender": "any" },
        { "id": "g-hear", "name": "Hearing", "gender": "any" }
    ]
};
