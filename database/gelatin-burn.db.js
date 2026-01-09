/**
 * Gelatin Burn (Astron)
 * Database file for the "Gelatin Burn" supplement.
 * Product Line: Astron
 * Protocol: Metabolic Support & Gut Repair
 */
DATABASE_CONFIGS["Gelatin Burn"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Gelatin Burn (Base)",
        "pitch": "This formula uses the power of gelatin to support a healthy metabolism, gut lining, and natural weight management.",
        "gender": "any"
    },
    "knowledgeBase": "GelatinBurn",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gb-1",
            "text": "How much weight are you hoping to lose?",
            "group": "Goals"
        },
        {
            "id": "q-gb-2",
            "text": "Have you noticed your metabolism slowing down?",
            "group": "Metabolism"
        },
        {
            "id": "q-gb-3",
            "text": "Do you have digestive issues like bloating or Leaky Gut? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-gb-4",
            "text": "Do you spend time on screens or have concerns about eye health? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-gb-5",
            "text": "Do you struggle with sleep quality or waking up tired? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-gb-6",
            "text": "Do you crave sugar or carbs often? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-gb-7",
            "text": "Do you feel like you have stubborn fat that won't go away? (Lipolyne)",
            "group": "Fat Loss"
        },
        {
            "id": "q-gb-8",
            "text": "Do you have poor circulation or cold extremities? (AlphaFlow)",
            "group": "Circulation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-eye-health",
                    "text": "Eye Health / Vision Support",
                    "pitch": "Gelatin supports the body's structure, but the eyes need specific nutrients like Lutein. Optivell fills that gap to protect your vision as you age.",
                    "benefit": "help support long-term vision health"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-repair",
                    "text": "Leaky Gut / Bloating",
                    "pitch": "Gelatin heals the gut lining (the 'mesh'), but you also need good bacteria to populate it. Probiotic Balance works with Gelatin to fully restore gut health.",
                    "benefit": "help restore the gut microbiome"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-glycine",
                    "text": "Poor Sleep / Insomnia",
                    "pitch": "Gelatin is rich in Glycine, which helps sleep. Night Renew amplifies this effect to ensure you get deep, fat-burning sleep every night.",
                    "benefit": "help deepen sleep for metabolic repair"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stubborn-fat",
                    "text": "Slow Metabolism / Belly Fat",
                    "pitch": "While Gelatin supports the metabolic environment, Lipolyne actively boosts your metabolic rate to burn stubborn fat stores.",
                    "benefit": "help accelerate fat burning"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-metab",
                    "text": "Sugar Cravings / High Insulin",
                    "pitch": "You can't burn fat if insulin is high. Golden Vita Pure regulates blood sugar so your body can switch into fat-burning mode.",
                    "benefit": "help lower insulin to unlock fat stores"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-deliv",
                    "text": "Poor Circulation",
                    "pitch": "To rebuild tissue and burn fat, you need good blood flow. AlphaFlow ensures the nutrients from the gelatin get to where they are needed.",
                    "benefit": "help improve nutrient delivery via circulation"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-fat", "name": "Fat Loss", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
