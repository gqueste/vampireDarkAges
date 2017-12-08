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
        const setImportance = (element, importanceIndex) => {
            element.importance = this.IMPORTANCES[importanceIndex];
        };

        this.characterSheet.attributs.forEach(setImportance);
        this.characterSheet.capacites.forEach(setImportance);
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

    onImportanceChanged(importance, element, arr) {
        const previousSelectedImportance = element.importance;
        const elementWithSelectedImportance = arr.find(att => att.importance.id === importance.id);
        elementWithSelectedImportance.importance = previousSelectedImportance;
        element.importance = importance;
    }
}
