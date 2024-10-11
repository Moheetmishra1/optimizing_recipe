import { Component, inject } from "@angular/core";
import { AgGridTagService } from "../ag-grid.service";
import { Router } from "@angular/router";

// Create a separate component for the cell renderer
@Component({
  selector: 'app-action-cell-renderer',
  template: `
    <div class='buttonBox'>
      <button class="btn btn-danger" (click)="deleteProduct(params.data.id)">Delete</button>
      <button class="btn btn-info" (click)="viewProduct(params.data.id)">View</button>
    </div>
  `,
})
export class ActionCellRendererComponent {
  params: any;
  private agGridService= inject(AgGridTagService)
  private router = inject(Router)


  agInit(params: any): void {
    this.params = params;
  }

  

  deleteProduct(id: number): void {
    this.agGridService.deleteCartById(id).subscribe({
      complete:()=>console.log("Deleted")
      
    })

  }

  viewProduct(id: number): void {
    this.router.navigate(['/carts',id])
  }
}