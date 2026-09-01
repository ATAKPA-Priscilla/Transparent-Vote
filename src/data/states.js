const states = [
    {
        id: 1,
        name: "Abia",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 2,
        name: "Adamawa",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 3,
        name: "Akwa Ibom",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 4,
        name: "Anambra",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 5,
        name: "Bauchi",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 6,
        name: "Bayelsa",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 7,
        name: "Benue",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 8,
        name: "Borno",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 9,
        name: "Cross River",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 10,
        name: "Delta",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 11,
        name: "Ebonyi",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 12,
        name: "Edo",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 13,
        name: "Ekiti",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 14,
        name: "Enugu",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 15,
        name: "Gombe",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 16,
        name: "Imo",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 17,
        name: "Jigawa",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 18,
        name: "Kaduna",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 19,
        name: "Kano",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 20,
        name: "Katsina",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 21,
        name: "Kebbi",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 22,
        name: "Kogi",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 23,
        name: "Kwara",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 24,
        name: "Lagos",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 25,
        name: "Nasarawa",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 26,
        name: "Niger",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 27,
        name: "Ogun",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 28,
        name: "Ondo",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 29,
        name: "Osun",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 30,
        name: "Oyo",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 31,
        name: "Plateau",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 32,
        name: "Rivers",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 33,
        name: "Sokoto",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 34,
        name: "Taraba",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 35,
        name: "Yobe",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 36,
        name: "Zamfara",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    },
    {
        id: 37,
        name: "FCT",
        votes: {
            APC: 0,
            PDP: 0,
            LP: 0,
            NNPP: 0
        }
    }
];

export default states;