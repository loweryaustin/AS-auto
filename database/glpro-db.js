/**
 * GLPRO_CONFIG
 * Database file for the "GL Pro" supplement.
 */
const GLPRO_CONFIG = {
    "baseProduct": {
        name: "GL Pro (Base)",
        pitch: "This is the base product for diabetes. It helps the pancreas from the *inside*."
    },
    "recommendations": [
        { 
            id: "fpp", 
            name: "FreePain Pro (FPP)", 
            gender: "any",
            symptoms: [
                { 
                    id: "symp-fpp-1", 
                    text: "Tingling or numbness (Neuropathy)",
                    pitch: "For your tingling and numbness... 'That one is going to help with the tingling and numbness in the feet... help the nerves to start to regrow, and help to alleviate some of the pain.'",
                    benefit: "help with the tingling and numbness"
                }
            ]
        },
        { 
            id: "sleep",
            name: "Deep Sleep Pro",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-sleep-1", 
                    text: "Poor Sleep",
                    pitch: "For your sleep issues... 'This one helps with falling asleep and staying asleep, and helps make the sleep you do get more effective and regenerative.'",
                    benefit: "help you get better sleep"
                }
            ]
        },
        { 
            id: "slim",
            name: "Slim Boost Pro / Arctic Burn",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-slim-1", 
                    text: "Need to lose weight",
                    pitch: "For your weight loss goal/energy... 'This one's gonna help with the metabolism, help to retrain it and speed it up... helping your body to focus on metabolizing the fat for more sustained energy.'",
                    benefit: "help you get rid of the excess weight and boost energy"
                }
            ]
        },
        { 
            id: "tmax",
            name: "Tmax Pro",
            gender: "male",
            symptoms: [
                { 
                    id: "symp-tmax-1", 
                    text: "Fatigue / Low Energy",
                    pitch: "For your fatigue and recovery... 'This will boost those natural testosterone levels, helping you feel like a younger man again, but more importantly, helping your body recover like a younger man again.'",
                    benefit: "help with fatigue and recovery"
                },
                { 
                    id: "symp-tmax-2", 
                    text: "Symptoms of ED? (Male Only)",
                    pitch: "For your ED symptoms... 'This will boost those natural testosterone levels... helping your body recover like a younger man again.'",
                    benefit: "help with ED symptoms"
                }
            ]
        },
        { 
            id: "mens",
            name: "Men's Balance Pro",
            gender: "male",
            symptoms: [
                { 
                    id: "symp-mens-1", 
                    text: "Waking up for urination? (Male Only)",
                    pitch: "For waking up to urinate... 'This will help with healthy bladder and prostate function, helping you sleep... and helping your body get rid of the excess sugars more easily.'",
                    benefit: "help with nightly urination"
                }
            ]
        },
        { 
            id: "core",
            name: "Core Vitality Pro",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-core-1", 
                    text: "High Blood Pressure / Cholesterol",
                    pitch: "For your high blood pressure/cholesterol... 'That one's gonna help with circulation, cardiovascular health, as well as helping with healthy bone density.'",
                    benefit: "help with cardiovascular health and circulation"
                }
            ]
        },
        { 
            id: "flora",
            name: "Flora Flo",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-flora-1", 
                    text: "Bloating / Digestion",
                    pitch: "For your bloating... 'This one will help with that bloating issue... help with digestion as well as helping with the good bacterial balance in the gut.'",
                    benefit: "help with bloating and digestion"
                }
            ]
        },
        { 
            id: "sugar",
            name: "FreeSugar Pro",
            gender: "any",
            symptoms: [
                { 
                    id: "symp-sugar-1", 
                    text: "Blood sugar still high",
                    pitch: "For your high blood sugar... 'While the GLPRO is helping the pancreas, this one's gonna be helping with the blood sugar in general, helping it to stay lower longer.'",
                    benefit: "help get your blood sugar under control"
                }
            ]
        }
    ]
};
