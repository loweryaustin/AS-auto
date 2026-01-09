/**
 * Laellium (Digital Lions)
 * Database file for "Laellium"
 * Protocol: Metabolic Reset & Weight Loss
 */
DATABASE_CONFIGS["Laellium"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Laellium (Base)",
        "pitch": "This formula targets the metabolic 'set point,' helping to shift your body from fat-storage mode to fat-burning mode.",
        "gender": "any"
    },
    "knowledgeBase": "Laellium",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-wl-1",
            "text": "How much weight are you hoping to lose to reach your goal?",
            "group": "Goals"
        },
        {
            "id": "q-wl-2",
            "text": "How long has it been since you were last at your ideal weight?",
            "group": "History"
        },
        {
            "id": "q-wl-3",
            "text": "Do you struggle with sugar cravings or energy crashes after meals? (Cetadusse)",
            "group": "Insulin"
        },
        {
            "id": "q-wl-4",
            "text": "Do you experience bloating, gas, or sluggish digestion? (GoldenFrib)",
            "group": "Gut Health"
        },
        {
            "id": "q-wl-5",
            "text": "Do you carry most of your weight in the midsection (Belly Fat)? (Arialief)",
            "group": "Cortisol"
        },
        {
            "id": "q-wl-6",
            "text": "Do you have joint pain that makes it hard to exercise? (Feilaira)",
            "group": "Mobility"
        },
        {
            "id": "q-wl-7",
            "text": "How is your sleep? Do you wake up tired or hungry? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-wl-8",
            "text": "Do you feel puffy or hold water weight? (Resverador)",
            "group": "Inflammation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-wl",
                    "text": "Sugar Cravings / High Insulin",
                    "pitch": "Insulin is the 'Fat Storage Hormone.' If it's high, your body is locked in storage mode. Cetadusse lowers insulin to unlock fat burning.",
                    "benefit": "help unlock fat stores by lowering insulin"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-wl",
                    "text": "Bloating / Slow Metabolism",
                    "pitch": "Certain bacteria in your gut extract more calories from food than others. GoldenFrib shifts your microbiome to a 'lean' profile.",
                    "benefit": "help shift gut bacteria to a lean profile"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-cortisol",
                    "text": "Belly Fat / Stress",
                    "pitch": "Stress releases Cortisol, which forces your body to store fat in the belly for 'survival.' Arialief lowers stress to stop this survival storage.",
                    "benefit": "help reduce stress-induced belly fat"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam-wl",
                    "text": "Water Retention / Puffiness",
                    "pitch": "Inflammation makes fat cells resistant to burning. Resverador reduces system-wide inflammation and helps tighten skin as you lose weight.",
                    "benefit": "help reduce inflammatory water retention"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-wl",
                    "text": "Poor Sleep / Night Cravings",
                    "pitch": "Poor sleep raises your hunger hormone (Ghrelin). Xelovita ensures you get the deep sleep needed to reset your appetite hormones.",
                    "benefit": "help regulate hunger hormones via sleep"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-detox",
                    "text": "Sluggish / Toxicity",
                    "pitch": "Burning fat releases stored toxins into the blood. Tenurina improves circulation to flush these toxins out so you don't feel sick or sluggish.",
                    "benefit": "help flush toxins released by fat burning"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-ins", "name": "Insulin", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-cort", "name": "Cortisol", "gender": "any" },
        { "id": "g-mob", "name": "Mobility", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" }
    ],
    "references": []
};
