/**
 * Cleatril (Astron)
 * Database file for the "Cleatril" supplement.
 * Product Line: Astron
 * Protocol: Fungal Nail & Skin Support
 */
DATABASE_CONFIGS["Cleatril"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Cleatril (Base)",
        "pitch": "This targets fungal issues from the inside out, helping to clear the infection at the root while supporting healthy skin and nail regrowth.",
        "gender": "any"
    },
    "knowledgeBase": "Cleatril",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-cle-1",
            "text": "How long have you been dealing with the nail fungus or skin issues?",
            "group": "History"
        },
        {
            "id": "q-cle-2",
            "text": "Is the issue primarily on your toes, fingernails, or skin?",
            "group": "Symptoms"
        },
        {
            "id": "q-cle-3",
            "text": "Do you have a history of digestive issues, bloating, or yeast infections? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-cle-4",
            "text": "Do you crave sugary foods or carbohydrates often? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-cle-5",
            "text": "Do you have poor circulation or generally cold feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-cle-6",
            "text": "Do you feel like your immune system is slow to fight off colds or infections? (Vital Defense)",
            "group": "Immunity"
        },
        {
            "id": "q-cle-7",
            "text": "Are you managing Diabetes or high blood sugar? (Optivell)",
            "group": "Diabetic Risks"
        },
        {
            "id": "q-cle-8",
            "text": "Are you getting enough deep, restorative sleep to help your body heal? (Night Renew)",
            "group": "Sleep"
        }
    ],
    "recommendations": [
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-fung",
                    "text": "Sugar Cravings / High Blood Sugar",
                    "pitch": "Sugar is the primary fuel source for fungus. Golden Vita Pure stabilizes your blood sugar to essentially 'starve' the infection.",
                    "benefit": "help starve the fungus by controlling sugar"
                }
            ]
        },
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diab-risk",
                    "text": "Diabetes / Vision Concerns",
                    "pitch": "Diabetes often affects the feet (fungus/neuropathy) and the eyes first. Since we are treating the feet, we should also protect your vision from sugar damage.",
                    "benefit": "help protect vision from diabetic damage"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-fung",
                    "text": "Digestive Issues / Candida History",
                    "pitch": "Fungus on the outside often starts with an imbalance on the inside. This rebalances your gut microbiome to stop the fungal overgrowth at the source.",
                    "benefit": "help target the internal source of fungus"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-fung",
                    "text": "Cold Feet / Poor Circulation",
                    "pitch": "Your immune system needs a highway to get to the infection. AlphaFlow improves circulation to deliver white blood cells to your toes.",
                    "benefit": "help deliver immune cells to the infection"
                }
            ]
        },
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune",
                    "text": "Weak Immunity / Recurring Infection",
                    "pitch": "This is your internal army. Vital Defense boosts your immune response to help your body fight off the stubborn fungal infection from the inside.",
                    "benefit": "help boost immune defense against fungus"
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
                    "text": "Poor Sleep / Slow Recovery",
                    "pitch": "Your immune system does its heaviest fighting while you sleep. Night Renew ensures you get the deep rest needed to win the battle.",
                    "benefit": "support nightly immune recovery"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-diab", "name": "Diabetic Risks", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ],
    "references": []
};
