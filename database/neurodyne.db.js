/**
 * Neurodyne (Astron)
 * Database file for the "Neurodyne" supplement.
 * Product Line: Astron
 * Protocol: Brain Health & Cognitive Restoration
 */
DATABASE_CONFIGS["Neurodyne"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Neurodyne (Base)",
        "pitch": "Think of this as your daily shield against the 'brain fog' that can come from a stressful schedule. It uses antioxidants to protect neural tissue.",
        "gender": "any"
    },
    "knowledgeBase": "Neurodyne",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-nd-1",
            "text": "How long have you been noticing memory issues or brain fog?",
            "group": "History"
        },
        {
            "id": "q-nd-2",
            "text": "Do you spend a lot of time looking at screens (phones/computers)? (Optivell)",
            "group": "Eye Strain"
        },
        {
            "id": "q-nd-3",
            "text": "Does 'brain fog' ever make you feel like you aren't performing at your best professionally?",
            "group": "Impact"
        },
        {
            "id": "q-nd-4",
            "text": "Are you sleeping well at night, or do you feel like your rest could be better? (Night Renew)",
            "group": "Sleep/Recovery"
        },
        {
            "id": "q-nd-5",
            "text": "Do you have any ringing in your ears (tinnitus)? (NeuroSilence)",
            "group": "Auditory"
        },
        {
            "id": "q-nd-6",
            "text": "Do you ever experience numbness, tingling, or shooting pains in your hands or feet? (Nervital)",
            "group": "Nerves"
        },
        {
            "id": "q-nd-7",
            "text": "Do you have digestive issues like bloating or irregularity? (Probiotic Balance)",
            "group": "Gut-Brain"
        },
        {
            "id": "q-nd-8",
            "text": "Do you feel like your immune system is weak or you get sick often? (Vital Defense)",
            "group": "Immunity"
        },
        {
            "id": "q-nd-9",
            "text": "Are you currently taking any blood pressure, cholesterol, or diabetic medications? (Golden Vita Pure)",
            "group": "Medical History"
        },
        {
            "id": "q-nd-10",
            "text": "Are you carrying any extra weight that might be affecting your energy? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-nd-11",
            "text": "Do you have cold hands/feet or general circulation issues? (AlphaFlow)",
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
                    "id": "symp-eye-strain",
                    "text": "Eye Strain / Screen Fatigue",
                    "pitch": "Your eyes are essentially an extension of your brain. Staring at screens all day causes oxidative stress in the eye tissue. Optivell protects your vision from this 'blue light' damage.",
                    "benefit": "help protect eyes from digital strain"
                }
            ]
        },
        {
            "id": "supp-neurocept",
            "name": "Neurocept",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-focus",
                    "text": "Lack of Focus / Needs Mental Clarity",
                    "pitch": "While Neurodyne restores long-term health, Neurocept is designed to give you that immediate 'edge' back, sharpening your daily focus.",
                    "benefit": "help support mental clarity and focus"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-brain",
                    "text": "Digestive Issues / Brain Fog",
                    "pitch": "Your gut produces 90% of your serotonin (focus chemical). Probiotic Balance supports the 'second brain' in your gut to clear the fog in your head.",
                    "benefit": "support the gut-brain connection"
                }
            ]
        },
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-fog",
                    "text": "Weak Immunity / Run Down",
                    "pitch": "When your immune system is fighting low-grade infections, it causes brain inflammation (fog). Vital Defense clears the infection so your brain can think clearly again.",
                    "benefit": "help reduce immune-related brain fog"
                }
            ]
        },
        {
            "id": "supp-neurosilence",
            "name": "NeuroSilence",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-tinnitus",
                    "text": "Ringing in Ears (Tinnitus)",
                    "pitch": "Since you mentioned the ringing in your ears, this formula is specifically designed to help quiet that noise and support auditory nerve health.",
                    "benefit": "help silence the ringing and support hearing"
                }
            ]
        },
        {
            "id": "supp-nervital",
            "name": "Nervital",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-pain",
                    "text": "Neuropathy / Numbness / Tingling",
                    "pitch": "For that tingling and numbness, we need to support the nerves themselves. This works to repair the communication lines in your nervous system.",
                    "benefit": "help protect and repair nerve pathways"
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
                    "text": "Poor Sleep / Insomnia",
                    "pitch": "Your brain does its best repair work while you sleep. This helps you get into that deep, restorative REM cycle so you wake up with a clear head.",
                    "benefit": "help support deep, restorative sleep"
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
                    "text": "Diabetes / Blood Sugar Issues",
                    "pitch": "High blood sugar causes inflammation in the brain (often called 'Type 3 Diabetes'). This helps stabilize glucose to protect your cognitive function.",
                    "benefit": "help protect the brain from sugar-induced inflammation"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-brain",
                    "text": "Overweight / Slow Metabolism",
                    "pitch": "Excess weight causes systemic inflammation that crosses the blood-brain barrier, causing 'brain fog.' Lipolyne supports healthy metabolism to reduce this inflammatory load.",
                    "benefit": "help reduce inflammation affecting cognitive clarity"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-flow-brain",
                    "text": "Poor Circulation / Male Performance",
                    "pitch": "Your brain uses 20% of your body's oxygen. AlphaFlow improves blood flow not just for performance, but to ensure your brain gets the oxygen it needs to think clearly.",
                    "benefit": "help deliver oxygen-rich blood to the brain"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-eye", "name": "Eye Strain", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep/Recovery", "gender": "any" },
        { "id": "g-audio", "name": "Auditory", "gender": "any" },
        { "id": "g-nerve", "name": "Nerves", "gender": "any" },
        { "id": "g-gb", "name": "Gut-Brain", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
