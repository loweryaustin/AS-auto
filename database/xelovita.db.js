/**
 * Xelovita (Digital Lions)
 * Database file for "Xelovita"
 * Protocol: Sleep Architecture & Deep Recovery
 */
DATABASE_CONFIGS["Xelovita"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Xelovita (Base)",
        "pitch": "This formula supports Deep Sleep cycles to lower cortisol, regulate hunger hormones, and allow your body to physically repair itself overnight.",
        "gender": "any"
    },
    "knowledgeBase": "Xelovita",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-slp-1",
            "text": "Do you struggle more with falling asleep (racing mind) or staying asleep (waking up)?",
            "group": "Symptoms"
        },
        {
            "id": "q-slp-2",
            "text": "On average, how many hours of actual sleep do you get per night?",
            "group": "History"
        },
        {
            "id": "q-slp-3",
            "text": "Do you wake up feeling groggy, tired, or like you haven't rested? (Adrenal Fatigue)",
            "group": "Quality"
        },
        {
            "id": "q-slp-4",
            "text": "Do you have nerve pain (tingling/burning) that keeps you awake? (Arialief)",
            "group": "Pain/Nerves"
        },
        {
            "id": "q-slp-5",
            "text": "Are you trying to lose weight but finding it difficult? (Laellium)",
            "group": "Metabolism"
        },
        {
            "id": "q-slp-6",
            "text": "Do you wake up hungry, sweating, or with a racing heart? (Cetadusse)",
            "group": "Blood Sugar"
        },
        {
            "id": "q-slp-7",
            "text": "Do you feel like you catch colds easily? (Zalovira)",
            "group": "Immunity"
        },
        {
            "id": "q-slp-8",
            "text": "Do you have digestive issues or bloating? (GoldenFrib)",
            "group": "Gut-Brain"
        }
    ],
    "recommendations": [
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-sleep",
                    "text": "Night Pain / Neuropathy",
                    "pitch": "Nerves repair themselves during deep sleep. If pain keeps you awake, you never heal. Arialief calms the nerves so Xelovita can keep you asleep for repairs.",
                    "benefit": "help calm nerves to allow repair"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-sleep",
                    "text": "Weight Gain / Belly Fat",
                    "pitch": "Poor sleep raises your hunger hormone (Ghrelin) and cortisol. Xelovita resets these hormones, and Laellium burns the fat while you rest.",
                    "benefit": "help burn fat by lowering cortisol"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-wake",
                    "text": "Waking up at 3 AM / Night Sweats",
                    "pitch": "Waking up suddenly at night is often a blood sugar crash. Cetadusse stabilizes your glucose levels so you can sleep through the night without the adrenaline spike.",
                    "benefit": "help prevent blood sugar wake-up calls"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-sleep",
                    "text": "Digestion / Serotonin",
                    "pitch": "90% of your serotonin (which turns into melatonin) is made in the gut. GoldenFrib ensures your body can actually produce the sleep hormones it needs.",
                    "benefit": "support natural melatonin production"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-sleep",
                    "text": "Weak Immunity / Fatigue",
                    "pitch": "Your immune system recharges at night. If you aren't sleeping, your defenses are down. Zalovira restocks the immune system while Xelovita ensures deep rest.",
                    "benefit": "support immune recharge during sleep"
                }
            ]
        },
        {
            "id": "supp-feilaira",
            "name": "Feilaira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-joint-sleep",
                    "text": "Joint Pain / Stiffness",
                    "pitch": "Joints repair via Growth Hormone, which is released during Deep Sleep. Xelovita helps you reach that deep stage so Feilaira can rebuild the cartilage.",
                    "benefit": "maximize joint repair during deep sleep"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-qual", "name": "Quality", "gender": "any" },
        { "id": "g-pain", "name": "Pain/Nerves", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-sug", "name": "Blood Sugar", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Brain", "gender": "any" }
    ],
    "references": []
};
