/**
 * ProstaFense
 * Database file for the "ProstaFense" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["ProstaFense"] = {
    "productLine": "WWG",
    "baseProduct": {
        "name": "ProstaFense (Base)",
        "pitch": "Click the settings cog to edit this pitch.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-1765225693210-5jj11ih5c",
            "text": "How long have you been dealing with the prostate issue?",
            "group": "Prostate"
        },
        {
            "id": "q-1765225693210-tjblyz1sd",
            "text": "How many times a night are you typically waking up?",
            "group": "Prostate"
        },
        {
            "id": "q-1765225910172-0.4096109231307141",
            "text": "Are you dealing with any other underlying health conditions such as high blood pressure, cholesterol, or diabetes?",
            "group": "General"
        },
        {
            "id": "q-1765225990795-0.7841753682251428",
            "text": "Most of my clients that are dealing with prostate issues are also dealing with erectile dysfunction. Is that the same for you?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-1765225998162-0.09623106758774136",
            "text": "Do you have a problem with getting or maintaining the erections?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-1765226006601-0.9468939464911917",
            "text": "Are you able to get fully erect or just part way?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-1765226010238-0.8482666257428383",
            "text": "Are you able to maintain the erections all the way to climax or is that diminishing before then?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-1765226013704-0.3620887972752129",
            "text": "Are you still getting morning erections?",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-1765226027717-0.10344694401536636",
            "text": "Are you taking medications for the diabetes? Metformin, Jardiance, Insulin?",
            "group": "Diabetes"
        },
        {
            "id": "q-1765226022697-0.6035100168251428",
            "text": "Are you experiencing issues with tingling or numbness in your extremities?",
            "group": "Diabetes"
        }
    ],
    "recommendations": [
        {
            "id": "supp-1765225722977-asaum",
            "name": "TestoFence",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-1765225722977-sjvfc",
                    "text": "Low Testosterone",
                    "pitch": "",
                    "benefit": "help with testosterone levels, help with increased semen production"
                }
            ]
        },
        {
            "id": "supp-1765225738903-2kx7y",
            "name": "NervoLyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-1765225738903-xm2em",
                    "text": "Not Lasting Long Enough",
                    "pitch": "",
                    "benefit": "helps last longer in bed"
                },
                {
                    "id": "symp-1765225738903-chsc7",
                    "text": "Unable to reach climax",
                    "pitch": "",
                    "benefit": "help with sensitivity to reach climax reliably"
                }
            ]
        },
        {
            "id": "supp-1765225754456-cte8m",
            "name": "GlucoFit",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-1765225754456-lshq1",
                    "text": "weightloss",
                    "pitch": "",
                    "benefit": "help with weightloss"
                }
            ]
        },
        {
            "id": "supp-1765225770180",
            "name": "VigorLong",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225770180",
                    "text": "Erectile Dysfunction",
                    "pitch": "",
                    "benefit": "helps with getting and maintaining harder erections"
                }
            ]
        },
        {
            "id": "supp-1765225843663-ktoz4",
            "name": "Gluco Recover",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225843663-lc260",
                    "text": "Hypoglycemia",
                    "pitch": "",
                    "benefit": "help keep your blood sugar at good levels"
                },
                {
                    "id": "symp-1765225843663-2ottc",
                    "text": "Diabetes",
                    "pitch": "",
                    "benefit": "help come off of your diabetes medications"
                },
                {
                    "id": "symp-1765225843663-1rhzx",
                    "text": "Sugar Cravings",
                    "pitch": "",
                    "benefit": "help with sugar cravings to aid your weightloss journey"
                }
            ]
        }
    ],
    "references": [],
    "questionGroups": [
        {
            "id": "group-1765225693210-upts2",
            "name": "Prostate",
            "gender": "any"
        },
        {
            "id": "g-1765225904373",
            "name": "General",
            "gender": "any"
        },
        {
            "id": "g-1765225979096",
            "name": "Erectile Dysfunction",
            "gender": "any"
        },
        {
            "id": "g-1765226016299",
            "name": "Diabetes",
            "gender": "any"
        }
    ]
};

