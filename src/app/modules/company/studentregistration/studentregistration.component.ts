import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators, FormArray } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  signupForm: FormGroup;
  frstName: string;
  lstName: string;
  emailAdd: string;
  submitted: boolean;
  form: any;
  user = new User();
  regForm: FormGroup;
  isAccepted: boolean;

  constructor(private formBuilder: FormBuilder) {

  }

  // ngOnInit() {
  //   this.signupForm=this.formBuilder.group({
  //     firstName:['',Validators.required],
  //     lastName:['',[Validators.required,Validators.maxLength(10)]],
  //     emailId:['',[Validators.required,Validators.email]],
  //     userPassword:['',Validators.required]
  //   });

  //   this.fillData();

  //   //Value change,status change example
  //   this.signupForm.get('firstName').valueChanges.subscribe(
  //     newValue=>{
  //       console.log("changed valus is: ",newValue);
  //     }
  //   );

  //   this.signupForm.valueChanges.subscribe((
  //     newValue:Student)=>{
  //       console.log("changed valus is: ",newValue.firstName);
  //       console.log("changed valus is: ",newValue.lastName);
  //       console.log("changed valus is: ",newValue.emailId);
  //       console.log("changed valus is: ",newValue.userPassword);
  //     }
  //   );

  //   this.signupForm.get('firstName').statusChanges.subscribe(
  //     newStatus=>{
  //       console.log("changed status is: ",newStatus);
  //     }
  //   );

  //   this.signupForm.statusChanges.subscribe((
  //     newStatus:Student)=>{
  //       console.log("Form status is: ",newStatus);
  //     }
  //   );

  //   //FormArray Example
  //   const arr=new FormArray([
  //     new FormControl(),
  //     new FormControl()
  //   ]);
  //   //arr.setValue(['Vive Garg']);//Invalid for setValue all value should be set
  //   //arr.setValue(['Vive Garg','Prabhat']);
  //   arr.patchValue(['Vive Garg']);
  //   arr.reset(['Vive Garg','Prabhat']);
  //   console.log(arr.value);
  //   console.log(arr.status);

  //   //Nested FormArray Example
  //   this.form=new FormGroup({
  //     contactNos:new FormArray([
  //        new FormControl('1234567890'),
  //        new FormControl('9876543210'),
  //     ])
  //   });
  // }


  registeration(regForm: any) {
    let email = regForm.value.email;
    let firstName = regForm.value.firstName;
    let lastName = regForm.value.lastName;
    console.log(email, firstName, lastName);
    console.log(regForm);
  }

  postData(signupForm: any) {
    this.submitted = true;
    this.frstName = this.signupForm.get('firstName').value;
    this.lstName = this.signupForm.get('lastName').value;
    this.emailAdd = this.signupForm.get('emailId').value;
    console.log(this.frstName);
    console.log(this.lstName);
    console.log(this.emailAdd);
    console.log(this.signupForm.value);
    console.log(signupForm.controls);
  }

  resetForm() {
    this.signupForm.reset();
  }

  fillData() {
    // this.signupForm.setValue({
    //   firstName:'Raja',
    //   lastName:'Yadav',
    //   emailId:'raja@gmail.com',
    //   userPassword:'1234'
    // });

    this.signupForm.patchValue({
      firstName: 'Raja',
      lastName: 'Yadav',
      emailId: 'raja@gmail.com'
    });
  }

  addContactNo() {
    this.form.get('contactNos').push(new FormControl());
  }

  onSubmit() {
    console.log(this.form.get('contactNos').value);
    console.log(this.form.value);
  }

  setPreset() {
    this.form.get('contactNos').patchValue(['7017473793', '9265987845']);
  }

  onFormSubmit(userForm: any) {
    if (userForm.invalid) {
      return;
    }
    else {
      console.log("user name: ", userForm.controls['userName'].value);
      console.log("gender: ", userForm.controls['gender'].value);
      console.log("Marital status: ", userForm.controls['married'].value);
      console.log("T & C: ", userForm.controls['tc'].value);
    }
  }

  setDafaultValue() {
    this.user.userName = "Vivek Garg";
    this.user.gender = "Male";
    this.user.isMarried = false;
    this.user.isTCAccepted = true;
  }

  resetUserForm(userForm: any) {
    this.user = new User();
    userForm.resetForm({
      married: false
    });
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      email: ['', [Validators.required, Validators.email]],
      phoneNo:['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      playList: ['', Validators.required],
      isAccepted: ['']
    });
  }

  onChange(event: any) {
    if (event.checked == true)
      this.isAccepted = true;
    else
      this.isAccepted = false;
  }

  regFormSubmit(regForm:any){
    console.log(regForm);
  }

}
