/**
 * Core Strength (Astron)
 * Database file for the "Core Strength" supplement.
 * Product Line: Astron
 * Protocol: Bone Density & Structure
 */
DATABASE_CONFIGS["Core Strength"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Core Strength (Base)",
        "pitch": "This formula provides the essential minerals and nutrients needed to maintain strong bone density and support structural integrity as you age.",
        "gender": "any"
    },
    "knowledgeBase": "CoreStrength",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-cs-1",
            "text": "Have you noticed any weakness or feeling 'frail' recently?",
            "group": "Symptoms"
        },
        {
            "id": "q-cs-2",
            "text": "Are you concerned about bone density or osteoporosis?",
            "group": "History"
        },
        {
            "id": "q-cs-3",
            "text": "Have you noticed any changes in your vision as well? (Optivell)",
            "group": "Aging Concerns"
        },
        {
            "id": "q-cs-4",
            "text": "Do you have digestive issues that might affect nutrient absorption? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-cs-5",
            "text": "Do you feel like your overall energy or vitality is low? (HeSurge/LadyLean)",
            "group": "Hormones"
        },
        {
            "id": "q-cs-6",
            "text": "Are you managing high blood sugar or diabetes? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-cs-7",
            "text": "Do you have poor circulation or cold hands/feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-cs-8",
            "text": "How is your sleep? Do you get deep, restorative rest? (Night Renew)",
            "group": "Sleep"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-aging",
                    "text": "Vision Loss / Aging Concerns",
                    "pitch": "As we support your bones, we should also protect your vision. Optivell supports eye health to help you maintain independence as you age.",
                    "benefit": "help support healthy vision and independence"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-absorb",
                    "text": "Poor Absorption / Digestion",
                    "pitch": "Calcium and minerals are absorbed in the gut. If your digestion is poor, you aren't getting the benefits. Probiotic Balance optimizes absorption.",
                    "benefit": "help optimize mineral absorption"
                }
            ]
        },
        {
            "id": "supp-hesurge",
            "name": "HeSurge",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-low-t",
                    "text": "Low Muscle Mass / Weakness",
                    "pitch": "Testosterone is critical for maintaining muscle and bone density. HeSurge supports your natural hormone levels to keep your frame strong.",
                    "benefit": "support hormones for bone and muscle strength"
                }
            ]
        },
        {
            "id": "supp-ladylean",
            "name": "LadyLean",
            "gender": "female",
            "symptoms": [
                {
                    "id": "symp-menopause",
                    "text": "Post-Menopause / Weakness",
                    "pitch": "Hormonal changes are the #1 cause of bone loss in women. LadyLean supports metabolic and hormonal balance to protect your density.",
                    "benefit": "support hormonal balance for bone health"
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
                    "pitch": "Bone and muscle repair happens during deep sleep via Growth Hormone. Night Renew ensures you get the deep rest needed to rebuild every night.",
                    "benefit": "support nightly structural repair"
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
                    "text": "High Blood Sugar / Inflammation",
                    "pitch": "High sugar is acidic and can leech calcium from your bones. Golden Vita Pure regulates sugar to protect your mineral reserves.",
                    "benefit": "help protect bones from sugar acidity"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "Poor Circulation / Coldness",
                    "pitch": "Bones are living tissue with their own blood supply. AlphaFlow ensures that nutrient-rich blood reaches deep into the bone matrix.",
                    "benefit": "help deliver nutrients to bone tissue"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-age", "name": "Aging Concerns", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-horm", "name": "Hormones", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ],
    "references": []
};
