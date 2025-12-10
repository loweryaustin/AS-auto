/**
 * Laellium
 * Database file for the "Laellium" supplement.
 * Product Line: Digital Lions
 */
DATABASE_CONFIGS["Laellium"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Laellium (Base)",
        "pitch": "Weight Loss Support - 1 cap per day. (60 Day Supply)",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-wl-1",
            "text": "What’s your age, height, and current weight?",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-2",
            "text": "What’s your ideal weight-loss goal?",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-3",
            "text": "Have you tried anything before for weight loss? If so, what?",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-4",
            "text": "Are you able to exercise consistently, even just light activity?",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-5",
            "text": "Got it — and are you sleeping well at night, or do you feel like your rest could be better?",
            "group": "Sleep"
        },
        {
            "id": "q-wl-6",
            "text": "Any blood pressure, cholesterol, or diabetes meds right now?",
            "group": "Medical History"
        }
    ],
    "recommendations": [
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-bp-meds",
                    "text": "Taking blood pressure medication / High Blood Pressure",
                    "pitch": "Improved circulation benefits every other system. This supports healthy blood flow to help nutrients reach every part of the body.",
                    "benefit": "help support healthy blood pressure and circulation"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve",
                    "text": "Nerve issues / Tingling / Numbness",
                    "pitch": "Nerve Health Support helps with conditions linked to nerve inflammation or dysfunction.",
                    "benefit": "help support nerve health and reduce inflammation"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-digestive",
                    "text": "Digestive issues / Gut health",
                    "pitch": "A healthy gut supports everything from immunity to mental clarity.",
                    "benefit": "help optimize digestion and nutrient absorption"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-glucose",
                    "text": "Diabetes meds / Blood Sugar concerns",
                    "pitch": "This is excellent for targeting blood sugar concerns.",
                    "benefit": "help support healthy glucose levels and insulin sensitivity"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-aging",
                    "text": "Concerns about aging / Inflammation",
                    "pitch": "Antioxidant support helps target cellular aging and inflammation.",
                    "benefit": "help provide antioxidant support against cellular aging"
                }
            ]
        },
        {
            "id": "supp-felaromi",
            "name": "Felaromi",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-greens",
                    "text": "Low energy / Needs nutrient boost",
                    "pitch": "Greens Nutrition with prebiotics and probiotics to support gut health.",
                    "benefit": "help boost daily nutrient intake and gut flora"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune",
                    "text": "Weak immune system / Frequently sick",
                    "pitch": "Comprehensive immune support.",
                    "benefit": "help strengthen your immune system"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-wl", "name": "Weight Loss", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" }
    ]
};
