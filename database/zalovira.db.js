/**
 * Zalovira (Digital Lions)
 * Database file for "Zalovira"
 * Protocol: Immune System & Resilience
 */
DATABASE_CONFIGS["Zalovira"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Zalovira (Base)",
        "pitch": "This provides the raw materials (Zinc, Vitamin C, Elderberry) to arm your immune system so it can fight off threats before you get sick.",
        "gender": "any"
    },
    "knowledgeBase": "Zalovira",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-zal-1",
            "text": "Do you feel like you catch colds easily or take a long time to recover?",
            "group": "Symptoms"
        },
        {
            "id": "q-zal-2",
            "text": "Do you feel generally run down or fatigued during the day?",
            "group": "Energy"
        },
        {
            "id": "q-zal-3",
            "text": "How is your digestion? Do you have bloating or gut issues? (GoldenFrib)",
            "group": "Gut-Immune"
        },
        {
            "id": "q-zal-4",
            "text": "Are you getting enough deep, restorative sleep? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-zal-5",
            "text": "Do you crave sugar or have high blood sugar? (Cetadusse)",
            "group": "Diet"
        },
        {
            "id": "q-zal-6",
            "text": "Do you have poor circulation or cold hands/feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-zal-7",
            "text": "Do you have chronic inflammation or joint pain? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-zal-8",
            "text": "Are you carrying extra weight that makes you feel sluggish? (Laellium)",
            "group": "Weight"
        }
    ],
    "recommendations": [
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-immune",
                    "text": "Digestive Issues / Weak Immunity",
                    "pitch": "70% of your immune system lives in your gut. GoldenFrib heals the gut lining so your immune command center can function properly.",
                    "benefit": "help boost gut-based immune defense"
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
                    "text": "Poor Sleep / Slow Recovery",
                    "pitch": "Your immune system builds new fighter cells (T-Cells) while you sleep. Xelovita ensures you get the deep rest needed to restock your army.",
                    "benefit": "support immune recovery during sleep"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "Sugar Cravings / High Blood Sugar",
                    "pitch": "Sugar puts your white blood cells in a 'coma' for hours after eating. Cetadusse regulates sugar levels to keep your defenses aggressive.",
                    "benefit": "help prevent sugar-induced immune suppression"
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
                    "text": "Poor Circulation / Cold Extremities",
                    "pitch": "Your immune cells travel in the blood. Tenurina opens the highways so your 'internal army' can reach the infection site instantly.",
                    "benefit": "help deliver immune cells via better circulation"
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
                    "text": "Joint Pain / Chronic Inflammation",
                    "pitch": "If your body is busy fighting inflammation in your joints, it can't fight viruses effectively. Resverador clears the inflammation to free up resources.",
                    "benefit": "help free up immune resources by lowering inflammation"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight",
                    "text": "Overweight / Sluggishness",
                    "pitch": "Fat cells release inflammatory chemicals that distract the immune system. Laellium helps you shed that weight to lower the systemic load.",
                    "benefit": "help reduce weight-related immune stress"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-imm", "name": "Symptoms", "gender": "any" },
        { "id": "g-en", "name": "Energy", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Immune", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-wgh", "name": "Weight", "gender": "any" }
    ],
    "references": []
};
