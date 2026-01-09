/**
 * VitaBion Drops (Astron)
 * Database file for the "VitaBion Drops" supplement.
 * Product Line: Astron
 * Protocol: General Wellness & Energy
 */
DATABASE_CONFIGS["VitaBion Drops"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "VitaBion Drops (Base)",
        "pitch": "These drops provide rapid-absorption daily wellness support to boost energy and fill nutritional gaps instantly.",
        "gender": "any"
    },
    "knowledgeBase": "VitaBion",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-vb-1",
            "text": "How would you rate your overall daily energy levels?",
            "group": "Energy"
        },
        {
            "id": "q-vb-2",
            "text": "Do you prefer liquid supplements for ease of use or absorption?",
            "group": "Preference"
        },
        {
            "id": "q-vb-3",
            "text": "Do your eyes feel tired or strained at the end of the day? (Optivell)",
            "group": "Eye Health"
        },
        {
            "id": "q-vb-4",
            "text": "Do you feel like your immune system is run down or sluggish? (Vital Defense)",
            "group": "Immunity"
        },
        {
            "id": "q-vb-5",
            "text": "Do you have issues with digestion or absorbing nutrients from food? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-vb-6",
            "text": "Are you getting quality sleep to recharge your batteries? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-vb-7",
            "text": "Do you experience brain fog or mental fatigue during the day? (Neurodyne)",
            "group": "Mental Energy"
        },
        {
            "id": "q-vb-8",
            "text": "Do you struggle with sugar cravings or energy crashes? (Golden Vita Pure)",
            "group": "Diet"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-screen-time",
                    "text": "Screen Fatigue / Eye Health",
                    "pitch": "For daily wellness, we can't ignore your eyes. Optivell supports vision health, which is critical if you spend any time on screens.",
                    "benefit": "help protect vision from daily strain"
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
                    "text": "Weak Immunity / Run Down",
                    "pitch": "General wellness requires a strong defense. Vital Defense boosts your immune system to protect the energy gains you get from VitaBion.",
                    "benefit": "help boost immune defense"
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
                    "text": "Poor Digestion / Absorption",
                    "pitch": "Even the best drops need a healthy gut to work fully. Probiotic Balance optimizes your digestion to ensure you absorb 100% of your nutrition.",
                    "benefit": "help optimize nutrient absorption"
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
                    "text": "Poor Sleep / Waking Tired",
                    "pitch": "You can't pour from an empty cup. Night Renew ensures you recharge your energy reserves fully every night.",
                    "benefit": "help restore energy via deep sleep"
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
                    "text": "Brain Fog / Mental Fatigue",
                    "pitch": "VitaBion fuels your body, but Neurodyne fuels your brain. It clears the fog so your mental energy matches your physical energy.",
                    "benefit": "help boost mental energy and clarity"
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
                    "text": "Energy Crashes / Sugar Cravings",
                    "pitch": "Unstable blood sugar causes energy dips. Golden Vita Pure stabilizes glucose to keep your energy steady all day long.",
                    "benefit": "help prevent sugar-induced energy crashes"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-en", "name": "Energy", "gender": "any" },
        { "id": "g-pref", "name": "Preference", "gender": "any" },
        { "id": "g-eye", "name": "Eye Health", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-ment", "name": "Mental Energy", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" }
    ],
    "references": []
};
