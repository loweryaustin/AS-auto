/**
 * Cetacondor (Digital Lions)
 * Database file for "Cetacondor"
 * Protocol: Internal Neuropathy & Nerve Repair
 */
DATABASE_CONFIGS["Cetacondor"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Cetacondor (Base)",
        "pitch": "Internal Nerve Repair Formula. 1 cap per day to rebuild nerve insulation.",
        "gender": "any"
    },
    "knowledgeBase": "Cetacondor",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-cet-1",
            "text": "Where is the numbness or tingling located? (Feet, Hands, Legs?)",
            "group": "Diagnostic"
        },
        {
            "id": "q-cet-2",
            "text": "How long have you been dealing with this nerve damage?",
            "group": "History"
        },
        {
            "id": "q-cet-3",
            "text": "Is the pain sharp and burning (active damage) or are you feeling total numbness (nerve death)? (Korvizol)",
            "group": "Severity"
        },
        {
            "id": "q-cet-4",
            "text": "What do you think caused this? Diabetes? Chemotherapy? Or Alcohol history? (Zalovira/Goldenfrib)",
            "group": "Root Cause"
        },
        {
            "id": "q-cet-5",
            "text": "Do you have cold feet or poor circulation in the area? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-cet-6",
            "text": "Is the pain keeping you awake at night? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-cet-7",
            "text": "Are you currently managing high blood sugar? (Cetadusse)",
            "group": "Sugar Control"
        },
        {
            "id": "q-cet-8",
            "text": "Do you have swelling or fluid retention in the legs? (Resverador)",
            "group": "Compression"
        }
    ],
    "recommendations": [
        {
            "id": "supp-korvizol",
            "name": "Korvizol",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-pain-relief",
                    "text": "Burning Pain / Need Immediate Relief",
                    "pitch": "Internal repair takes time. I'm adding Korvizol cream to give you immediate relief from the burning so you can be comfortable while Cetacondor fixes the wiring.",
                    "benefit": "provide immediate topical relief"
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
                    "text": "Cold Feet / Poor Circulation",
                    "pitch": "Nerves need oxygen to regenerate. If your feet are cold, the nerves are starving. Tenurina pumps blood to the extremities to feed the repair process.",
                    "benefit": "help drive oxygen to nerves for repair"
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
                    "text": "Diabetes / High Sugar",
                    "pitch": "We can't fix the nerves if sugar keeps stripping the insulation off. Cetadusse controls the sugar so the repairs actually stick.",
                    "benefit": "help stop sugar from undoing the repair"
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
                    "text": "Night Pain / Insomnia",
                    "pitch": "Nerve regeneration happens almost exclusively during deep sleep. Xelovita ensures you stay asleep long enough for this healing window to open.",
                    "benefit": "help you sleep for nerve regeneration"
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
                    "pitch": "Chemotherapy damages nerves via oxidative stress. Zalovira boosts your immune resilience to help flush out residual toxins and aid repair.",
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
                    "id": "symp-swell",
                    "text": "Swelling / Compression",
                    "pitch": "Swelling physically crushes the nerves. Resverador acts as a natural diuretic to remove the fluid pressure so the nerve can breathe.",
                    "benefit": "help reduce swelling crushing the nerve"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-sev", "name": "Severity", "gender": "any" },
        { "id": "g-root", "name": "Root Cause", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-sug", "name": "Sugar Control", "gender": "any" },
        { "id": "g-comp", "name": "Compression", "gender": "any" }
    ],
    "references": []
};
