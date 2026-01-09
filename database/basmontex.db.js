/**
 * Basmontex (Digital Lions)
 * Database file for "Basmontex"
 * Protocol: Topical Pain Relief & Mobility
 */
DATABASE_CONFIGS["Basmontex"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Basmontex (Base)",
        "pitch": "Daily Comfort Cream for Stiff, Aching Joints. Apply topically for immediate relief.",
        "gender": "any"
    },
    "knowledgeBase": "Basmontex",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-bas-1",
            "text": "Where is the stiffness or pain located? Knees, hands, hips, or back?",
            "group": "Diagnostic"
        },
        {
            "id": "q-bas-2",
            "text": "Do you feel like your joints 'lock up' or feel stiffest in the morning?",
            "group": "Symptoms"
        },
        {
            "id": "q-bas-3",
            "text": "Is the pain worse at night? Does it keep you awake? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-bas-4",
            "text": "Do you have internal inflammation or arthritis diagnoses? (Feilaira)",
            "group": "Internal Support"
        },
        {
            "id": "q-bas-5",
            "text": "Do you also experience sharp, shooting nerve pain or tingling? (Arialief)",
            "group": "Nerve Check"
        },
        {
            "id": "q-bas-6",
            "text": "Do you have poor circulation or cold extremities? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-bas-7",
            "text": "Are you carrying extra weight that puts pressure on your knees/hips? (Laellium)",
            "group": "Weight Stress"
        }
    ],
    "recommendations": [
        {
            "id": "supp-feilaira",
            "name": "Feilaira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-internal-joint",
                    "text": "Arthritis / Deep Joint Pain",
                    "pitch": "While the cream helps from the outside, Feilaira rebuilds the joint from the inside. It targets the internal inflammation causing the stiffness.",
                    "benefit": "help support joint health from the inside out"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-pain",
                    "text": "Night Pain / Poor Sleep",
                    "pitch": "You mentioned the pain gets worse at night. This ensures you get deep sleep so your body can repair the connective tissue while you rest.",
                    "benefit": "help you sleep through the night pain"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-joint",
                    "text": "Poor Circulation / Cold Joints",
                    "pitch": "Joints need blood flow to heal. This improves circulation to drive nutrients into the stiff areas the cream is soothing.",
                    "benefit": "help drive blood flow to the joints"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-pain",
                    "text": "Sharp / Shooting Pain",
                    "pitch": "Sometimes the pain isn't just the joint, but the nerves around it. This helps calm the sharp, shooting sensations.",
                    "benefit": "help calm sharp nerve pain"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-pressure",
                    "text": "Weight Pressure on Joints",
                    "pitch": "Reducing body weight takes massive physical pressure off the knees and hips, allowing the cream to work better.",
                    "benefit": "help reduce the physical load on your joints"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-int", "name": "Internal Support", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Check", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-wgh", "name": "Weight Stress", "gender": "any" }
    ],
    "references": []
};
