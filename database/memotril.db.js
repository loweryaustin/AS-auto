/**
 * Memotril (Astron)
 * Database file for the "Memotril" supplement.
 * Product Line: Astron
 * Protocol: Memory Retention & Mental Sharpness
 */
DATABASE_CONFIGS["Memotril"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Memotril (Base)",
        "pitch": "This formula is specifically designed to support memory retention and recall, helping you hold onto important details and stay sharp.",
        "gender": "any"
    },
    "knowledgeBase": "Memotril",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-mm-1",
            "text": "How long have you noticed that your memory isn't as sharp as it used to be?",
            "group": "History"
        },
        {
            "id": "q-mm-2",
            "text": "Do you struggle more with short-term recall (names/keys) or long-term memories?",
            "group": "Symptoms"
        },
        {
            "id": "q-mm-3",
            "text": "Do you also experience 'brain fog' or difficulty focusing on tasks? (Neurodyne)",
            "group": "Clarity"
        },
        {
            "id": "q-mm-4",
            "text": "Have you noticed any issues with vision that make reading harder? (Optivell)",
            "group": "Vision"
        },
        {
            "id": "q-mm-5",
            "text": "How is your sleep quality? Do you feel rested in the morning? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-mm-6",
            "text": "Do you notice sugar cravings or energy slumps that affect your thinking? (Golden Vita Pure)",
            "group": "Diet/Energy"
        },
        {
            "id": "q-mm-7",
            "text": "Do you have digestive issues or bloating? (Probiotic Balance)",
            "group": "Gut-Brain"
        },
        {
            "id": "q-mm-8",
            "text": "Do you have poor circulation or cold hands/feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-mm-9",
            "text": "Do you ever feel like you need an extra boost of immediate focus? (Neurocept)",
            "group": "Focus"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-visual-mem",
                    "text": "Blurry Vision / Reading Difficulty",
                    "pitch": "A huge part of memory is visual processing. If your eyes are straining, your brain can't record the information clearly. Optivell supports sharp vision to aid memory.",
                    "benefit": "help support visual memory processing"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fog",
                    "text": "Brain Fog / Mental Fatigue",
                    "pitch": "Memo Master sharpens your recall, while Neurodyne clears the 'fog' and oxidative stress that makes thinking feel slow and heavy.",
                    "benefit": "help clear brain fog for sharper thinking"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-mem",
                    "text": "Poor Sleep / Forgetfulness",
                    "pitch": "Your brain consolidates memories while you sleep. Night Renew ensures you get the deep rest needed to lock in the information you learned today.",
                    "benefit": "support memory storage during sleep"
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
                    "text": "Lack of Focus / Distraction",
                    "pitch": "Neurocept provides the immediate 'spark' for focus, while Memo Master builds the long-term structure for retention. They complement each other perfectly.",
                    "benefit": "help boost immediate focus and attention"
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
                    "text": "Sugar Cravings / Brain Fog",
                    "pitch": "Sugar spikes cause inflammation in the brain's memory centers. Golden Vita Pure stabilizes glucose to protect your neurons from damage.",
                    "benefit": "help protect memory from sugar inflammation"
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
                    "text": "Poor Circulation / Cold Hands",
                    "pitch": "Your memory center (Hippocampus) needs high levels of oxygen. AlphaFlow ensures it gets the blood flow required for sharp recall.",
                    "benefit": "help deliver oxygen to memory centers"
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
                    "text": "Digestive Issues / Mood",
                    "pitch": "The chemicals needed for memory recall (neurotransmitters) are made in the gut. Probiotic Balance optimizes your gut to produce this cognitive fuel.",
                    "benefit": "support neurotransmitter production in the gut"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-clar", "name": "Clarity", "gender": "any" },
        { "id": "g-vis", "name": "Vision", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-diet", "name": "Diet/Energy", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Brain", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-foc", "name": "Focus", "gender": "any" }
    ],
    "references": []
};
