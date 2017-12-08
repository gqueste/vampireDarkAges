import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    Arr = Array;

    clans = DataService.clans;
    archetypes = DataService.archetypes;

    IMPORTANCES = DataService.importances;

    characterSheet = {
        clan: this.clans[0],
        nature: this.archetypes[0],
        attitude: this.archetypes[0],
        attributs: DataService.attributs,
        capacites: DataService.capacites,
        avantages: DataService.avantages
    };
    
    constructor () {
        this.characterSheet.attributs.forEach((attribut, index) => {
            attribut.importance = this.IMPORTANCES[index];
        });
    }

    onItemPlusClick(item) {
        if (item.points < item.pointsMax) {
            item.points ++;
        }
    }

    onItemMinusClick(item) {
        if (item.points > item.pointsMin) {
            item.points --;
        }
    }

    onImportanceChanged(importance, attribut) {
        const previousSelectedImportance = attribut.importance;
        const attributeWithSelectedImportance = this.characterSheet.attributs.find(att => att.importance.id === importance.id);
        attributeWithSelectedImportance.importance = previousSelectedImportance;
        attribut.importance = importance;
    }
}
