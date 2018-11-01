import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';


export interface PeriodicElement {
    name: string;
    position: number;
    weight: any;
    symbol: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-NewUser',
    templateUrl: './NewUser.component.html',
    styleUrls: ['./NewUser.component.scss']
})
export class NewUserComponent implements OnInit {
    isThisValid = false;
    @ViewChild(MatTable) table: MatTable<any>;
    count = 7;
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    hello(formValues) {
        alert('New Row Added.');
        this.count += 1;
        console.log(formValues);
        this.dataSource.data.push({name:formValues.value.name , position: this.count,weight: formValues.value.PType,symbol: formValues.value.Price });
        this.table.renderRows();
    }

    // form
    UserForm = new FormGroup({
        name: new FormControl('', Validators.required)
    });

  
    onSubmit(formValues) {
        if(formValues.status==='VALID'){
            alert('Valid Form')
            console.log('Form Values', formValues.value.class)
            let tempval=formValues;
            this.hello(tempval);
        }else{
            alert('Invalid Form');
        }
        console.log('formValues', formValues);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

  
    constructor(public user: UsersService) {
        // this.testForm.setValue({
        //     name: 'Aditya',
        //     class: '4'
        // });
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description:
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description:
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description:
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }
    ngOnInit() {
    }
}