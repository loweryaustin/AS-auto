/**
 * Night Renew (Astron)
 * Database file for the "Night Renew" supplement.
 * Product Line: Astron
 * Protocol: Sleep & Overnight Regeneration
 */
DATABASE_CONFIGS["Night Renew"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Night Renew (Base)",
        "pitch": "This helps you achieve deep, restorative sleep so your body can repair tissues, regulate hormones, and recharge for the next day.",
        "gender": "any"
    },
    "knowledgeBase": "NightRenew",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-nr-1",
            "text": "How many hours of sleep are you averaging per night?",
            "group": "History"
        },
        {
            "id": "q-nr-2",
            "text": "Do you struggle more with falling asleep or staying asleep?",
            "group": "Symptoms"
        },
        {
            "id": "q-nr-3",
            "text": "Do your eyes feel dry, gritty, or blurry in the mornings? (Optivell)",
            "group": "Recovery"
        },
        {
            "id": "q-nr-4",
            "text": "Do you notice 'brain fog' or trouble focusing during the day? (Neurodyne)",
            "group": "Cognitive"
        },
        {
            "id": "q-nr-5",
            "text": "Are you trying to lose weight or manage cravings? (Lipolyne)",
            "group": "Metabolism"
        },
        {
            "id": "q-nr-6",
            "text": "Do you have high stress or anxiety that keeps your mind racing at night? (Nervital)",
            "group": "Stress"
        },
        {
            "id": "q-nr-7",
            "text": "Do you feel like your immune system is weak? (Vital Defense)",
            "group": "Immunity"
        },
        {
            "id": "q-nr-8",
            "text": "Do you wake up hungry or with night sweats? (Golden Vita Pure)",
            "group": "Blood Sugar"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-eye-repair",
                    "text": "Dry Eyes / Morning Blur",
                    "pitch": "Your eyes do their heavy repair and hydration work while you sleep. Optivell provides the nutrients they need for this nightly restoration cycle.",
                    "benefit": "help restore eye moisture and clarity overnight"
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
                    "text": "Brain Fog / Morning Groggy",
                    "pitch": "Your brain washes out toxins while you sleep. Night Renew helps you sleep, and Neurodyne protects your brain cells from the damage caused by lack of rest.",
                    "benefit": "help clear brain fog and protect neurons"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight",
                    "text": "Weight Gain / Cravings",
                    "pitch": "Poor sleep raises your hunger hormone (Ghrelin). Night Renew fixes the sleep, and Lipolyne boosts your metabolism to burn fat while you rest.",
                    "benefit": "help regulate hunger hormones and burn fat"
                }
            ]
        },
        {
            "id": "supp-nervital",
            "name": "Nervital",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "Racing Mind / Anxiety",
                    "pitch": "If you can't turn your brain off, your nervous system is overactive. Nervital calms the nerves so you can relax into sleep naturally.",
                    "benefit": "help calm the nervous system for sleep"
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
                    "text": "Waking up Hungry / Night Sweats",
                    "pitch": "Blood sugar crashes at 3 AM can wake you up suddenly. Golden Vita Pure stabilizes glucose levels so you can sleep through the night.",
                    "benefit": "help prevent blood sugar crashes at night"
                }
            ]
        },
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune",
                    "text": "Sick Often / Slow Recovery",
                    "pitch": "Sleep is when your immune system recharges. Vital Defense provides the raw materials your body needs to rebuild its defenses overnight.",
                    "benefit": "support immune system recovery during sleep"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-rec", "name": "Recovery", "gender": "any" },
        { "id": "g-cog", "name": "Cognitive", "gender": "any" },
        { "id": "g-meta", "name": "Metabolism", "gender": "any" },
        { "id": "g-str", "name": "Stress", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-sug", "name": "Blood Sugar", "gender": "any" }
    ],
    "references": []
};
