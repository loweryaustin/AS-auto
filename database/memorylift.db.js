/**
 * Memory Lift (Instituto)
 * Database file for the "Memory Lift" supplement.
 * Product Line: Instituto
 * Protocol: Cognitive Health & Memory
 */
DATABASE_CONFIGS["Memory Lift"] = {
    "productLine": "Instituto",
    "baseProduct": {
        "name": "Memory Lift",
        "pitch": "\"This provides targeted nutrients to support cognitive function, helping to clear brain fog and improve recall so you can feel sharper and more focused.\"",
        "gender": "any"
    },
    "knowledgeBase": "MemoryLift",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-mem-1",
            "text": "Are you noticing issues with short-term memory (forgetting names/keys) or focus?",
            "group": "Symptoms"
        },
        {
            "id": "q-mem-2",
            "text": "How long have you felt like your memory isn't as sharp as it used to be?",
            "group": "History"
        },
        {
            "id": "q-mem-3",
            "text": "Do you often feel 'brain fog' or mental sluggishness?",
            "group": "Symptoms"
        },
        {
            "id": "q-mem-4",
            "text": "Do you deal with high stress or anxiety?",
            "group": "Lifestyle"
        },
        {
            "id": "q-mem-5",
            "text": "How is your sleep quality? Do you wake up feeling rested?",
            "group": "Sleep"
        },
        {
            "id": "q-mem-6",
            "text": "Do you have high blood pressure or circulation issues?",
            "group": "Medical History"
        },
        {
            "id": "q-mem-7",
            "text": "Do you struggle with high blood sugar or digestive issues?",
            "group": "Gut/Metabolic"
        }
    ],
    "recommendations": [
        {
            "id": "supp-vital-green",
            "name": "Vital Green",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-brain",
                    "text": "Poor Diet / Gut Issues / Brain Fog",
                    "pitch": "The gut is often called the 'Second Brain' because it produces most of your neurotransmitters. Vital Green supports the gut-brain axis to ensure your brain gets the fuel it needs.",
                    "benefit": "help fuel the brain via the gut"
                }
            ]
        },
        {
            "id": "supp-vital-blood",
            "name": "Vital Blood",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "Poor Circulation / Cold Hands / Dizziness",
                    "pitch": "Your brain needs a constant supply of oxygen. If circulation is poor, the brain 'dims' to save energy. Vital Blood improves flow to the brain to sharpen focus.",
                    "benefit": "help deliver oxygen to the brain"
                }
            ]
        },
        {
            "id": "supp-nerve-alive",
            "name": "Nerve Alive",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "High Stress / Anxiety / 'Scattered'",
                    "pitch": "Stress releases cortisol, which literally shrinks the memory center of the brain (hippocampus). Nerve Alive calms the system to protect your memory from stress damage.",
                    "benefit": "help protect memory from stress hormones"
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
                    "text": "Sugar Cravings / Diabetes",
                    "pitch": "High blood sugar causes inflammation in the brain, often called 'Type 3 Diabetes.' Controlling sugar helps reduce brain inflammation and clears the fog.",
                    "benefit": "help reduce sugar-induced brain inflammation"
                }
            ]
        },
        {
            "id": "supp-flora-zen",
            "name": "Flora Zen",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-digest",
                    "text": "Constipation / Sluggish Digestion",
                    "pitch": "A toxic gut leads to a toxic brain. Flora Zen cleanses the digestive tract to stop toxins from leaking into the bloodstream and affecting your clarity.",
                    "benefit": "help cleanse the system for mental clarity"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-gut", "name": "Gut/Metabolic", "gender": "any" }
    ]
};
