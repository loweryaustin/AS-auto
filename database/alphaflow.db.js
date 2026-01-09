/**
 * AlphaFlow (Astron)
 * Database file for the "AlphaFlow" supplement.
 * Product Line: Astron
 * Protocol: Circulation & Male Performance
 */
DATABASE_CONFIGS["AlphaFlow"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "AlphaFlow (Base)",
        "pitch": "This formula is designed to maximize blood flow and circulation, which is the physical engine behind male performance and stamina.",
        "gender": "male"
    },
    "knowledgeBase": "AlphaFlow",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-af-1",
            "text": "How long have you noticed issues with circulation or performance?",
            "group": "History"
        },
        {
            "id": "q-af-2",
            "text": "Do you struggle with getting an erection, keeping it, or both?",
            "group": "Symptoms"
        },
        {
            "id": "q-af-3",
            "text": "Have you noticed any changes in your vision or eye pressure? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-af-4",
            "text": "Do you wake up frequently at night to urinate? (Prosta Gold)",
            "group": "Prostate"
        },
        {
            "id": "q-af-5",
            "text": "Are you managing high blood sugar or diabetes? (Golden Vita Pure)",
            "group": "Medical History"
        },
        {
            "id": "q-af-6",
            "text": "Do you also have low libido or lack of drive? (HeSurge)",
            "group": "Libido"
        },
        {
            "id": "q-af-7",
            "text": "Are you carrying extra weight around the midsection? (Lipolyne)",
            "group": "Weight"
        },
        {
            "id": "q-af-8",
            "text": "How is your sleep quality? (Night Renew)",
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
                    "id": "symp-vision",
                    "text": "Blurry Vision / Eye Pressure",
                    "pitch": "The eyes rely on microscopic blood vessels that clog easily with age. AlphaFlow improves the flow, and Optivell supports the eye tissue itself to keep vision sharp.",
                    "benefit": "help support healthy vision and eye circulation"
                }
            ]
        },
        {
            "id": "supp-hesurge",
            "name": "HeSurge",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-libido",
                    "text": "Low Libido / No Drive",
                    "pitch": "AlphaFlow builds the pressure, but HeSurge provides the spark. It boosts your natural drive so you're ready when the moment is right.",
                    "benefit": "help restore male vitality and drive"
                }
            ]
        },
        {
            "id": "supp-prosta-gold",
            "name": "Prosta Gold",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-prostate",
                    "text": "Frequent Urination / Weak Stream",
                    "pitch": "You can't get good flow if the pipe is blocked. Prosta Gold supports prostate health to clear the physical obstruction.",
                    "benefit": "help clear prostate blockages"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-ed",
                    "text": "High Blood Sugar / Diabetes",
                    "pitch": "Sugar damages the inner lining of your blood vessels, making them stiff. We need to regulate sugar so your vessels can heal and expand.",
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
                    "id": "symp-sleep-t",
                    "text": "Poor Sleep / Low Energy",
                    "pitch": "Testosterone is made while you sleep. Night Renew ensures you get the deep rest needed to keep your hormonal engine running.",
                    "benefit": "support testosterone production during sleep"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-ed",
                    "text": "Belly Fat / Estrogen",
                    "pitch": "Belly fat actively fights your manhood by converting testosterone into estrogen. Lipolyne helps you burn that fat to protect your hormones.",
                    "benefit": "help reduce fat that lowers testosterone"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "male" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-lib", "name": "Libido", "gender": "male" },
        { "id": "g-wgh", "name": "Weight", "gender": "any" },
        { "id": "g-slp", "name": "Sleep", "gender": "any" }
    ],
    "references": []
};
