/**
 * Memyts (Memory)
 * Database file for the "Memyts" supplement.
 * Product Line: Digital Lions
 * Protocol: Memory & Cognitive Health
 */
DATABASE_CONFIGS["Memyts"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Memyts (Base)",
        "pitch": "Memory and cognitive support.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "knowledgeBase": "Memyts",
    "questions": [
        {
            "id": "q-mem-1",
            "text": "Are you giving this to a loved one or is this for you? (Protocol Setup)",
            "group": "Protocol Setup"
        },
        {
            "id": "q-mem-2",
            "text": "What is your age? (Protocol Setup)",
            "group": "Protocol Setup"
        },
        {
            "id": "q-mem-3",
            "text": "Are we experiencing short term or long term memory issues? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-mem-4",
            "text": "Are you having issues remembering names or words? (GoldenFrib)",
            "group": "Diagnostic"
        },
        {
            "id": "q-mem-5",
            "text": "Do you have any blood pressure issues? (Tenurina)",
            "group": "Medical History"
        },
        {
            "id": "q-mem-6",
            "text": "Do you have any tingling or numbness in your feet or hands? (Arialief)",
            "group": "Neuropathy Check"
        },
        {
            "id": "q-mem-7",
            "text": "Do you have any arthritis or inflammation in the joints? (Feilaira or Resverador)",
            "group": "Medical History"
        },
        {
            "id": "q-mem-8",
            "text": "Do you ever walk into a room and forget why you're there? (Validation)",
            "group": "Validation"
        },
        {
            "id": "q-mem-9",
            "text": "History of Dementia/Alzheimer's in the family? (Duration Logic)",
            "group": "Duration Logic"
        }
    ],
    "recommendations": [
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-recall",
                    "text": "Forgetting Names / Words (Recall issues)",
                    "pitch": "The gut produces serotonin and dopamine, which are required for word and name recall. We must strengthen the gut to restore this function.",
                    "benefit": "help restore neurotransmitters for recall"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fog",
                    "text": "Brain Fog / \"Chaos\" / Trouble focusing",
                    "pitch": "Reduces inflammation in the brain. Inflammation causes 'noise' or chaos that disrupts clear thinking.",
                    "benefit": "help reduce brain inflammation and clear brain fog"
                }
            ]
        },
        {
            "id": "supp-feilaira",
            "name": "Feilaira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-trauma",
                    "text": "Physical Trauma (Falls, Surgeries, Broken Bones)",
                    "pitch": "When the body has physical trauma (like arthritis or a fall), it sends all nutrients to fix the body so you can 'move and get food', starving the brain. This supplement handles the physical inflammation so nutrients can go back to the brain.",
                    "benefit": "help redirect nutrients back to the brain"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-flow",
                    "text": "Low Blood Flow (Low BP, getting dizzy)",
                    "pitch": "Ensures oxygenated blood is pumping to the brain to flush out toxins (like microplastics) and deliver nutrients.",
                    "benefit": "help flush toxins and deliver nutrients to the brain"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-numbness",
                    "text": "Tingling / Numbness",
                    "pitch": "If you have nerve degeneration in the hands or feet, it implies a systemic issue that may be affecting the brain. This helps restore nerve health.",
                    "benefit": "help support systemic nerve health"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-proto", "name": "Protocol Setup", "gender": "any" },
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-neuro", "name": "Neuropathy Check", "gender": "any" },
        { "id": "g-valid", "name": "Validation", "gender": "any" },
        { "id": "g-dur", "name": "Duration Logic", "gender": "any" },
    ],
    "references": []
};
