/**
 * GL Pepper (Astron)
 * Database file for the "GL Pepper" supplement.
 * Product Line: Astron
 * Protocol: Weight Loss & Metabolism (GLP-1 Support)
 */
DATABASE_CONFIGS["GL Pepper"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "GL Pepper (Base)",
        "pitch": "This formula supports your body's natural GLP-1 production to help control appetite and boost metabolism without the side effects of harsh stimulants.",
        "gender": "any"
    },
    "knowledgeBase": "GLPepper",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-glp-1",
            "text": "How much weight are you looking to lose to reach your goal?",
            "group": "Goals"
        },
        {
            "id": "q-glp-2",
            "text": "Do you struggle with constant hunger or snacking between meals?",
            "group": "Appetite"
        },
        {
            "id": "q-glp-3",
            "text": "Have you noticed any issues with vision or eye strain recently? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-glp-4",
            "text": "Do you experience sugar cravings or energy crashes after eating? (Golden Vita Pure)",
            "group": "Blood Sugar"
        },
        {
            "id": "q-glp-5",
            "text": "How is your digestion? Do you experience bloating or irregularity? (Probiotic Balance)",
            "group": "Gut Health"
        },
        {
            "id": "q-glp-6",
            "text": "Have you noticed your metabolism slowing down as you've gotten older? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-glp-7",
            "text": "Are you under high stress or do you have trouble sleeping? (Night Renew)",
            "group": "Lifestyle"
        },
        {
            "id": "q-glp-8",
            "text": "Do you have poor circulation or hold water weight? (AlphaFlow)",
            "group": "Circulation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-eye-health",
                    "text": "Vision Support / Eye Strain",
                    "pitch": "As we work on your metabolic health, it's also important to support your eyes, especially if you deal with screen fatigue or strain. Optivell keeps your vision sharp.",
                    "benefit": "help support eye health and clarity"
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
                    "text": "Slow Metabolism / Stubborn Fat",
                    "pitch": "While GL Pepper helps control appetite, Lipolyne works on the other side of the equation by boosting your metabolic fire to burn more calories at rest.",
                    "benefit": "help accelerate metabolic burn"
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
                    "text": "Sugar Cravings / Insulin Resistance",
                    "pitch": "GLP-1 works by regulating insulin. Golden Vita Pure supports this process by stabilizing blood sugar, which stops the cravings that derail your progress.",
                    "benefit": "help stabilize blood sugar and stop cravings"
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
                    "text": "Bloating / Digestion",
                    "pitch": "Your natural GLP-1 hormone is produced in the gut. A healthy microbiome is essential for your body to make enough of this appetite-suppressing signal.",
                    "benefit": "help optimize the gut to produce GLP-1"
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
                    "text": "Poor Sleep / Belly Fat",
                    "pitch": "Poor sleep raises Ghrelin (the hunger hormone) and lowers Leptin (the fullness hormone). Night Renew resets these hormones so you don't wake up starving.",
                    "benefit": "help regulate hunger hormones via sleep"
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
                    "text": "Water Retention / Circulation",
                    "pitch": "As you burn fat, toxins are released into the blood. AlphaFlow improves circulation to help flush these metabolic wastes out of your system.",
                    "benefit": "help flush out toxins from fat loss"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-app", "name": "Appetite", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-sugar", "name": "Blood Sugar", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
