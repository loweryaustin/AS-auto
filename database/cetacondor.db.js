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
    "knowledgeBase": "Cetacondor",
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
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diabetes",
                    "text": "Diabetes / Pre-Diabetes (High Sugar)",
                    "pitch": "High blood sugar acts like sandpaper on the nerves. We need to control sugar to stop the daily damage so repair can begin.",
                    "benefit": "help regulate sugar to protect nerves"
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
    ]
};
