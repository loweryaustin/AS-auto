/**
 * Memyts (Digital Lions)
 * Database file for "Memyts"
 * Protocol: Cognitive Health & Memory
 */
DATABASE_CONFIGS["Memyts"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Memyts (Base)",
        "pitch": "This formula supports memory retention, focus, and mental clarity by providing the raw materials your brain needs to repair neurons.",
        "gender": "any"
    },
    "knowledgeBase": "Memyts",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-mem-1",
            "text": "Are you noticing issues with short-term memory (forgetting names/keys) or long-term recall?",
            "group": "Symptoms"
        },
        {
            "id": "q-mem-2",
            "text": "Do you often feel 'brain fog' or mental sluggishness during the day? (Resverador)",
            "group": "Clarity"
        },
        {
            "id": "q-mem-3",
            "text": "How is your digestion? Do you have bloating or gut issues? (GoldenFrib)",
            "group": "Gut-Brain"
        },
        {
            "id": "q-mem-4",
            "text": "Do you have poor circulation or cold hands/feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-mem-5",
            "text": "How is your sleep quality? Do you wake up feeling mentally rested? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-mem-6",
            "text": "Do you struggle with sugar cravings or energy crashes? (Cetadusse)",
            "group": "Diet"
        },
        {
            "id": "q-mem-7",
            "text": "Do you have any tingling or numbness in your extremities? (Arialief)",
            "group": "Nerve Health"
        },
        {
            "id": "q-mem-8",
            "text": "Are you dealing with high stress or anxiety? (Stress creates brain fog)",
            "group": "Lifestyle"
        }
    ],
    "recommendations": [
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-brain",
                    "text": "Digestion / Mood / Fog",
                    "pitch": "The gut is your 'Second Brain.' It produces the chemicals (Serotonin) needed for focus and memory. GoldenFrib restores the factory so your brain gets its fuel.",
                    "benefit": "help produce brain chemicals in the gut"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-brain",
                    "text": "Poor Circulation / Dizziness",
                    "pitch": "Your brain needs a massive amount of oxygen to function. Tenurina improves blood flow to the head to clear the fog and power up your thinking.",
                    "benefit": "help deliver oxygen to the brain"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fog-inflam",
                    "text": "Brain Fog / Inflammation",
                    "pitch": "Inflammation creates 'static' in the brain, making it hard to think clearly. Resverador lowers this inflammation to quiet the noise and improve focus.",
                    "benefit": "help clear inflammatory brain fog"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-mem",
                    "text": "Poor Sleep / Forgetfulness",
                    "pitch": "Your brain files away memories while you sleep. If you don't sleep deeply, you lose the information from the day. Xelovita ensures you hit the 'Save Button' every night.",
                    "benefit": "support memory storage during sleep"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-brain",
                    "text": "Sugar Cravings / Diabetes",
                    "pitch": "High sugar causes inflammation in the brain (Type 3 Diabetes). Cetadusse stabilizes glucose to protect your neurons from sugar damage.",
                    "benefit": "help protect the brain from sugar toxicity"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-sys",
                    "text": "Tingling / Nervous System Health",
                    "pitch": "If the nerves in your feet are damaged, your entire nervous system is under stress. Arialief supports overall nerve health, which includes the brain.",
                    "benefit": "support systemic nervous system health"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-clar", "name": "Clarity", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Brain", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" }
    ],
    "references": []
};
