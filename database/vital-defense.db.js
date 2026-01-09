/**
 * Vital Defense (Astron)
 * Database file for the "Vital Defense" supplement.
 * Product Line: Astron
 * Protocol: Immune Support & Resilience
 */
DATABASE_CONFIGS["Vital Defense"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Vital Defense (Base)",
        "pitch": "This is your nutritional insurance policy, helping to strengthen your natural defenses so your body can fight off threats efficiently.",
        "gender": "any"
    },
    "knowledgeBase": "VitalDefense",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-vd-1",
            "text": "Do you feel like you catch colds easily or stay sick longer than you should?",
            "group": "Immunity"
        },
        {
            "id": "q-vd-2",
            "text": "Are you constantly feeling run down or fatigued?",
            "group": "Energy"
        },
        {
            "id": "q-vd-3",
            "text": "Have you had any eye infections or redness? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-vd-4",
            "text": "How is your digestion? Do you have bloating or gut issues? (Probiotic Balance)",
            "group": "Gut-Immune"
        },
        {
            "id": "q-vd-5",
            "text": "Are you getting enough deep, restorative sleep? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-vd-6",
            "text": "Do you crave sugar or have high blood sugar? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-vd-7",
            "text": "Do you have poor circulation or cold hands/feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-vd-8",
            "text": "Are you carrying extra weight that makes you feel sluggish? (Lipolyne)",
            "group": "Weight"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-eye-immune",
                    "text": "Eye Infections / Redness",
                    "pitch": "Your eyes are a common entry point for germs. Optivell supports the health of your eyes to keep that barrier strong.",
                    "benefit": "help support immune defense in the eyes"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-immune",
                    "text": "Digestive Issues / Weak Immunity",
                    "pitch": "70% of your immune system lives in your gut. Probiotic Balance optimizes your gut flora to strengthen your body's first line of defense.",
                    "benefit": "help boost gut-based immunity"
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
                    "text": "Poor Sleep / Slow Recovery",
                    "pitch": "Your immune system recharges while you sleep. Night Renew ensures you get the deep rest needed to build white blood cells and fight off threats.",
                    "benefit": "support immune recovery during sleep"
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
                    "text": "Sugar Cravings / High Blood Sugar",
                    "pitch": "Sugar suppresses the immune system for hours after eating. Golden Vita Pure regulates sugar levels to keep your defenses strong all day.",
                    "benefit": "help prevent sugar-induced immune suppression"
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
                    "text": "Poor Circulation / Cold Extremities",
                    "pitch": "Your immune cells travel in the blood. AlphaFlow improves circulation to ensure your 'internal army' can get to the infection site quickly.",
                    "benefit": "help deliver immune cells via better circulation"
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
                    "text": "Overweight / Inflammation",
                    "pitch": "Excess fat creates chronic low-grade inflammation that distracts the immune system. Lipolyne helps you shed that weight to free up your defenses.",
                    "benefit": "help reduce weight-related inflammation"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-en", "name": "Energy", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Immune", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-weight", "name": "Weight", "gender": "any" }
    ],
    "references": []
};
