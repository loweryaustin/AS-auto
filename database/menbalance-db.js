/**
 * MEN Balance Pro
 * Database file for the "MEN Balance Pro" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["MEN Balance Pro"] = {
    "baseProduct": {
        "name": "MEN Balance Pro",
        "pitch": "This is a pitch."
    },
    "guaranteeDays": 60,
    "questions": [
        "How long have you been dealing with this?",
        "What other health conditions are you dealing with?",
        "What medications are you taking?",
        "What is your biggest health concern?"
    ],
    "recommendations": [
        {
            "id": "supp-1763179250020",
            "name": "New Supp",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1763179250020",
                    "text": "Symptom here",
                    "pitch": "This is a sidebar pitch.",
                    "benefit": "This is the benefit."
                },
                {
                    "id": "symp-1763179278860",
                    "text": "Another symptom here.",
                    "pitch": "Sidebar",
                    "benefit": "Benny"
                }
            ]
        },
        {
            "id": "supp-1763179295473",
            "name": "New Supplement",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1763179295473",
                    "text": "New Symptom",
                    "pitch": "Test",
                    "benefit": "Test"
                }
            ]
        }
    ]
};
