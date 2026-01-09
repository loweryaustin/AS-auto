/**
 * Nervital (Astron)
 * Database file for the "Nervital" supplement.
 * Product Line: Astron
 * Protocol: Nerve Health & Neuropathy
 */
DATABASE_CONFIGS["Nervital"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "Nervital (Base)",
        "pitch": "We’re not just looking at the brain; we’re supporting the entire nervous system to ensure your body’s communication lines stay clear and fast.",
        "gender": "any"
    },
    "knowledgeBase": "Nervital",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-nv-1",
            "text": "Where are you experiencing the nerve discomfort? Hands, feet, or elsewhere?",
            "group": "Diagnostic"
        },
        {
            "id": "q-nv-2",
            "text": "How would you describe the sensation? Is it burning, tingling, or numbness?",
            "group": "Symptoms"
        },
        {
            "id": "q-nv-3",
            "text": "Do you have any family history of Glaucoma or vision issues related to nerves? (Optivell)",
            "group": "Optic Nerve"
        },
        {
            "id": "q-nv-4",
            "text": "Is the discomfort affecting your ability to sleep at night? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-nv-5",
            "text": "Does 'brain fog' or memory issues ever make you feel like you aren't performing at your best? (Neurocept)",
            "group": "Cognitive"
        },
        {
            "id": "q-nv-6",
            "text": "Do you have any ringing in your ears or tinnitus? (NeuroSilence)",
            "group": "Auditory"
        },
        {
            "id": "q-nv-7",
            "text": "Have you noticed any digestive issues or bloating? (Probiotic Balance)",
            "group": "Gut-Health"
        },
        {
            "id": "q-nv-8",
            "text": "Do you feel like your immune system or recovery is slower than it used to be? (Vital Defense)",
            "group": "Immunity"
        },
        {
            "id": "q-nv-9",
            "text": "Are you currently taking any blood pressure, cholesterol, or diabetic medications? (Golden Vita Pure)",
            "group": "Medical History"
        },
        {
            "id": "q-nv-10",
            "text": "Are you carrying any extra weight that might be putting physical pressure on your lower back or legs? (Lipolyne)",
            "group": "Weight/Pressure"
        },
        {
            "id": "q-nv-12",
            "text": "Do you have issues with circulation or, for men, performance issues? (AlphaFlow)",
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
                    "id": "symp-optic",
                    "text": "Optic Nerve Health / Glaucoma Risk",
                    "pitch": "The optic nerve connects your eye to your brain. If you have nerve issues elsewhere, this critical nerve needs support too. Optivell helps protect that connection.",
                    "benefit": "help support optic nerve health"
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
                    "text": "Brain Fog / Lack of Focus",
                    "pitch": "This formula is designed to help you reclaim your edge by supporting the mental clarity you need for a high-performance lifestyle.",
                    "benefit": "help kickstart mental clarity"
                }
            ]
        },
        {
            "id": "supp-neurodyne",
            "name": "Neurodyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress-fog",
                    "text": "Stress / Mental Fatigue",
                    "pitch": "Think of this as your daily shield against the 'brain fog' that can come from a stressful schedule.",
                    "benefit": "help provide antioxidant support for the brain"
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
                    "pitch": "Since you mentioned the ringing, NeuroSilence is designed to support hearing health and provide relief from that constant noise.",
                    "benefit": "help quiet the ringing in your ears"
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
                    "text": "Digestive Issues / Gut Health",
                    "pitch": "A sharper mind and healthy nerves often start in the gut; this helps create the right internal environment for your body to function at its peak.",
                    "benefit": "support the gut-brain-nerve axis"
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
                    "text": "Weak Immunity / Slow Recovery",
                    "pitch": "This is your nutritional insurance policy, helping to strengthen your natural defenses so your body can focus on repairing nerve health.",
                    "benefit": "support natural defenses and recovery"
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
                    "text": "Poor Sleep / Night Pain",
                    "pitch": "Nerve repair happens most efficiently during deep sleep. This helps you get the rest you need for that regeneration to occur.",
                    "benefit": "support overnight regeneration"
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
                    "text": "Blood Sugar / Diabetes",
                    "pitch": "High blood sugar can damage nerve endings. This helps regulate glucose levels to protect the nerves from further stress.",
                    "benefit": "help support healthy blood sugar levels"
                }
            ]
        },
        {
            "id": "supp-lipolyne",
            "name": "Lipolyne",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-nerve",
                    "text": "Overweight / Pressure on Nerves",
                    "pitch": "Carrying extra weight puts physical compression on nerve pathways, especially in the spine. Lipolyne helps support metabolism to reduce this load.",
                    "benefit": "help reduce physical weight pressure on nerves"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-flow-nerve",
                    "text": "Poor Circulation / Male Performance",
                    "pitch": "Nerves require high levels of oxygen to repair. AlphaFlow supports blood flow to ensure oxygen reaches the nerve endings efficiently.",
                    "benefit": "help improve blood flow to nourish nerves"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-opt", "name": "Optic Nerve", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-cog", "name": "Cognitive", "gender": "any" },
        { "id": "g-audio", "name": "Auditory", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Health", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-weight", "name": "Weight/Pressure", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ],
    "references": []
};
