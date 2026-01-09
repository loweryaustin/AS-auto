/**
 * Optivell (Astron)
 * Database file for the "Optivell" supplement.
 * Product Line: Astron
 * Protocol: Vision Support & Eye Health
 */
DATABASE_CONFIGS["Optivell"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Optivell (Base)",
        "pitch": "This is your complete vision defense formula. It supports macular health, protects against blue light damage, and helps maintain sharp focus as you age.",
        "gender": "any"
    },
    "knowledgeBase": "Optivell",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-opt-1",
            "text": "Have you noticed your vision getting blurrier, especially when reading or driving at night?",
            "group": "Symptoms"
        },
        {
            "id": "q-opt-2",
            "text": "Do you spend a lot of time looking at screens (phones/computers) during the day?",
            "group": "Lifestyle"
        },
        {
            "id": "q-opt-3",
            "text": "Have you been told you have high blood pressure or issues with circulation? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-opt-4",
            "text": "Are you managing Diabetes or high blood sugar levels? (Golden Vita Pure)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-opt-5",
            "text": "Do your eyes feel tired, dry, or strained by the end of the day? (Neurodyne)",
            "group": "Strain"
        },
        {
            "id": "q-opt-6",
            "text": "How is your sleep quality? Do your eyes feel rested in the morning? (Night Renew)",
            "group": "Recovery"
        },
        {
            "id": "q-opt-7",
            "text": "Do you have a family history of Macular Degeneration or Glaucoma? (Nervital)",
            "group": "History"
        },
        {
            "id": "q-opt-8",
            "text": "Do you have digestive issues that might stop you from absorbing nutrients? (Probiotic Balance)",
            "group": "Absorption"
        }
    ],
    "recommendations": [
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-eye",
                    "text": "Diabetes / High Blood Sugar",
                    "pitch": "High blood sugar is the #1 enemy of vision. It damages the tiny blood vessels in the retina (Retinopathy). Golden Vita Pure regulates sugar to protect your eyes from this damage.",
                    "benefit": "help protect retinal vessels from sugar damage"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-eye",
                    "text": "Poor Circulation / High BP",
                    "pitch": "Your eyes are starved for oxygen. The micro-capillaries feeding the optic nerve need massive blood flow. AlphaFlow dilates these vessels to ensure nutrients actually reach the eye.",
                    "benefit": "help deliver oxygen to the optic nerve"
                }
            ]
        },
        {
            "id": "supp-nervital",
            "name": "Nervital",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-optic-nerve",
                    "text": "Glaucoma Risk / Nerve Issues",
                    "pitch": "The eye connects to the brain via the Optic Nerve. If that nerve connection degrades, you lose vision. Nervital supports the health of this crucial 'cable'.",
                    "benefit": "support the health of the optic nerve"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-strain",
                    "text": "Eye Strain / Blue Light",
                    "pitch": "The eye is an extension of the brain. Neurodyne provides high-potency antioxidants to protect the neural tissue in your eyes from the 'rust' caused by blue light exposure.",
                    "benefit": "help protect eye tissue from oxidative stress"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-absorb-eye",
                    "text": "Poor Digestion / Absorption",
                    "pitch": "Vision nutrients like Lutein are hard to absorb. If your gut is sluggish, you'll flush these nutrients out. This ensures you actually absorb what you're taking.",
                    "benefit": "maximize absorption of vision nutrients"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-eye",
                    "text": "Dry Eyes / Poor Sleep",
                    "pitch": "Your eyes heal and re-hydrate while you sleep. If you aren't getting deep rest, your eyes can't clear out the cellular waste from the day. Night Renew ensures that repair cycle happens.",
                    "benefit": "support nightly eye repair and hydration"
                }
            ]
        },
        {
            "id": "supp-neurocept",
            "name": "Neurocept",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-focus-eye",
                    "text": "Blurry Vision / Lack of Focus",
                    "pitch": "Sometimes 'blurry vision' is actually your brain struggling to process the image. Neurocept speeds up neural processing to help sharpen your visual focus.",
                    "benefit": "help sharpen visual processing speed"
                }
            ]
        },
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam-eye",
                    "text": "Redness / Inflammation",
                    "pitch": "Chronic inflammation can cause pressure buildup in the eye. Vital Defense supports a healthy immune response to keep ocular inflammation down.",
                    "benefit": "help reduce inflammation in the eye"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-life", "name": "Lifestyle", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-root", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-str", "name": "Strain", "gender": "any" },
        { "id": "g-rec", "name": "Recovery", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-abs", "name": "Absorption", "gender": "any" },
        { "id": "g-neuro", "name": "Neurological", "gender": "any" }
    ],
    "references": []
};
