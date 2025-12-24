/**
 * Flexi Move (Instituto)
 * Database file for the "Flexi Move" supplement.
 * Product Line: Instituto
 * Protocol: Joint Health & Mobility
 */
DATABASE_CONFIGS["Flexi Move"] = {
    "productLine": "Instituto",
    "baseProduct": {
        "name": "Flexi Move",
        "pitch": "\"This provides the raw materials to rebuild cartilage and lubricate the joints, helping to reduce stiffness and improve your range of motion.\"",
        "gender": "any"
    },
    "knowledgeBase": "FlexiMove",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-fm-1",
            "text": "Where are you feeling the most pain or stiffness? (Knees, hips, back?)",
            "group": "Symptoms"
        },
        {
            "id": "q-fm-2",
            "text": "Do you feel stiffest in the morning or after sitting for a while?",
            "group": "Symptoms"
        },
        {
            "id": "q-fm-3",
            "text": "Is there any visible swelling or redness?",
            "group": "Inflammation"
        },
        {
            "id": "q-fm-4",
            "text": "Do you also experience sharp, shooting pains or tingling? (Nerve Check)",
            "group": "Nerves"
        },
        {
            "id": "q-fm-5",
            "text": "Are you currently carrying extra weight that puts pressure on your joints?",
            "group": "Weight"
        },
        {
            "id": "q-fm-6",
            "text": "Do you have poor circulation or cold hands/feet?",
            "group": "Circulation"
        },
        {
            "id": "q-fm-7",
            "text": "Is the pain keeping you awake at night?",
            "group": "Sleep"
        }
    ],
    "recommendations": [
        {
            "id": "supp-vital-blood",
            "name": "Vital Blood",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "Cold Joints / Poor Circulation",
                    "pitch": "Joint cartilage has no direct blood supply; it relies on diffusion. Vital Blood improves circulation to push nutrients deep into the joint tissue where they are needed.",
                    "benefit": "help drive healing blood flow to the joints"
                }
            ]
        },
        {
            "id": "supp-nerve-alive",
            "name": "Nerve Alive",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve",
                    "text": "Shooting Pain / Tingling / 'Electric' Feeling",
                    "pitch": "Sometimes swelling presses on nerves, causing sharp pain. Nerve Alive calms the nerves to stop that shooting sensation while Flexi Move heals the joint.",
                    "benefit": "help calm nerve pain caused by inflammation"
                }
            ]
        },
        {
            "id": "supp-gela-tide",
            "name": "Gela Tide",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight",
                    "text": "Overweight / Joint Pressure",
                    "pitch": "For every pound of body weight, you place 4 pounds of pressure on your knees. Gela Tide helps you manage your weight to physically take the load off your joints.",
                    "benefit": "help reduce the physical load on your joints"
                }
            ]
        },
        {
            "id": "supp-gluco-control",
            "name": "Gluco Control",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "Diabetes / Inflammation / Sugar Diet",
                    "pitch": "Sugar is highly inflammatory and breaks down collagen in your joints. Gluco Control stabilizes your blood sugar to stop this internal damage.",
                    "benefit": "help stop sugar-induced joint inflammation"
                }
            ]
        },
        {
            "id": "supp-flora-zen",
            "name": "Flora Zen",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut",
                    "text": "Digestive Issues / 'Leaky Gut'",
                    "pitch": "Systemic inflammation often starts in the gut. Flora Zen cleanses the digestive tract to stop toxins from leaking into your blood and attacking your joints.",
                    "benefit": "help reduce systemic inflammation from the gut"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-nerve", "name": "Nerves", "gender": "any" },
        { "id": "g-weight", "name": "Weight", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ]
};
