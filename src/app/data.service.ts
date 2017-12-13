export class DataService {
    
    static get clans() {
        return [
            {
                id: 'clan1',
                name: 'Clan 1',
                description: 'Description du Clan 1'
            },
            {
                id: 'clan2',
                name: 'Clan 2',
                description: 'Description du Clan 2'
            }
        ];
    }
    
    static get elementTypes() {
        return {
            ATTRIBUT: {
                id: 'attribut'
            },
            CAPACITE: {
                id: 'capacite'
            }
        }
    }
    
    static get archetypes() {
        return [
            {
                id: 'arch1',
                name: 'Archétype 1',
                description: 'Description de l arch 1'
            },
            {
                id: 'arch2',
                name: 'Archétype 2',
                description: 'Description de l arch 2'
            }
        ];
    }
    
    static get importances() {
        return [
            {
                id: 'primaire',
                name: 'Primaire',
                defaultPointsAttributs: 7,
                defaultPointsCapacites: 13
            },
            {
                id: 'secondaire',
                name: 'Secondaire',
                defaultPointsAttributs: 5,
                defaultPointsCapacites: 9
            },
            {
                id: 'tertiaire',
                name: 'Tertiaire',
                defaultPointsAttributs: 3,
                defaultPointsCapacites: 5
            }
        ];
    }
    
    static get attributs() {
        return [
            {
                id: 'physiques',
                title: 'Physiques',
                pointsAvailable: 0,
                type: DataService.elementTypes.ATTRIBUT,
                importance: undefined,
                items: [
                    {
                        name: 'Force',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Dextérité',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Vigueur',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'sociaux',
                title: 'Sociaux',
                pointsAvailable: 0,
                type: DataService.elementTypes.ATTRIBUT,
                importance: undefined,
                items: [
                    {
                        name: 'Charisme',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Manipulation',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Apparence',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'mentaux',
                title: 'Mentaux',
                pointsAvailable: 0,
                type: DataService.elementTypes.ATTRIBUT,
                importance: undefined,
                items: [
                    {
                        name: 'Perception',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Intelligence',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Astuce',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    }
                ]
            }
        ]
    }

    static get capacites() {
        return [
            {
                id: 'talents',
                title: 'Talents',
                pointsAvailable: 0,
                type: DataService.elementTypes.CAPACITE,
                importance: undefined,
                items: [
                    {
                        name: 'Adresse',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Athlétisme',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Bagarre',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Commandement',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Empathie',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Expression',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Intuition',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Intimidation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Subterfuge',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Vigilance',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'competences',
                title: 'Compétences',
                pointsAvailable: 0,
                type: DataService.elementTypes.CAPACITE,
                importance: undefined,
                items: [
                    {
                        name: 'Animaux',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Artisanat',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Commerce',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Equitation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Etiquette',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Furtivité',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Melée',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Représentation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Survie',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Tir à l arc',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'connaissances',
                title: 'Connaissances',
                type: DataService.elementTypes.CAPACITE,
                pointsAvailable: 0,
                importance: undefined,
                items: [
                    {
                        name: 'Droit',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Enigmes',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Eruditions',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Investigation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Médecine',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Occultisme',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Politique',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Sénéchal',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Sagesse populaire',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Théologie',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            }
        ]
    }

    static get avantages() {
        return [
            {
                id: 'disciplines',
                title: 'Disciplines',
                items: [
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'historique',
                title: 'Historique',
                items: [
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'vertus',
                title: 'Vertus',
                items: [
                    {
                        name: 'Conscience/Conviction',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 4
                    },
                    {
                        name: 'Maitre de soi/Instinct',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 4
                    },
                    {
                        name: 'Courage',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 4
                    }
                ]
            }
        ];
    }
}
