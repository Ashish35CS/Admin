import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { GetProductService } from 'src/app/shared/services/mydata/get-product.service';
import { t } from '@angular/core/src/render3';

export interface NotesData {
    title: string;
    content: string;
}

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
    places: Array<any> = [];
    notes: NotesData[] = [];
    notesData: NotesData;
    responseData: NotesData;
    filteredObj: NotesData[];

    // form
    UserForm = new FormGroup({
        name: new FormControl('', Validators.required)
    });

    // search
    searchId = new FormControl('');
    searchByIdResponse: NotesData[];

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
        if (this.notesForm.invalid) {
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
            alert('Notes added successfully!');
        });

        // clear value
        this.notesForm.setValue({
            title: '',
            content: ''
        });
    }

    searchById() {
        this.postsData.searchNoteById(this.searchId.value).subscribe((data: NotesData) => {
            this.searchByIdResponse = [];
            this.searchByIdResponse.push(data);
            this.notes = this.searchByIdResponse;
        });
    }

    updateById() {
        this.notesData = {
            title: this.title,
            content: this.content
        }
        console.log(this.notesData);

        this.postsData.UpdateNoteById(2, this.notesData).subscribe((data: NotesData) => {
        });
    }

    fetchObject(obj, id) {
        if ((id != 0)) {
            return obj;
        }
        else { //alert('idelse'+id);
        }
    }
    selectnote(e, id) {

        if (e.target.checked) {
            //const filteredObj = this.notes.filter(id);
            this.filteredObj = this.notes.map((v, i) => v ? this.notes[i] : null)
                .filter(v => v !== null);
            this.notesForm.setValue({
                title: this.filteredObj[id - 1].title,
                content: this.filteredObj[id - 1].content
            });
        } else {
            console.log('nothing');
        }

    }
    fetchNotesData() {
        this.postsData.getAllPostsData().subscribe((data: NotesData[]) => {
            this.notes = data;
        })
    }


    constructor(public user: UsersService, private postsData: GetProductService) {
    }
    ngOnInit() {
        this.fetchNotesData();
    }
}