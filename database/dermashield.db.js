/**
 * DermaShield (Astron)
 * Database file for the "DermaShield" supplement.
 * Product Line: Astron
 * Protocol: Skin Health & Anti-Aging
 */
DATABASE_CONFIGS["DermaShield"] = {
    "productLine": "Astron",
    "baseProduct": {
        "name": "DermaShield (Base)",
        "pitch": "This formula supports skin elasticity, hydration, and protection against environmental stressors to maintain a youthful, healthy appearance.",
        "gender": "any"
    },
    "knowledgeBase": "DermaShield",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ds-1",
            "text": "Are you concerned about wrinkles, sagging skin, or dryness?",
            "group": "Symptoms"
        },
        {
            "id": "q-ds-2",
            "text": "How would you rate your skin's overall hydration and elasticity?",
            "group": "Quality"
        },
        {
            "id": "q-ds-3",
            "text": "Are you also concerned about eye health or aging around the eyes? (Optivell)",
            "group": "Anti-Aging"
        },
        {
            "id": "q-ds-4",
            "text": "Do you struggle with sugar cravings or consume a lot of sweets? (Golden Vita Pure)",
            "group": "Diet"
        },
        {
            "id": "q-ds-5",
            "text": "How is your sleep? Do you wake up looking tired? (Night Renew)",
            "group": "Sleep"
        },
        {
            "id": "q-ds-6",
            "text": "Do you have digestive issues like bloating or irregularity? (Probiotic Balance)",
            "group": "Gut-Skin"
        },
        {
            "id": "q-ds-7",
            "text": "Do you have poor circulation or cold hands/feet? (AlphaFlow)",
            "group": "Circulation"
        },
        {
            "id": "q-ds-8",
            "text": "Do you feel like your immune system is weak? (Vital Defense)",
            "group": "Immunity"
        }
    ],
    "recommendations": [
        {
            "id": "supp-optivell",
            "name": "Optivell",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-eye-aging",
                    "text": "Eye Wrinkles / Vision Health",
                    "pitch": "The skin around the eyes is the first to show aging. Optivell supports eye health and hydration from the inside to keep your eyes looking and feeling bright.",
                    "benefit": "help support bright, healthy eyes"
                }
            ]
        },
        {
            "id": "supp-golden-vita",
            "name": "Golden Vita Pure",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-age",
                    "text": "Sugar Cravings / Wrinkles",
                    "pitch": "Sugar attaches to collagen and makes it brittle (Glycation), causing deep wrinkles. Golden Vita Pure stops this 'sugar aging' process.",
                    "benefit": "help prevent sugar-induced skin aging"
                }
            ]
        },
        {
            "id": "supp-night-renew",
            "name": "Night Renew",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-skin",
                    "text": "Poor Sleep / Dark Circles",
                    "pitch": "Your skin repairs itself while you sleep. Night Renew helps you get the deep 'beauty sleep' needed to regenerate skin cells overnight.",
                    "benefit": "support skin regeneration during sleep"
                }
            ]
        },
        {
            "id": "supp-probiotic",
            "name": "Probiotic Balance",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-skin",
                    "text": "Digestive Issues / Breakouts",
                    "pitch": "Skin issues are often a reflection of gut health. Probiotic Balance clears toxins from your digestion so they don't have to come out through your skin.",
                    "benefit": "help clear skin by detoxifying the gut"
                }
            ]
        },
        {
            "id": "supp-alphaflow",
            "name": "AlphaFlow",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-glow",
                    "text": "Dull Skin / Poor Circulation",
                    "pitch": "Healthy skin needs blood flow for that 'glow.' AlphaFlow improves micro-circulation to deliver nutrients directly to the skin surface.",
                    "benefit": "help improve circulation for skin vitality"
                }
            ]
        },
        {
            "id": "supp-vital-defense",
            "name": "Vital Defense",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-skin",
                    "text": "Sensitive Skin / Slow Healing",
                    "pitch": "Your skin is your immune system's first barrier. Vital Defense strengthens this barrier to protect against environmental damage and infection.",
                    "benefit": "help strengthen the skin's immune barrier"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-qual", "name": "Quality", "gender": "any" },
        { "id": "g-age", "name": "Anti-Aging", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Skin", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" }
    ],
    "references": []
};
