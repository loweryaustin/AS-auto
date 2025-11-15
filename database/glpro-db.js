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
                    "text": "Poor Sleep",
                    "pitch": "This one helps with falling asleep and staying asleep, and helps make the sleep you do get more effective and regenerative.",
                    "benefit": "help you get better sleep"
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
                    "pitch": "This is or your ED symptoms... This will boost those natural testosterone levels... helping your body recover like a younger man again.",
                    "benefit": "help with ED symptoms"
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
                }
            ]
        }
    ]
};

