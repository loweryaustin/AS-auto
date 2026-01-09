/**
 * Neuro Gold (Astron)
 * Database file for the "Neuro Gold" supplement.
 * Product Line: Astron
 * Protocol: Cognitive Function & Brain Health
 */
DATABASE_CONFIGS["Neuro Gold"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Neuro Gold (Base)",
        "pitch": "This formula supports cognitive function, memory recall, and overall brain health to help you stay sharp and focused.",
        "gender": "any"
    },
    "knowledgeBase": "NeuroGold",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ng-1",
            "text": "How long have you been noticing issues with your memory or focus?",
            "group": "History"
        },
        {
            "id": "q-ng-2",
            "text": "Do you feel like you have 'brain fog' that makes it hard to concentrate?",
            "group": "Symptoms"
        },
        {
            "id": "q-ng-3",
            "text": "Do you spend a lot of time on computers, causing eye fatigue? (Optivell)",
            "group": "Strain"
        },
        {
            "id": "q-ng-4",
            "text": "Are you getting quality sleep, or do you wake up feeling mentally tired? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-ng-5",
            "text": "Do you experience ringing in your ears (tinnitus)? (NeuroSilence)",
            "group": "Auditory"
        },
        {
            "id": "q-ng-6",
            "text": "Do you have any numbness or tingling in your extremities? (Nervital)",
            "group": "Nerve Health"
        },
        {
            "id": "q-ng-7",
            "text": "Are you managing high blood sugar or diabetes? (Golden Vita Pure)",
            "group": "Medical History"
        },
        {
            "id": "q-ng-8",
            "text": "Do you have poor circulation or cold hands/feet? (AlphaFlow)",
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
                    "text": "Eye Strain / Screen Usage",
                    "pitch": "The eye is an extension of the brain. If you have brain fog, you likely have eye strain too. Optivell supports the visual part of your cognitive system.",
                    "benefit": "help support vision and reduce eye strain"
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
                    "pitch": "While Neuro Gold supports memory structure, Neurodyne provides the antioxidants to clear the 'fog' and oxidative stress clouding your thinking.",
                    "benefit": "help clear brain fog and protect neurons"
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
                    "text": "Poor Sleep / Waking Tired",
                    "pitch": "Memory consolidation happens during deep sleep. Night Renew helps you get the deep rest needed to store the memories you make during the day.",
                    "benefit": "support memory consolidation during sleep"
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
                    "pitch": "Constant ringing distracts the brain and lowers cognitive performance. This helps quiet the noise so you can focus.",
                    "benefit": "help silence ringing to improve focus"
                }
            ]
        },
        {
            "id": "supp-nervital",
            "name": "Nervital",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-numbness",
                    "text": "Numbness / Tingling",
                    "pitch": "Nerve health is brain health. Nervital repairs the peripheral nerves to ensure clear signals are sent to and from the brain.",
                    "benefit": "support healthy nerve signal transmission"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-brain",
                    "text": "High Blood Sugar / Diabetes",
                    "pitch": "High sugar levels cause inflammation in the brain. Regulating this is crucial for protecting long-term cognitive function.",
                    "benefit": "help protect the brain from sugar damage"
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
                    "text": "Poor Circulation / Cold Hands",
                    "pitch": "The brain consumes 20% of your oxygen. AlphaFlow ensures that oxygen-rich blood is actually reaching your brain cells.",
                    "benefit": "help deliver oxygen to the brain"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-str", "name": "Strain", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-aud", "name": "Auditory", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
