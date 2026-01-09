/**
 * GoldenFrib (Digital Lions)
 * Database file for "GoldenFrib"
 * Protocol: Gut Health & Microbiome
 */
DATABASE_CONFIGS["GoldenFrib"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "GoldenFrib (Base)",
        "pitch": "This formula restores healthy gut flora to improve digestion, boost immunity, and reduce systemic inflammation.",
        "gender": "any"
    },
    "knowledgeBase": "GoldenFrib",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gut-1",
            "text": "Do you experience regular bloating, gas, or irregularity?",
            "group": "Symptoms"
        },
        {
            "id": "q-gut-2",
            "text": "How long have you been dealing with digestive discomfort?",
            "group": "History"
        },
        {
            "id": "q-gut-3",
            "text": "Do you feel like your immune system is weak or you get sick often? (Zalovira)",
            "group": "Immunity"
        },
        {
            "id": "q-gut-4",
            "text": "Do you struggle with stress, anxiety, or 'nervous stomach'? (Arialief)",
            "group": "Gut-Brain"
        },
        {
            "id": "q-gut-5",
            "text": "Do you have joint pain or general inflammation in the body? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-gut-6",
            "text": "Are you trying to lose weight but feel stuck? (Laellium)",
            "group": "Metabolism"
        },
        {
            "id": "q-gut-7",
            "text": "Do you have poor circulation or cold hands/feet? (Tenurina)",
            "group": "Absorption"
        },
        {
            "id": "q-gut-8",
            "text": "How is your sleep quality? (Xelovita)",
            "group": "Sleep"
        }
    ],
    "recommendations": [
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune",
                    "text": "Weak Immunity / Frequent Colds",
                    "pitch": "70% of your immune system lives in your gut. GoldenFrib sets the foundation, but Zalovira provides the direct ammunition to fight off infections.",
                    "benefit": "help boost gut-based immune defense"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "Stress / Anxiety / Nervous Stomach",
                    "pitch": "Your gut and brain talk via the Vagus Nerve. Stress shuts down digestion. Arialief calms the nervous system so your gut can actually process food.",
                    "benefit": "help relax the gut-brain connection"
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
                    "text": "Joint Pain / Systemic Inflammation",
                    "pitch": "A 'leaky gut' lets toxins into the bloodstream, causing inflammation in your joints. Resverador reduces that systemic swelling while we seal the gut.",
                    "benefit": "help reduce inflammation caused by gut issues"
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
                    "text": "Stubborn Weight / Slow Metabolism",
                    "pitch": "Certain gut bacteria extract more calories from food than others. GoldenFrib shifts your flora to a 'lean' profile, and Laellium boosts the metabolic burn.",
                    "benefit": "help optimize metabolism for weight loss"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-absorb",
                    "text": "Poor Absorption / Cold Extremities",
                    "pitch": "Nutrients from food must be carried away by the blood. If circulation is poor, you aren't absorbing what you eat. Tenurina improves blood flow to the digestive tract.",
                    "benefit": "help improve nutrient absorption via circulation"
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
                    "text": "Poor Sleep / Serotonin",
                    "pitch": "90% of serotonin is made in the gut, which converts to melatonin for sleep. Xelovita ensures you get the deep rest needed to support this cycle.",
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
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-abs", "name": "Absorption", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ],
    "references": []
};
