/**
 * Neurocept (Astron)
 * Database file for the "Neurocept" supplement.
 * Product Line: Astron
 * Protocol: Brain Health, Focus & Memory
 */
DATABASE_CONFIGS["Neurocept"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Neurocept (Base)",
        "pitch": "This formula is designed to help you reclaim your edge by supporting the mental clarity you need for a high-performance lifestyle.",
        "gender": "any"
    },
    "knowledgeBase": "Neurocept",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ncp-1",
            "text": "How long have you been noticing issues with your focus or mental clarity?",
            "group": "History"
        },
        {
            "id": "q-ncp-2",
            "text": "Do you feel like you struggle to stay on task, or do you have 'brain fog'?",
            "group": "Focus"
        },
        {
            "id": "q-ncp-3",
            "text": "Are you looking for something that just gives you a temporary 'lift,' or long-term support? (Neurodyne)",
            "group": "Goals"
        },
        {
            "id": "q-ncp-4",
            "text": "How is your sleep? Do you wake up feeling mentally refreshed? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-ncp-5",
            "text": "Do you also struggle with remembering names or details (retention)? (Memotril)",
            "group": "Memory"
        },
        {
            "id": "q-ncp-6",
            "text": "Do you experience energy crashes after meals or sugar cravings? (Golden Vita Pure)",
            "group": "Diet/Energy"
        },
        {
            "id": "q-ncp-7",
            "text": "Do you have poor circulation or cold hands and feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-ncp-8",
            "text": "Do you have ringing in your ears that distracts you? (NeuroSilence)",
            "group": "Auditory"
        }
    ],
    "recommendations": [
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-long-term",
                    "text": "Long-term Brain Health / Prevention",
                    "pitch": "Neurocept gives you the immediate focus, while Neurodyne provides the antioxidants to protect your brain cells for the long haul.",
                    "benefit": "help protect long-term brain health"
                }
            ]
        },
        {
            "id": "supp-memotril",
            "name": "Memotril",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-memory",
                    "text": "Memory Retention / Forgetting Names",
                    "pitch": "Neurocept helps you focus in the moment, but Memotril helps you hold onto those memories so you can recall them later.",
                    "benefit": "help improve memory retention and recall"
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
                    "pitch": "You can't have a sharp mind if your brain isn't resting. Night Renew ensures you get the deep sleep needed to clear out mental fatigue.",
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
                    "pitch": "Your brain consumes 20% of your body's oxygen. AlphaFlow boosts circulation to deliver more fuel to your brain cells.",
                    "benefit": "help oxygenate the brain for clarity"
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
                    "text": "Ringing in Ears / Distraction",
                    "pitch": "Constant ringing pulls your focus away. NeuroSilence helps quiet the noise so you can concentrate on what matters.",
                    "benefit": "help silence auditory distractions"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-foc", "name": "Focus", "gender": "any" },
        { "id": "g-goal", "name": "Goals", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-mem", "name": "Memory", "gender": "any" },
        { "id": "g-diet", "name": "Diet/Energy", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-aud", "name": "Auditory", "gender": "any" }
    ],
    "references": []
};
