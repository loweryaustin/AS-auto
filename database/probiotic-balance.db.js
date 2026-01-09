/**
 * Probiotic Balance (Astron)
 * Database file for the "Probiotic Balance" supplement.
 * Product Line: Astron
 * Protocol: Gut Health & Microbiome
 */
DATABASE_CONFIGS["Probiotic Balance"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Probiotic Balance (Base)",
        "pitch": "This formula restores healthy gut flora to improve digestion, boost immunity, and support the gut-brain connection.",
        "gender": "any"
    },
    "knowledgeBase": "ProbioticBalance",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-pb-1",
            "text": "Do you experience regular bloating, gas, or irregularity?",
            "group": "Symptoms"
        },
        {
            "id": "q-pb-2",
            "text": "How long have you been dealing with digestive discomfort?",
            "group": "History"
        },
        {
            "id": "q-pb-3",
            "text": "Do you feel like your immune system is weak or compromised? (Vital Defense)",
            "group": "Immunity"
        },
        {
            "id": "q-pb-4",
            "text": "Do you struggle with brain fog or mood swings? (Neurodyne)",
            "group": "Gut-Brain"
        },
        {
            "id": "q-pb-5",
            "text": "Do you crave sugar or carbs, especially after eating? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-pb-6",
            "text": "Are you trying to lose weight but feel stuck? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-pb-7",
            "text": "Do you have skin issues like breakouts or redness? (DermaShield)",
            "group": "Skin"
        },
        {
            "id": "q-pb-8",
            "text": "How is your sleep quality? (Night Renew)",
            "group": "Sleep"
        }
    ],
    "recommendations": [
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune",
                    "text": "Weak Immunity / Frequent Colds",
                    "pitch": "Since 70% of your immune system lives in your gut, Probiotic Balance sets the foundation, but Vital Defense provides the ammunition to fight off infections.",
                    "benefit": "help boost gut-based immune defense"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fog",
                    "text": "Brain Fog / Mood",
                    "pitch": "Your gut produces 90% of your serotonin. Probiotic Balance helps make the chemical, and Neurodyne protects your brain so you can use it for focus and clarity.",
                    "benefit": "support the gut-brain connection"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "Sugar Cravings / Candida",
                    "pitch": "Sugar feeds bad bacteria and yeast. Golden Vita Pure regulates blood sugar to starve the bad bugs while Probiotic Balance replenishes the good ones.",
                    "benefit": "help starve bad bacteria by regulating sugar"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight",
                    "text": "Slow Metabolism / Weight Gain",
                    "pitch": "Certain gut bacteria extract more calories from food than others. This rebalances your flora for weight loss, while Lipolyne boosts your metabolic burn.",
                    "benefit": "help optimize metabolism for weight loss"
                }
            ]
        },
        {
            "id": "supp-dermashield",
            "name": "DermaShield",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-skin",
                    "text": "Skin Issues / Inflammation",
                    "pitch": "Skin health starts in the gut. Probiotic Balance detoxifies your system from the inside, while DermaShield protects your skin barrier on the outside.",
                    "benefit": "help clear skin via gut detoxification"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep",
                    "text": "Poor Sleep / Serotonin",
                    "pitch": "Serotonin made in the gut is converted to Melatonin for sleep. Night Renew ensures you get the deep rest needed to support this cycle.",
                    "benefit": "support serotonin-melatonin conversion"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-brain", "name": "Gut-Brain", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-skin", "name": "Skin", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ],
    "references": []
};
