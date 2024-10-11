import { ColDef, GridApi,GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Component, inject, OnInit, DestroyRef, computed, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import {AgGridAngular} from "ag-grid-angular"
import { AgGridTagService } from './ag-grid.service';
import { ActionCellRendererComponent } from './action-cell-renderer/action-cell-renderer.component';

@Component({
  selector: 'app-ag-tag-table',
  standalone: true,
  imports: [NgIf,AgGridAngular],
  templateUrl: './ag-tag-table.component.html',
  styleUrl: './ag-tag-table.component.css'
})
export class AgTagTableComponent implements OnInit {

  isLoading= false
  agGridService= inject(AgGridTagService)
  private destroyRef= inject(DestroyRef)
  allCarts =this.agGridService.allCarts
  private gridApi !:GridApi<any>

  filterRows= computed(()=>this.agGridService.allCarts().map(a=>{return { id:a.id,userId:a.userId,discountedTotal:a.discountedTotal,totalProducts:a.totalProducts,totalQuantity:a.totalQuantity}}))
 
  rowSelection: 'single' | 'multiple'='multiple'
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID',checkboxSelection:true,headerCheckboxSelection:true },
    { field: 'userId', headerName: 'User-Id',filter:'agTextColumnFilter' },
    { field: 'discountedTotal', headerName: 'DiscountTotal' },
    { field: 'totalProducts', headerName: 'TotalQuantity',editable:true },
    { field: 'totalQuantity', headerName: 'TotalQuantity' },
   
    {
      field: 'actions',
      headerName: 'Actions',
      cellRenderer: ActionCellRendererComponent,
    },
  ];


  defaultColumnDef= {
    flex:1 ,
    minWidth:100
  }
  ngOnInit(){
    this.isLoading= true;
const subscription = this.agGridService.getAllCarts()
      .subscribe({       
        error:(err)=>{
          console.log("Error is ",err);          
        }
        ,complete:()=>{
          console.log("completed");
          this.isLoading= false
        }
      });
      this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  onGridReady(event:GridReadyEvent<any>){
    this.gridApi=event.api
  }

  onClick(){
    this.gridApi.exportDataAsCsv();
  }

  deleteProduct(e:any){
    console.log(e);
    

  }
}
