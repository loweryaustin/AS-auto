/**
 * Lipolyne (Astron)
 * Database file for the "Lipolyne" supplement.
 * Product Line: Astron
 * Protocol: Metabolic Support & Weight Loss
 */
DATABASE_CONFIGS["Lipolyne"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Lipolyne (Base)",
        "pitch": "This provides metabolic support to help your body burn fuel efficiently rather than storing it as fat.",
        "gender": "any"
    },
    "knowledgeBase": "Lipolyne",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-lip-1",
            "text": "How much weight are you looking to lose to reach your goal?",
            "group": "Goals"
        },
        {
            "id": "q-lip-2",
            "text": "How long has it been since you were last at your ideal weight?",
            "group": "History"
        },
        {
            "id": "q-lip-3",
            "text": "Do you struggle with sugar cravings or energy crashes after meals? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-lip-4",
            "text": "Do you notice bloating or digestive irregularity? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-lip-5",
            "text": "Are you under high stress or do you have trouble sleeping? (Night Renew)",
            "group": "Lifestyle"
        },
        {
            "id": "q-lip-6",
            "text": "Do you ever feel 'brain fog' or mental fatigue when trying to stick to a diet? (Neurodyne)",
            "group": "Mindset"
        },
        {
            "id": "q-lip-7",
            "text": "Do you have issues with circulation or cold hands/feet? (AlphaFlow)",
            "group": "Circulation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-cravings",
                    "text": "Sugar Cravings / High Blood Sugar",
                    "pitch": "You cannot burn fat when insulin is high. Golden Vita Pure stabilizes your blood sugar to 'unlock' your fat stores and stop cravings.",
                    "benefit": "help lower insulin to unlock fat burning"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-bloating",
                    "text": "Bloating / Slow Digestion",
                    "pitch": "Certain bacteria in your gut actually crave sugar and store fat. This rebalances your microbiome to support a 'lean' metabolism.",
                    "benefit": "help optimize the gut for weight loss"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress-weight",
                    "text": "Belly Fat / High Stress / Poor Sleep",
                    "pitch": "Stress releases Cortisol, which forces your body to store belly fat. Night Renew improves sleep to lower cortisol and allow fat release.",
                    "benefit": "help lower cortisol to reduce belly fat"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fog-diet",
                    "text": "Diet Fatigue / Brain Fog",
                    "pitch": "Changing your diet can cause mental fatigue. Neurodyne keeps your focus sharp so you have the willpower to stick to the plan.",
                    "benefit": "help support mental clarity and willpower"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-detox",
                    "text": "Sluggish Circulation / Low Energy",
                    "pitch": "Fat cells release toxins when they burn. AlphaFlow improves circulation to help flush these toxins out of your system efficiently.",
                    "benefit": "help improve circulation for detoxification"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" },
        { "id": "g-mind", "name": "Mindset", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
