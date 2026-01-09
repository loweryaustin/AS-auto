/**
 * NeuroSilence (Astron)
 * Database file for the "NeuroSilence" supplement.
 * Product Line: Astron
 * Protocol: Tinnitus Relief & Hearing Support
 */
DATABASE_CONFIGS["NeuroSilence"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "NeuroSilence (Base)",
        "pitch": "This formula targets the root causes of ringing in the ears, supporting auditory nerve health and quieting the noise so you can find peace.",
        "gender": "any"
    },
    "knowledgeBase": "NeuroSilence",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ns-1",
            "text": "How long have you been dealing with the ringing or buzzing in your ears?",
            "group": "History"
        },
        {
            "id": "q-ns-2",
            "text": "Is the sound constant, or does it come and go with stress or diet?",
            "group": "Symptoms"
        },
        {
            "id": "q-ns-3",
            "text": "Does the noise make it hard to concentrate or sleep? (Night Renew)",
            "group": "Impact"
        },
        {
            "id": "q-ns-4",
            "text": "Do you also experience brain fog or trouble focusing? (Neurodyne)",
            "group": "Cognitive"
        },
        {
            "id": "q-ns-5",
            "text": "Do you have poor circulation or cold hands and feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-ns-6",
            "text": "Are you under a lot of stress or anxiety? (Nervital)",
            "group": "Stress"
        },
        {
            "id": "q-ns-7",
            "text": "Do you notice sugar or salty foods make the ringing worse? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-ns-8",
            "text": "Do you feel like your immune system is weak or fighting something off? (Vital Defense)",
            "group": "Immunity"
        }
    ],
    "recommendations": [
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-ear",
                    "text": "Poor Circulation / Cold Ears",
                    "pitch": "The inner ear is fed by a tiny artery. If circulation is poor, the ear starves and rings. AlphaFlow opens up blood flow to feed the auditory nerves.",
                    "benefit": "help improve blood flow to the inner ear"
                }
            ]
        },
        {
            "id": "supp-nervital",
            "name": "Nervital",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress-ring",
                    "text": "Stress / Anxiety Spikes",
                    "pitch": "Stress makes tinnitus louder because it inflames the nerves. Nervital calms the nervous system to turn down the volume.",
                    "benefit": "help calm nerves to reduce ringing volume"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fog-ring",
                    "text": "Brain Fog / Distraction",
                    "pitch": "Tinnitus forces your brain to work overtime filtering noise, causing brain fog. Neurodyne supports brain health to handle this extra load.",
                    "benefit": "help support the brain against auditory stress"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-ring",
                    "text": "Insomnia / Night Noise",
                    "pitch": "Silence at night makes the ringing seem louder. Night Renew helps you fall asleep quickly so you aren't lying awake listening to the noise.",
                    "benefit": "help you sleep through the ringing"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-ring",
                    "text": "Diet Triggers / Sugar",
                    "pitch": "Sugar spikes cause inflammation and fluid retention in the ear, making ringing worse. Golden Vita Pure regulates sugar to stop these spikes.",
                    "benefit": "help prevent sugar-induced tinnitus spikes"
                }
            ]
        },
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-ear",
                    "text": "Ear Infections / Sinus Issues",
                    "pitch": "Low-grade infections in the ear canal can trigger tinnitus. Vital Defense boosts your immunity to clear out any lingering issues.",
                    "benefit": "help support immune health in the ear"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-cog", "name": "Cognitive", "gender": "any" },
        { "id": "g-str", "name": "Stress", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" }
    ],
    "references": []
};
