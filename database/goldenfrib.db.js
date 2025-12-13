/**
 * Goldenfrib (Digestive Health)
 * Database file for the "Goldenfrib" supplement.
 * Product Line: Digital Lions
 * Protocol: Gut Health & Metabolism
 */
DATABASE_CONFIGS["Goldenfrib"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Goldenfrib (Base)",
        "pitch": "100% Natural Digestive Support Formula. 1 cap per day.",
        "gender": "any"
    },
    "knowledgeBase": "Goldenfrib",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gut-1",
            "text": "Are you experiencing bloating, irregularity, or discomfort after meals? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-gut-2",
            "text": "How long have you been dealing with these digestive issues?",
            "group": "Diagnostic"
        },
        {
            "id": "q-gut-3",
            "text": "Do you feel like your metabolism has slowed down recently? (Goldenfrib Base)",
            "group": "Metabolism"
        },
        {
            "id": "q-gut-4",
            "text": "Do you have systemic inflammation or joint pain? (Feilaira/Resverador)",
            "group": "Gut-Joint Axis"
        },
        {
            "id": "q-gut-5",
            "text": "Do you often feel stressed or anxious? (Arialief)",
            "group": "Gut-Brain Axis"
        },
        {
            "id": "q-gut-6",
            "text": "Do you catch colds easily or have a weak immune system? (Zalovira)",
            "group": "Gut-Immune Axis"
        },
        {
            "id": "q-gut-7",
            "text": "Do you have circulation issues or cold hands/feet? (Tenurina)",
            "group": "Absorption"
        },
        {
            "id": "q-gut-8",
            "text": "Are you carrying extra weight you can't seem to lose? (Laellium)",
            "group": "Weight"
        }
        // Closing questions removed
    ],
    "recommendations": [
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-gut",
                    "text": "Weak Immunity / Frequent Illness",
                    "pitch": "70% of your immune system lives in your gut. While Goldenfrib balances the bacteria, Zalovira provides the direct immune fuel to fight off infections.",
                    "benefit": "help boost your gut-based immune system"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress-gut",
                    "text": "Stress / Anxiety / Nervous Stomach",
                    "pitch": "The gut and brain are connected by the Vagus Nerve. Stress shuts down digestion. This calms the nervous system so your gut can actually process food.",
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
                    "id": "symp-inflam-gut",
                    "text": "Systemic Inflammation / Joint Pain",
                    "pitch": "A 'leaky gut' lets toxins into the bloodstream, causing inflammation everywhere. This helps reduce that systemic swelling while we seal the gut.",
                    "benefit": "help reduce inflammation caused by gut issues"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-absorb",
                    "text": "Poor Absorption / Circulation",
                    "pitch": "Nutrients from food must be carried away by the blood. If circulation is poor, you aren't absorbing what you eat. This improves blood flow to the digestive tract.",
                    "benefit": "help improve nutrient absorption via circulation"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-meta",
                    "text": "Stubborn Weight / Slow Metabolism",
                    "pitch": "Since we are already boosting metabolism with Goldenfrib, adding Laellium helps target the stubborn fat stores specifically.",
                    "benefit": "help accelerate fat loss and metabolism"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-digest",
                    "text": "Poor Sleep",
                    "pitch": "Your digestion 'resets' while you sleep. Poor sleep disrupts the gut microbiome. This ensures you get the deep rest needed for gut repair.",
                    "benefit": "help restore the gut's nightly repair cycle"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-joint", "name": "Gut-Joint Axis", "gender": "any" },
        { "id": "g-brain", "name": "Gut-Brain Axis", "gender": "any" },
        { "id": "g-imm", "name": "Gut-Immune Axis", "gender": "any" },
        { "id": "g-absorb", "name": "Absorption", "gender": "any" },
        { "id": "g-weight", "name": "Weight", "gender": "any" }
    ]
};
