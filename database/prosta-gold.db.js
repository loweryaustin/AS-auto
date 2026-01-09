/**
 * Prosta Gold (Astron)
 * Database file for the "Prosta Gold" supplement.
 * Product Line: Astron
 * Protocol: Prostate Health & Urinary Function
 */
DATABASE_CONFIGS["Prosta Gold"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Prosta Gold (Base)",
        "pitch": "This formula supports healthy prostate size and urinary flow, helping to reduce nighttime bathroom trips and improve comfort.",
        "gender": "male"
    },
    "knowledgeBase": "ProstaGold",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-pg-1",
            "text": "How often are you waking up at night to use the restroom (Nocturia)?",
            "group": "Symptoms"
        },
        {
            "id": "q-pg-2",
            "text": "Do you experience a weak stream, urgency, or the feeling that you can't empty your bladder fully?",
            "group": "Symptoms"
        },
        {
            "id": "q-pg-3",
            "text": "Have you noticed any issues with sexual performance or drive alongside these urinary issues? (HeSurge)",
            "group": "Sexual Health"
        },
        {
            "id": "q-pg-4",
            "text": "Do you have poor circulation or high blood pressure? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-pg-5",
            "text": "Are you managing high blood sugar or diabetes? (Golden Vita Pure)",
            "group": "Medical History"
        },
        {
            "id": "q-pg-6",
            "text": "Do you struggle with poor sleep quality due to the frequent waking? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-pg-7",
            "text": "Are you carrying extra weight around the midsection? (Lipolyne)",
            "group": "Weight/Hormones"
        },
        {
            "id": "q-pg-8",
            "text": "Do you have general inflammation or joint pain? (Optivell)",
            "group": "Inflammation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-hesurge",
            "name": "HeSurge",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-libido",
                    "text": "Low Libido / ED Symptoms",
                    "pitch": "Prostate issues often affect performance. HeSurge helps restore your vitality and drive while Prosta Gold handles the urinary issues.",
                    "benefit": "help restore male vitality and drive"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-noct",
                    "text": "Waking up at Night / Tiredness",
                    "pitch": "Waking up constantly destroys your sleep quality. Night Renew helps you fall back asleep quickly and stay in deep sleep longer.",
                    "benefit": "help improve sleep quality despite interruptions"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-circ-pelvic",
                    "text": "Poor Circulation / ED",
                    "pitch": "Healthy blood flow is crucial for the pelvic area to clear out toxins and reduce swelling. AlphaFlow improves circulation where it counts.",
                    "benefit": "help improve pelvic circulation"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-inf",
                    "text": "High Blood Sugar / Inflammation",
                    "pitch": "High blood sugar increases inflammation, which can make prostate swelling worse. Golden Vita Pure helps regulate sugar to reduce systemic inflammation.",
                    "benefit": "help reduce inflammation driven by sugar"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-belly",
                    "text": "Belly Fat / Hormonal Imbalance",
                    "pitch": "Belly fat converts testosterone into estrogen, which can fuel prostate growth. Lipolyne helps you burn that fat to support better hormonal balance.",
                    "benefit": "help reduce belly fat that impacts hormones"
                }
            ]
        },
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflammation",
                    "text": "General Stiffness / Swelling",
                    "pitch": "If your joints are inflamed, your body is in a state of high alert. Optivell reduces systemic inflammation, which can also help calm prostate swelling.",
                    "benefit": "help reduce systemic inflammation"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "male" },
        { "id": "g-sex", "name": "Sexual Health", "gender": "male" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-wgh", "name": "Weight/Hormones", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" }
    ],
    "references": []
};
