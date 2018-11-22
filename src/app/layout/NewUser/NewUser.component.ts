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

export interface NotesData {
    title: string;
    content: string;
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
    notes: any = [];
    notesData: NotesData;

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

    // notes data
    notesForm = new FormGroup({
        title: new FormControl(''),
        content: new FormControl('')
    });

    get title() {
        return this.notesForm.get('title').value;
    }

    get content() {
        return this.notesForm.get('content').value;
    }

    onuSubmitNotesForm() {
        if(this.notesForm.invalid){
            alert('Form Invalid');
        }
        this.notesData = {
            title: this.title,
            content: this.content
        }


        // render front-end
        this.notes.push(this.notesData);

        // save in db
        this.postsData.savePost(this.notesData).subscribe(res => {
            console.log('response:' ,res);
            alert('Notes added successfully!');
        });

        // clear value
        this.notesForm.setValue({
            title: '',
            content: ''
        });
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

    fetchNotesData() {
        this.postsData.getAllPostsData().subscribe(data => {
            this.notes = data;
            console.log(data);
        })
    }

   
    constructor(public user: UsersService, private postsData: GetProductService) {
    }
    ngOnInit() {
        this.fetchNotesData(); 
    }
}