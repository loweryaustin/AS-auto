/**
 * GL Pro
 * Database file for the "GL Pro" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["GL Pro"] = {
    "baseProduct": {
        "name": "GL Pro",
        "pitch": "This helps to heal the pancreas."
    },
    "guaranteeDays": 60,
    "references": [], // NEW: Added for V6.1.0
    "questions": [
        "How long have you been dealing with the diabetes?",
        "Are you dealing with any other underlying health conditions such as high blood pressure or cholesterol?",
        "Okay, do you take medications for those?",
        "How does this affect your life?",
        "What is your biggest concern when it to comes to your health?"
    ],
    "recommendations": [
        {
            "id": "fpp",
            "name": "FreePain Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fpp-1",
                    "text": "Tingling or numbness in extremities (Neuropathy)",
                    "pitch": "That one is going to help with the tingling and numbness,  help the nerves to start to regrow, and help to alleviate some of the pain.",
                    "benefit": "help with the tingling and numbness"
                },
                {
                    "id": "symp-1763190484075",
                    "text": "General aches and discomfort related to inflammation (arthritis)",
                    "pitch": "This is for helping with aches and pains due to to inflammation such as arthritis. ",
                    "benefit": "help with inflammation pain / arthritis "
                }
            ]
        },
        {
            "id": "sleep",
            "name": "Deep Sleep Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-1",
                    "text": "Difficulty getting to sleep or staying asleep",
                    "pitch": "This one helps with falling asleep and staying asleep, and helps make the sleep you do get more effective and regenerative.",
                    "benefit": "help you get better sleep"
                },
                {
                    "id": "symp-1763239566138",
                    "text": "Feelings of restlessness or an inability to \"turn off\" your mind at bedtime.",
                    "pitch": "For calm before bed: This should help you to more quickly wind down, help calm your mind before bed to help get to sleep and stay asleep.",
                    "benefit": "help with restlessness before bed"
                }
            ]
        },
        {
            "id": "slim",
            "name": "Slim Boost Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-slim-1",
                    "text": "Need to lose weight",
                    "pitch": "This is for your weight loss goal/energy, This one's gonna help with the metabolism, help to retrain it and speed it up... helping your body to focus on metabolizing the fat for more sustained energy.'",
                    "benefit": "help you get rid of the excess weight and boost energy"
                }
            ]
        },
        {
            "id": "tmax",
            "name": "Tmax Pro",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-tmax-1",
                    "text": "Fatigue / Low Energy",
                    "pitch": "For your fatigue and recovery... This will boost those natural testosterone levels, helping you feel like a younger man again, but more importantly, helping your body recover like a younger man again.",
                    "benefit": "help with fatigue and recovery"
                },
                {
                    "id": "symp-tmax-2",
                    "text": "Symptoms of ED?",
                    "pitch": "This is for your ED symptoms... This will boost those natural testosterone levels... helping your body recover like a younger man again.",
                    "benefit": "help with ED symptoms"
                },
                {
                    "id": "symp-1763190285863",
                    "text": "No sex drive",
                    "pitch": "This is for your masculine drive: Helping you to feel like a young man again, ready to pursue your romantic interest with renewed vigor.",
                    "benefit": "help with low libido"
                }
            ]
        },
        {
            "id": "mens",
            "name": "MEN Balance Pro",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-mens-1",
                    "text": "Waking up for urination?",
                    "pitch": "For waking up to urinate: This will help with healthy bladder and prostate function, helping you sleep... and helping your body get rid of the excess sugars more easily.",
                    "benefit": "help with nightly urination"
                },
                {
                    "id": "symp-1763189981225",
                    "text": "Weak or hesitant stream",
                    "pitch": "For difficulty emptying bladder: This will help with healthy bladder and prostate function, helping to relieve you of discomfort of a full bladder faster and easier.",
                    "benefit": "help with emptying your bladder"
                },
                {
                    "id": "symp-1763190157600",
                    "text": "Enlarged prostate diagnoses",
                    "pitch": "For enlarged prostate: This helps with mitigating issues that come with an enlarged prostate, weak stream, waking up in the night, urgent and frequent urination.",
                    "benefit": "help with your enlarged prostate diagnoses"
                }
            ]
        },
        {
            "id": "core",
            "name": "Core Vitality Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-core-1",
                    "text": "High Blood Pressure / Cholesterol",
                    "pitch": "For your high blood pressure/cholesterol: This one's gonna help with circulation, cardiovascular health, as well as helping with healthy bone density.",
                    "benefit": "help with cardiovascular health and circulation"
                }
            ]
        },
        {
            "id": "flora",
            "name": "Flora Flo",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-flora-1",
                    "text": "Bloating / Digestion Issues",
                    "pitch": "For your bloating: This one will help with that bloating issue... help with digestion as well as helping with the good bacterial balance in the gut.",
                    "benefit": "help with bloating and digestion"
                },
                {
                    "id": "symp-1763189504397",
                    "text": "Not currently doing anything for gut health",
                    "pitch": "For your gut health: This one will help with absorbing nutrients, help with processing sugar, as well as helping with good bacterial balance in the gut.",
                    "benefit": "help with absorbing nutrients"
                }
            ]
        },
        {
            "id": "sugar",
            "name": "FreeSugar Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-1",
                    "text": "Blood sugar still high",
                    "pitch": "For your high blood sugar: While the GLPro is helping the pancreas, this one's gonna be helping with the blood sugar in general, helping it to stay lower longer.",
                    "benefit": "help get your blood sugar under control"
                },
                {
                    "id": "symp-1763239702440",
                    "text": "Energy \"crashes\" or fatigue, particularly after meals.",
                    "pitch": "For crashes after meals: This should be your fast acting blood sugar support, helping to maintain energy levels even after meals.",
                    "benefit": "help with energy crashes after meals"
                },
                {
                    "id": "symp-1763239776389",
                    "text": "Persistent cravings for sugary foods.",
                    "pitch": "For sugar cravings: This should be your go to for helping to combat disruptive sugar cravings, helping you to focus on work, your relationships, and life instead of sugar.",
                    "benefit": "help with sugar cravings"
                },
                {
                    "id": "symp-1763239865383",
                    "text": "Low energy levels throughout the day.",
                    "pitch": "For low energy throughout the day: This should be your help with maintaining good energy levels throughout the day. ",
                    "benefit": "help with low energy throughout the day"
                }
            ]
        },
        {
            "id": "supp-1763239197391",
            "name": "Neuro Memory Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1763239197391",
                    "text": "Difficulty concentrating or maintaining focus.",
                    "pitch": "For concentration and focus: This should be your concentration and focus relief, helping you to accomplish more and helping to think clearly.",
                    "benefit": "help with clear focus"
                },
                {
                    "id": "symp-1763239333382",
                    "text": "\"Brain fog\" or a feeling of mental sluggishness.",
                    "pitch": "For brain-fog: This helps with mental clarity, which should help you get ahead of the competition, help keep up with friends and family, and enjoy life with a clear mind.",
                    "benefit": "help with brain-fog"
                },
                {
                    "id": "symp-1763239462540",
                    "text": "Trouble recalling names, words, or recent events.",
                    "pitch": "For memory: This helps with memory, recalling, names, words, recent events and more.",
                    "benefit": "help with memory"
                }
            ]
        },
        {
            "id": "supp-1763239971220",
            "name": "Max Immune Pro",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1763239971220",
                    "text": "Feeling \"run down\" or easily susceptible to illness.",
                    "pitch": " This should help provide your body with the nutrients needed to better combat illness so that you're not constantly having to call out sick.",
                    "benefit": "help with common illness"
                },
                {
                    "id": "symp-1763240077276",
                    "text": "Experiencing frequent common colds or infections.",
                    "pitch": "This should help your body to better combat frequent illnesses like colds or infections.",
                    "benefit": "helping to combat frequent colds or infections"
                }
            ]
        }
    ]
};
