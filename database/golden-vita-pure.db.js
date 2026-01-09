/**
 * Golden Vita Pure (Astron)
 * Database file for the "Golden Vita Pure" supplement.
 * Product Line: Astron
 * Protocol: Blood Sugar & Glucose Support
 */
DATABASE_CONFIGS["Golden Vita Pure"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Golden Vita Pure (Base)",
        "pitch": "This helps regulate glucose absorption and supports healthy insulin sensitivity to keep your blood sugar stable.",
        "gender": "any"
    },
    "knowledgeBase": "GoldenVitaPure",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gvp-1",
            "text": "How long have you been managing high blood sugar or Diabetes?",
            "group": "History"
        },
        {
            "id": "q-gvp-2",
            "text": "What was your last A1C reading?",
            "group": "History"
        },
        {
            "id": "q-gvp-3",
            "text": "Have you noticed any blurriness in your vision recently? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-gvp-4",
            "text": "Do you experience tingling, numbness, or burning in your hands or feet? (Nervital)",
            "group": "Nerve Health"
        },
        {
            "id": "q-gvp-5",
            "text": "Do you struggle with sugar cravings or energy crashes after meals?",
            "group": "Symptoms"
        },
        {
            "id": "q-gvp-6",
            "text": "Are you currently carrying extra weight, specifically around the midsection? (Lipolyne)",
            "group": "Weight"
        },
        {
            "id": "q-gvp-7",
            "text": "Do you have high blood pressure or poor circulation? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-gvp-8",
            "text": "Do you deal with high stress or poor sleep? (Night Renew)",
            "group": "Lifestyle"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-vision",
                    "text": "Blurry Vision / Retinopathy Risk",
                    "pitch": "High blood sugar is the #1 enemy of your eyes. It damages the tiny blood vessels in the retina. Optivell provides specific nutrients to protect your vision from this sugar damage.",
                    "benefit": "help protect eyes from sugar-related damage"
                }
            ]
        },
        {
            "id": "supp-nervital",
            "name": "Nervital",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-neuro",
                    "text": "Tingling / Numbness / Neuropathy",
                    "pitch": "High blood sugar strips the insulation off your nerves, causing that tingling. Nervital repairs the nerves and regrows that insulation.",
                    "benefit": "help repair damaged nerves and stop tingling"
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
                    "text": "Need to lose weight / Belly Fat",
                    "pitch": "Fat cells cause insulin resistance, making it harder to control sugar. Lipolyne supports metabolism to help you shed the weight driving the diabetes.",
                    "benefit": "help accelerate weight loss to improve insulin sensitivity"
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
                    "text": "High Blood Pressure / Poor Circulation",
                    "pitch": "Sugar acts like sandpaper on your blood vessels, causing stiffness. AlphaFlow heals the vessel lining and improves healthy blood flow.",
                    "benefit": "help protect blood vessels from sugar damage"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "High Stress / Poor Sleep",
                    "pitch": "Stress spikes cortisol, which raises blood sugar even if you haven't eaten. Night Renew calms the system to prevent stress-induced sugar spikes.",
                    "benefit": "help balance stress hormones to stabilize sugar"
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
                    "text": "Digestive Issues / Bloating",
                    "pitch": "Gut health is linked to insulin sensitivity. This helps cleanse the system to ensure you are absorbing nutrients properly.",
                    "benefit": "help optimize digestion for metabolic health"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-weight", "name": "Weight", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" }
    ],
    "references": []
};
