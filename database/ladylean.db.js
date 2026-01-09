/**
 * LadyLean (Astron)
 * Database file for the "LadyLean" supplement.
 * Product Line: Astron
 * Protocol: Weight Loss & Female Metabolism
 */
DATABASE_CONFIGS["LadyLean"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "LadyLean (Base)",
        "pitch": "This formula is specifically designed for the female metabolism to target stubborn fat while supporting hormonal balance.",
        "gender": "female"
    },
    "knowledgeBase": "LadyLean",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ll-1",
            "text": "How much weight are you hoping to lose to feel like your best self?",
            "group": "Goals"
        },
        {
            "id": "q-ll-2",
            "text": "Have you noticed any changes in your vision or skin elasticity? (Optivell)",
            "group": "Anti-Aging"
        },
        {
            "id": "q-ll-3",
            "text": "Do you struggle with bloating or digestive discomfort? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-ll-4",
            "text": "Do you experience sugar cravings, especially in the afternoon or evening? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-ll-5",
            "text": "How is your sleep quality? Do you wake up feeling rested? (Night Renew)",
            "group": "Sleep/Hormones"
        },
        {
            "id": "q-ll-6",
            "text": "Do you feel like your metabolism is 'stuck' or slow? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-ll-7",
            "text": "Do you hold water weight or have poor circulation? (AlphaFlow)",
            "group": "Circulation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "female",
            "symptoms": [
                {
                    "id": "symp-anti-aging",
                    "text": "Vision Health / Anti-Aging",
                    "pitch": "As we focus on getting your body healthy, we also want to protect your vision. Optivell supports eye hydration and health to keep you looking and seeing your best.",
                    "benefit": "help support vision and eye hydration"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "female",
            "symptoms": [
                {
                    "id": "symp-bloat",
                    "text": "Bloating / Digestion",
                    "pitch": "Bloating can make you look and feel pounds heavier than you are. This rebalances your gut flora to flatten your tummy and improve digestion.",
                    "benefit": "help reduce bloating for a flatter stomach"
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
                    "text": "Sugar Cravings / Hormonal Cravings",
                    "pitch": "Hormonal fluctuations often drive sugar cravings. Golden Vita Pure stabilizes blood sugar to stop these cravings before they start.",
                    "benefit": "help stop hormonal sugar cravings"
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
                    "text": "Poor Sleep / Stress Weight",
                    "pitch": "Sleep is when your body regulates hunger hormones. Night Renew helps you get the deep rest needed to lower cortisol (belly fat hormone).",
                    "benefit": "help balance hormones and lower stress weight"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-meta",
                    "text": "Slow Metabolism / Age-Related Gain",
                    "pitch": "Metabolism naturally slows down with age. Lipolyne provides the extra boost needed to rev up your engine and burn fat efficiently.",
                    "benefit": "help boost metabolic rate"
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
                    "text": "Water Retention / Circulation",
                    "pitch": "Sometimes 'weight' is actually water retention due to poor flow. AlphaFlow helps flush excess fluid and toxins out of your system.",
                    "benefit": "help flush out water weight and toxins"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-goal", "name": "Goals", "gender": "female" },
        { "id": "g-hist", "name": "History", "gender": "female" },
        { "id": "g-age", "name": "Anti-Aging", "gender": "female" },
        { "id": "g-gut", "name": "Gut Health", "gender": "female" },
        { "id": "g-diet", "name": "Diet", "gender": "female" },
        { "id": "g-sleep", "name": "Sleep/Hormones", "gender": "female" },
        { "id": "g-meta", "name": "Metabolism", "gender": "female" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
