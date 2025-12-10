/**
 * Memyts
 * Database file for the "Memyts" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["Memyts"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Memyts (Base)",
        "pitch": "Memory and cognitive support.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-mem-1",
            "text": "How long have you been noticing memory issues?",
            "group": "Memory"
        },
        {
            "id": "q-mem-2",
            "text": "Would you say it’s more short-term memory, long-term memory, or a mix?",
            "group": "Memory"
        },
        {
            "id": "q-mem-3",
            "text": "Any family history of dementia or Alzheimer’s?",
            "group": "Memory"
        },
        {
            "id": "q-mem-4",
            "text": "Have you had any head injuries or concussions in the past?",
            "group": "Memory"
        },
        {
            "id": "q-mem-5",
            "text": "Got it — and are you sleeping well at night, or do you feel like your rest could be better?",
            "group": "Sleep"
        },
        {
            "id": "q-mem-6",
            "text": "Do you have any ringing in your ears/ tinnitus?",
            "group": "Tinnitus"
        },
        {
            "id": "q-mem-7",
            "text": "Are you currently taking any blood pressure, cholesterol, or diabetic medications?",
            "group": "Medical History"
        }
    ],
    "recommendations": [
        {
            "id": "supp-karylief",
            "name": "Karylief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-tinnitus",
                    "text": "Ringing in ears / Tinnitus",
                    "pitch": "Specific support for tinnitus symptoms.",
                    "benefit": "help quiet the ringing in your ears"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-brainfog",
                    "text": "Brain Fog",
                    "pitch": "Arialief helps support healthy cellular energy and antioxidant protection, which is essential for maintaining memory function and mental acuity.\"",
                    "benefit": "help clear brain fog"
                },
                {
                    "id": "symp-1765385365223",
                    "text": "Mental Fatigue/ trouble learning new information (retention)",
                    "pitch": "Arialief helps support healthy cellular energy and antioxidant protection, which is essential for maintaining memory function and mental acuity.",
                    "benefit": "help support nerve health/ energy"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-bp-mem",
                    "text": "High Blood Pressure / Poor Circulation",
                    "pitch": "Supports healthy blood flow to help nutrients reach the brain.",
                    "benefit": "help improve blood flow to the brain"
                }
            ]
        },
        {
            "id": "supp-felaromi",
            "name": "Felaromi",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-brain",
                    "text": "Digestive Issues",
                    "pitch": "Felaromi provides a powerful foundation of prebiotics and probiotics to support a healthy digestive environment, directly contributing to the mental clarity and focus necessary for optimal memory function.",
                    "benefit": "helps support healthy gut brain axis"
                },
                {
                    "id": "symp-1765385508141",
                    "text": "Irratability/ Mood swings",
                    "pitch": "Felaromi provides a powerful foundation of prebiotics and probiotics to support a healthy digestive environment, directly contributing to the mental clarity and focus necessary for optimal memory function.",
                    "benefit": "helps support unexplained shifts in emotional state often linked to gut-brain axis"
                },
                {
                    "id": "symp-1765385525941",
                    "text": "Weak Immunity",
                    "pitch": "Felaromi provides a powerful foundation of prebiotics and probiotics to support a healthy digestive environment, directly contributing to the mental clarity and focus necessary for optimal memory function.",
                    "benefit": "Supports foundational gut health to help reduce frequent minor illnesses"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-anti-aging",
                    "text": "Brain aging concerns",
                    "pitch": "Excellent for targeting brain aging and cellular protection.",
                    "benefit": "help protect brain cells from aging"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diabetes-mem",
                    "text": "Diabetes / Blood Sugar issues",
                    "pitch": "Targeting blood sugar is crucial for brain health.",
                    "benefit": "help manage blood sugar to protect cognitive function"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-digest-mem",
                    "text": "Digestive Health",
                    "pitch": "Digestive Health support, 1 cap daily.",
                    "benefit": "help support healthy digestion"
                }
            ]
        }
    ],
    "questionGroups": [
        {
            "id": "g-mem",
            "name": "Memory",
            "gender": "any"
        },
        {
            "id": "g-slp",
            "name": "Sleep",
            "gender": "any"
        },
        {
            "id": "g-tin",
            "name": "Tinnitus",
            "gender": "any"
        },
        {
            "id": "g-med",
            "name": "Medical History",
            "gender": "any"
        }
    ],
    "references": []
};

