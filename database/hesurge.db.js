/**
 * HeSurge (Astron)
 * Database file for the "HeSurge" supplement.
 * Product Line: Astron
 * Protocol: Male Libido & Performance
 */
DATABASE_CONFIGS["HeSurge"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "HeSurge (Base)",
        "pitch": "This formula is designed to reignite male vitality, supporting both the physical drive and the energy needed for performance.",
        "gender": "male"
    },
    "knowledgeBase": "HeSurge",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-hs-1",
            "text": "How long have you felt like your drive or performance isn't where it used to be?",
            "group": "History"
        },
        {
            "id": "q-hs-2",
            "text": "Is it more of a lack of desire (libido) or a physical issue with performance?",
            "group": "Symptoms"
        },
        {
            "id": "q-hs-3",
            "text": "Do you wake up to urinate frequently at night, or have a weak stream? (Prosta Gold)",
            "group": "Prostate"
        },
        {
            "id": "q-hs-4",
            "text": "Do you have high blood pressure or circulation issues? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-hs-5",
            "text": "Are you managing high blood sugar or diabetes? (Golden Vita Pure)",
            "group": "Medical History"
        },
        {
            "id": "q-hs-6",
            "text": "Do you feel generally fatigued or have joint stiffness that limits activity? (Optivell)",
            "group": "Vitality"
        },
        {
            "id": "q-hs-7",
            "text": "Are you carrying extra weight, especially around the midsection? (Lipolyne)",
            "group": "Weight/Hormones"
        },
        {
            "id": "q-hs-8",
            "text": "How is your sleep quality? Do you wake up feeling rested? (Night Renew)",
            "group": "Sleep/Testosterone"
        }
    ],
    "recommendations": [
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-flow-ed",
                    "text": "Performance Issues / Poor Circulation",
                    "pitch": "Performance is all about blood flow. AlphaFlow boosts Nitric Oxide to ensure the vessels can expand and deliver blood when you need it.",
                    "benefit": "help maximize blood flow for performance"
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
                    "pitch": "An enlarged prostate physically blocks the plumbing. This helps support prostate health to clear the obstruction and improve flow.",
                    "benefit": "help clear physical blockages for better flow"
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
                    "text": "Diabetes / High Blood Sugar",
                    "pitch": "High sugar acts like sandpaper on your blood vessels, making them stiff. We need to regulate sugar to let the vessels heal and become flexible again.",
                    "benefit": "help protect blood vessels from sugar damage"
                }
            ]
        },
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stamina",
                    "text": "Low Stamina / Joint Pain",
                    "pitch": "You need physical stamina to perform. Optivell supports joint health and overall vitality so your body can keep up with your drive.",
                    "benefit": "help support physical stamina and joint comfort"
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
                    "pitch": "The majority of your testosterone is produced while you sleep. Night Renew helps you get the deep rest needed to recharge your hormonal batteries.",
                    "benefit": "support natural testosterone production during sleep"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-t",
                    "text": "Overweight / Belly Fat",
                    "pitch": "Belly fat produces estrogen, which fights against your testosterone. Lipolyne helps you shed that weight to restore a healthier hormonal balance.",
                    "benefit": "help reduce fat that negatively impacts hormones"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "male" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-vit", "name": "Vitality", "gender": "any" },
        { "id": "g-wgh", "name": "Weight/Hormones", "gender": "any" },
        { "id": "g-slp", "name": "Sleep/Testosterone", "gender": "any" }
    ],
    "references": []
};
