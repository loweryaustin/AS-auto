/**
 * SlimBurn Drops (Astron)
 * Database file for the "SlimBurn Drops" supplement.
 * Product Line: Astron
 * Protocol: Rapid Absorption Weight Loss
 */
DATABASE_CONFIGS["SlimBurn Drops"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "SlimBurn Drops (Base)",
        "pitch": "This liquid formula is designed for rapid absorption to kickstart your metabolism and curb appetite faster than traditional capsules.",
        "gender": "any"
    },
    "knowledgeBase": "SlimBurn",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-sbd-1",
            "text": "How much weight are you looking to lose?",
            "group": "Goals"
        },
        {
            "id": "q-sbd-2",
            "text": "Do you struggle with swallowing pills or prefer liquid supplements?",
            "group": "Preference"
        },
        {
            "id": "q-sbd-3",
            "text": "Do you need something that works quickly to curb cravings? (Golden Vita Pure)",
            "group": "Cravings"
        },
        {
            "id": "q-sbd-4",
            "text": "Have you noticed your metabolism slowing down? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-sbd-5",
            "text": "Do you experience bloating or digestive issues? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-sbd-6",
            "text": "Do you have low energy or fatigue during the day? (Optivell)",
            "group": "Energy"
        },
        {
            "id": "q-sbd-7",
            "text": "How is your sleep quality? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-sbd-8",
            "text": "Do you have poor circulation or water retention? (AlphaFlow)",
            "group": "Circulation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-meta",
                    "text": "Slow Metabolism / Stubborn Fat",
                    "pitch": "SlimBurn Drops give you the immediate kickstart, while Lipolyne provides the sustained metabolic burn throughout the day.",
                    "benefit": "help provide sustained metabolic support"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-cravings",
                    "text": "Sugar Cravings / Energy Crash",
                    "pitch": "Liquid drops work fast, but you need sustained blood sugar control to stop cravings from coming back an hour later. Golden Vita Pure provides that stability.",
                    "benefit": "help stabilize blood sugar long-term"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut",
                    "text": "Bloating / Absorption Issues",
                    "pitch": "Even liquid drops need a healthy gut for full absorption. Probiotic Balance ensures your system is clean and ready to utilize the nutrients.",
                    "benefit": "help optimize nutrient absorption"
                }
            ]
        },
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-energy",
                    "text": "Low Energy / Fatigue",
                    "pitch": "Losing weight can drain your energy. Optivell supports overall vitality so you don't feel depleted while you diet.",
                    "benefit": "help support physical vitality and energy"
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
                    "text": "Poor Sleep / Belly Fat",
                    "pitch": "Your body burns the most fat while you sleep. Night Renew ensures you get the deep rest needed to maximize overnight fat burning.",
                    "benefit": "help maximize overnight fat loss"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-water",
                    "text": "Water Weight / Detox",
                    "pitch": "Liquid drops get into the blood fast; AlphaFlow ensures that blood is circulating efficiently to deliver the ingredients where they need to go.",
                    "benefit": "help improve circulation for nutrient delivery"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-pref", "name": "Preference", "gender": "any" },
        { "id": "g-crav", "name": "Cravings", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-en", "name": "Energy", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
