/**
 * Natuformin (Astron)
 * Database file for the "Natuformin" supplement.
 * Product Line: Astron
 * Protocol: Blood Sugar & Glucose Metabolism
 */
DATABASE_CONFIGS["Natuformin"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Natuformin (Base)",
        "pitch": "This provides natural blood sugar support to help your body process glucose efficiently, acting as a gentle alternative for metabolic balance.",
        "gender": "any"
    },
    "knowledgeBase": "Natuformin",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-nat-1",
            "text": "How long have you been managing high blood sugar or concerns about glucose levels?",
            "group": "History"
        },
        {
            "id": "q-nat-2",
            "text": "What was your last A1C reading?",
            "group": "History"
        },
        {
            "id": "q-nat-3",
            "text": "Have you noticed any changes in your vision, like blurring or difficulty reading? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-nat-4",
            "text": "Do you experience tingling, numbness, or burning in your hands or feet? (Nervital)",
            "group": "Nerve Health"
        },
        {
            "id": "q-nat-5",
            "text": "Do you struggle with energy crashes after meals or intense sugar cravings? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-nat-6",
            "text": "Do you have high blood pressure or circulation issues? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-nat-7",
            "text": "How is your sleep and stress level? (Night Renew)",
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
                    "id": "symp-retinopathy",
                    "text": "Blurry Vision / Retinopathy Risk",
                    "pitch": "Excess glucose damages the tiny blood vessels in the retina (Retinopathy). Optivell provides specific nutrients to protect your vision from this sugar damage.",
                    "benefit": "help protect eyes from diabetic damage"
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
                    "text": "Tingling / Neuropathy",
                    "pitch": "High blood sugar strips the insulation off your nerves. Nervital helps repair that damage to stop the tingling and restore sensation.",
                    "benefit": "help repair sugar-damaged nerves"
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
                    "text": "Stubborn Weight / Belly Fat",
                    "pitch": "Insulin is a fat-storage hormone. Lipolyne helps boost your metabolism to burn off the belly fat that is driving your insulin resistance.",
                    "benefit": "help burn fat that causes insulin resistance"
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
                    "text": "Poor Circulation / High BP",
                    "pitch": "Sugar acts like sandpaper on blood vessels, causing stiffness. AlphaFlow heals the vessel lining to improve circulation and protect your heart.",
                    "benefit": "help heal blood vessels from sugar damage"
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
                    "pitch": "Stress spikes cortisol, which raises blood sugar even if you haven't eaten. Night Renew calms your system to prevent these stress-sugar spikes.",
                    "benefit": "help lower stress-induced sugar spikes"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" }
    ],
    "references": []
};
