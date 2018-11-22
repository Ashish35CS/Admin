import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { GetProductService } from 'src/app/shared/services/mydata/get-product.service';



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
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatTable) table: MatTable<any>;
    count = 7;
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];
calc=0;
    hello(formValues) {
        alert('New Row Added.');
        this.count += 1;
        console.log(formValues);
        this.dataSource.data.push({name:formValues.value.name , position: this.count,weight: formValues.value.PType,symbol: formValues.value.Price });
        this.table.renderRows();
    }

    // form
    testForm = new FormGroup({
        name: new FormControl('', Validators.required),
        PType: new FormControl(''),
        Price: new FormControl('')
    });

    get name(){
        return this.testForm.get('name');
    }

    get class(){
        return this.testForm.get('class');
    }

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

    /*getData(id) {
        alert('getting data for id: '+id);
        let userObj = this.user.getUserData(id);
        this.testForm.setValue(userObj);
    }*/
    sum: number = 0;
    fetchData() {
        this.getProductData.showplaces().subscribe((data: Array<any>) => {
            this.places = data;
        });
    }
    constructor(private getProductData :GetProductService) {
    }
    ngOnInit() {
        this.fetchData();
    }
}