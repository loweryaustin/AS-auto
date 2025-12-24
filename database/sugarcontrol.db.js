/**
 * Sugar Control (Instituto)
 * Database file for the "Sugar Control" supplement.
 * Product Line: Instituto
 * Protocol: Blood Sugar & Diabetes Management
 */
DATABASE_CONFIGS["Sugar Control"] = {
    "productLine": "Instituto",
    "baseProduct": {
        "name": "Sugar Control",
        "pitch": "\"This helps with reducing A1C and supporting healthy blood sugar levels, which is the first step to potentially getting off diabetes medications with your doctor's help.\"",
        "gender": "any"
    },
    "knowledgeBase": "SugarControl",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-sc-1",
            "text": "How long have you been managing high blood sugar or Diabetes?",
            "group": "History"
        },
        {
            "id": "q-sc-2",
            "text": "What was your last A1C reading?",
            "group": "History"
        },
        {
            "id": "q-sc-3",
            "text": "Do you experience tingling, numbness, or burning in your hands or feet? (Neuropathy)",
            "group": "Nerve Health"
        },
        {
            "id": "q-sc-4",
            "text": "Do you struggle with sugar cravings or energy crashes after meals?",
            "group": "Symptoms"
        },
        {
            "id": "q-sc-5",
            "text": "Are you currently trying to lose weight?",
            "group": "Weight"
        },
        {
            "id": "q-sc-6",
            "text": "Do you have high blood pressure or circulation issues?",
            "group": "Circulation"
        },
        {
            "id": "q-sc-7",
            "text": "Do you deal with high stress or poor sleep?",
            "group": "Lifestyle"
        }
    ],
    "recommendations": [
        {
            "id": "supp-nerve-alive",
            "name": "Nerve Alive",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-neuro",
                    "text": "Tingling / Numbness / Neuropathy",
                    "pitch": "High blood sugar strips the insulation off your nerves, causing that tingling and numbness. Nerve Alive helps repair the nerves and regrow that insulation.",
                    "benefit": "help repair damaged nerves and stop tingling"
                },
                {
                    "id": "symp-stress",
                    "text": "High Stress / Cortisol",
                    "pitch": "Stress releases cortisol, which spikes your blood sugar even if you haven't eaten. This helps calm the nervous system to prevent stress-induced sugar spikes.",
                    "benefit": "help balance stress hormones to stabilize sugar"
                }
            ]
        },
        {
            "id": "supp-flash-burn",
            "name": "Flash Burn",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight",
                    "text": "Need to lose weight / Slow Metabolism",
                    "pitch": "Fat cells cause insulin resistance, making it harder to control sugar. Flash Burn kicks up your metabolism to help you shed the weight that is driving the diabetes.",
                    "benefit": "help accelerate weight loss to improve insulin sensitivity"
                }
            ]
        },
        {
            "id": "supp-gela-tide",
            "name": "Gela Tide",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-appetite",
                    "text": "Overeating / Constant Hunger",
                    "pitch": "This is your discipline partner. It supports natural appetite control so you don't feel the need to snack, which keeps your blood sugar stable throughout the day.",
                    "benefit": "help control appetite and reduce snacking"
                }
            ]
        },
        {
            "id": "supp-vital-blood",
            "name": "Vital Blood",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "High Blood Pressure / Poor Circulation",
                    "pitch": "Sugar acts like sandpaper on your blood vessels, causing stiffness and high blood pressure. Vital Blood supports healthy flow and repairs the vessel lining.",
                    "benefit": "help protect blood vessels from sugar damage"
                }
            ]
        },
        {
            "id": "supp-vital-green",
            "name": "Vital Green",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diet",
                    "text": "Poor Diet / Low Energy",
                    "pitch": "We need to ensure your body gets clean fuel without the sugar spike. This provides a nutrient foundation to support energy levels naturally.",
                    "benefit": "help provide steady energy without the crash"
                }
            ]
        },
        {
            "id": "supp-flora-zen",
            "name": "Flora Zen",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut",
                    "text": "Digestive Issues / Bloating",
                    "pitch": "Gut health is linked to insulin sensitivity. This helps cleanse the system to ensure you are absorbing nutrients properly and maintaining a healthy metabolism.",
                    "benefit": "help cleanse digestion for better metabolic health"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-weight", "name": "Weight", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" }
    ]
};
