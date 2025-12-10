/**
 * Jertaris (Prostate)
 * Database file for the "Jertaris" supplement.
 * Product Line: Digital Lions
 */
DATABASE_CONFIGS["Jertaris"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Jertaris (Base)",
        "pitch": "Supports healthy circulation, prostate function, urinary comfort, and male vitality.",
        "gender": "male"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-pros-1",
            "text": "Do you ever feel a sudden, strong need to urinate, making it hard to wait? (Urgency)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-2",
            "text": "On average, how often are you needing to use the restroom during the day? (Frequency)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-3",
            "text": "How often do you find yourself waking up during the night to urinate? (Nocturia)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-4",
            "text": "Have you noticed any changes in the strength or flow of your urinary stream?",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-5",
            "text": "After you finish, do you often feel like your bladder hasn't fully emptied?",
            "group": "Prostate Symptoms"
        }
    ],
    "recommendations": [
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-pros",
                    "text": "Circulation issues",
                    "pitch": "Improved circulation supports healthy blood flow to the prostate.",
                    "benefit": "help improve pelvic circulation"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-bladder",
                    "text": "Bladder control / Nerve signalling",
                    "pitch": "Nerve Health Support helps with nerve dysfunction.",
                    "benefit": "help support healthy nerve signalling to the bladder"
                }
            ]
        },
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-ed-pros",
                    "text": "Erectile Dysfunction symptoms",
                    "pitch": "Erectile Support designed to work alongside prostate care.",
                    "benefit": "help support male vitality and performance"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-noct",
                    "text": "Waking up at night (Nocturia)",
                    "pitch": "Sleep Support with melatonin, 5-HTP & chamomile.",
                    "benefit": "help you stay asleep through the night"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-pros", "name": "Prostate Symptoms", "gender": "male" }
    ]
};
