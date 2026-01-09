/**
 * NueroMax (Astron)
 * Database file for the "NueroMax" supplement.
 * Product Line: Astron
 * Protocol: Nootropic & Mental Clarity
 */
DATABASE_CONFIGS["NueroMax"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "NueroMax (Base)",
        "pitch": "This is your daily nootropic for mental clarity. It helps clear the fog and sharpen your focus so you can perform at your best.",
        "gender": "any"
    },
    "knowledgeBase": "NueroMax",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-nm-1",
            "text": "How would you rate your ability to focus on tasks right now?",
            "group": "Focus"
        },
        {
            "id": "q-nm-2",
            "text": "Do you often feel mentally drained or 'foggy' by the afternoon?",
            "group": "Energy"
        },
        {
            "id": "q-nm-3",
            "text": "Do you also suffer from eye strain or tired eyes from screens? (Optivell)",
            "group": "Visual Stress"
        },
        {
            "id": "q-nm-4",
            "text": "Are you looking for something to help with long-term brain health as well? (Neurodyne)",
            "group": "Long-Term"
        },
        {
            "id": "q-nm-5",
            "text": "How is your sleep? Do you wake up feeling mentally refreshed? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-nm-6",
            "text": "Do you experience energy crashes after meals or sugar cravings? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-nm-7",
            "text": "Do you have issues with digestion or bloating? (Probiotic Balance)",
            "group": "Gut-Brain"
        },
        {
            "id": "q-nm-8",
            "text": "Do you have cold hands/feet or poor circulation? (AlphaFlow)",
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
                    "id": "symp-eye-fatigue",
                    "text": "Screen Fatigue / Eye Strain",
                    "pitch": "Mental fatigue is often linked to visual fatigue. Optivell supports your eyes so your brain doesn't have to work as hard to process what you see.",
                    "benefit": "help reduce mental fatigue caused by eye strain"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-long-term",
                    "text": "Long-term Brain Health / Prevention",
                    "pitch": "NueroMax gives you the immediate focus, while Neurodyne provides the antioxidants to protect your brain cells for the long haul.",
                    "benefit": "help protect long-term brain health"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-focus",
                    "text": "Poor Sleep / Morning Fog",
                    "pitch": "You can't focus if your brain isn't rested. Night Renew ensures you get the deep sleep needed to clear out the mental cobwebs.",
                    "benefit": "help restore mental energy via deep sleep"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-crash",
                    "text": "Afternoon Crash / Sugar Cravings",
                    "pitch": "Brain fog is often caused by unstable blood sugar. Golden Vita Pure stops the sugar crashes that kill your concentration.",
                    "benefit": "help prevent sugar-induced brain fog"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-brain",
                    "text": "Poor Circulation / Cold Extremities",
                    "pitch": "Your brain needs oxygen to focus. AlphaFlow boosts circulation to deliver more oxygen-rich blood to your brain cells.",
                    "benefit": "help oxygenate the brain for clarity"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-focus",
                    "text": "Digestive Issues / Mood",
                    "pitch": "90% of your serotonin (focus chemical) is made in the gut. Probiotic Balance optimizes your gut to produce the fuel your brain needs.",
                    "benefit": "support neurotransmitter production in the gut"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-foc", "name": "Focus", "gender": "any" },
        { "id": "g-en", "name": "Energy", "gender": "any" },
        { "id": "g-vis", "name": "Visual Stress", "gender": "any" },
        { "id": "g-long", "name": "Long-Term", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Brain", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
