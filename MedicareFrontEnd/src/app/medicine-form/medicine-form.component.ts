import { HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FileUploadService } from '../file-upload.service';
import { MedicineClass } from '../MedicineClass';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css']
})
export class MedicineFormComponent implements OnInit {

  isSubmitted= false;
  constructor(private service:FileUploadService,private router:Router ) { }


  ngOnInit(): void {
  }

  selectedFiles?: FileList;
	currentFile?: File;
	progress = 0;
	message = '';
	name:string='';

  medicine={
    name:'',
    description:'',
    category:'',
    price:'',
  }


 
	
  

//add image
firebaseConfig = {
  apiKey: "AIzaSyDKczjoS_qmuWtjDOQOCIN8bjYTw-GbEl0",
  authDomain: "kitchenstory-39828.firebaseapp.com",
  projectId: "kitchenstory-39828",
  storageBucket: "kitchenstory-39828.appspot.com",
  messagingSenderId: "818537684504",
  appId: "1:818537684504:web:0c08d2899f13f916236d6d",
  measurementId: "G-7QHEMG3VBT"
};

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  async selectFile(event: any) {
	  this.selectedFiles = event.target.files;
    const file: File = event.target.files[0];
    await this.saveImage(file);
  }

  async saveImage(file: File) {
    const storageRef = getStorage(this.app);
    const imagesRef = ref(storageRef, 'images/' + file.name);
    await uploadBytes(imagesRef, file);
    const url = await getDownloadURL(imagesRef);
    console.log("inside saveImage method "+this.name);
    this.service.addImageUrl(url,this.name).subscribe(response=>
      {
         
      },
      error=>
      {
      }
      );
    console.log('Image URL:', url);
  }



  //add record
  addUser():void{
    const data={
      name:this.medicine.name,
      description:this.medicine.description,
      category:this.medicine.category,
      price:this.medicine.price,
      //file:this.currentFile,
    }
    /*if(!data.name){
      alert('please provide name');
      return;
    }
    if(!data.category){
      alert('please provide category');
      return;
    }
    if(!data.description){
      alert('please provide description');
      return;
    }
    if(!data.price){
      alert('please provide price');
      return;
    }
 
     /*this.service.create(data).subscribe(
      response=>{ console.log(response);
      this.isSubmitted=true},
      error=>{console.log(error);}
     );*/
      
 
    
     //this.service.uploadFiles(,data).subscribe();

    //  alert(data.name);
    //  this.progress = 0;
  
	  // if (this.selectedFiles) {
		// const file: File | null = this.selectedFiles.item(0);
		// if (file) {
		//   this.currentFile = file;
		//   this.service.uploadFiles(this.currentFile,data).subscribe();
      
		// }
		// this.selectedFiles = undefined;
	  // }

    this.service.addMedicine(data).subscribe(
      response=>{
        
          console.log(response);

      },
      error=>
      {

      }
    );
    
	}
  
  
}
