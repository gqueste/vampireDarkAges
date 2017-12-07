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
        return {
            primaire: 'primaire',
            secondaire: 'secondaire',
            tertiaire: 'tertiaire'
        };
    }
    
    static get attributs() {
        return [
            {
                id: 'physiques',
                title: 'Physiques',
                importance: DataService.importances.primaire,
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
                importance: DataService.importances.secondaire,
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
                importance: DataService.importances.tertiaire,
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
                importance: DataService.importances.primaire,
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
                importance: DataService.importances.secondaire,
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
                importance: DataService.importances.tertiaire,
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
