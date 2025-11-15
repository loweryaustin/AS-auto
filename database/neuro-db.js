/**
 * NEURO_CONFIG
 * Database file for the "Neuro Pro" supplement.
 */
const NEURO_CONFIG = {
    "baseProduct": {
        name: "Neuro Pro (Base)",
        pitch: "This is the base product for cognitive function. It helps support brain health and memory."
    },
    "recommendations": [
        { 
            id: "neuro-focus", 
            name: "Focus Max", 
            gender: "any",
            symptoms: [
                { 
                    id: "symp-focus-1", 
                    text: "Brain fog / Trouble concentrating",
                    pitch: "For brain fog... 'This will help clear the cobwebs and support the neurotransmitters responsible for focus and clarity.'",
                    benefit: "help with focus and mental clarity"
                }
            ]
        },
        { 
            id: "neuro-sleep",
            name: "Deep Sleep Pro",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-nsleep-1", 
                    text: "Poor Sleep / Waking up tired",
                    pitch: "For your sleep issues... 'This one helps with falling asleep and staying asleep. Quality sleep is essential for memory consolidation.'",
                    benefit: "help you get restorative sleep"
                }
            ]
        },
        { 
            id: "neuro-calm",
            name: "Calm Support",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-calm-1", 
                    text: "Feeling stressed or anxious",
                    pitch: "For stress... 'This helps balance your cortisol levels. High stress can be very damaging to memory and cognitive function.'",
                    benefit: "help reduce stress and anxiety"
                }
            ]
        }
    ]
};
