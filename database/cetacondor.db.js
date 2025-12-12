/**
 * Cetacondor (Neuropathy)
 * Database file for the "Cetacondor" supplement.
 * Product Line: Digital Lions
 * Protocol: Neuropathy & Nerve Health
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
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep",
                    "text": "Sleep Disturbance (Pain/tingling keeps awake)",
                    "pitch": "Taken at night to relax the nerves specifically so you can sleep. Sleep is the only time the body repairs nerve tissue, so this is vital for recovery.",
                    "benefit": "help relax nerves for sleep and repair"
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
                    "text": "Immediate Pain Relief (Burning, Sharp Pains)",
                    "pitch": "Applied topically for immediate relief. Helps calm the nerves from the outside-in while the oral supplements work from the inside-out.",
                    "benefit": "provide immediate topical relief"
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
                    "pitch": "Alcohol damages the nerve connection between the gut and the brain. We need to repair the gut to fix this specific nerve damage.",
                    "benefit": "help repair the gut-nerve connection"
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
                    "text": "Chemotherapy History",
                    "pitch": "Specifically used for immune system support and to help repair damage caused by harsh chemical treatments like chemotherapy.",
                    "benefit": "help repair damage from chemical treatments"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-arthritis",
                    "text": "Arthritis / Joint Pain / Stiffness",
                    "pitch": "If the body is inflamed (arthritis), it prioritizes fighting that inflammation over repairing nerves. We must reduce the inflammation so the body can focus on nerve repair.",
                    "benefit": "help reduce inflammation to prioritize nerve repair"
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
                    "text": "Poor Circulation (Cold extremities)",
                    "pitch": "Nerves need oxygen to repair. If circulation is poor, the nutrients won't reach the nerves to fix them.",
                    "benefit": "help deliver oxygen to nerves for repair"
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
