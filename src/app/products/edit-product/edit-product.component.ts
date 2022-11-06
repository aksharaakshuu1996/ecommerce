import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productid: any
  productdata: any



  constructor(private activatedroute: ActivatedRoute, private productservice: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data: any) => {
      this.productid = data['id']
    })
    this.productservice.viewproduct(this.productid).subscribe((item: any) => {
      this.productdata = item
    })
  }
  updateProduct(form: any) {
    let updateproduct = {
     
      id: form.value.id,
      productName: form.value.productName,
      categoryId: form.value.categoryId,
      description: form.value.description,
      price: form.value.price,
      is_available: form.value.is_available,
      productImg: form.value.productImg,
      rating: form.value.rating,
      review: form.value.review,
      vendor_name: form.value.vendor_name,
      warranty: form.value.warranty

    }

this.productservice.editproduct(this.productid,this.productdata)
.subscribe((data:any)=>{
  alert('updated product details')
  this.router.navigateByUrl('products')
})

  }
}



