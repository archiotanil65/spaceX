import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GetTableDetailsApiService } from "../service/get-table-details-api.service";
import { MatDialog } from "@angular/material/dialog";
import { MatProgressBar } from "@angular/material/progress-bar";
import { ModalViewComponentComponent } from "../modal-view-component/modal-view-component.component";
import { MissionData } from "src/missionTableView";
import { of, delay } from "rxjs";
import { MatFormField } from "@angular/material/form-field";
import { MatSelect } from "@angular/material/select";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-main-table-component",
  templateUrl: "./main-table-component.component.html",
  styleUrls: ["./main-table-component.component.css"],
})
export class MainTableComponentComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ELEMENT_DATA: MissionData[] = [];
  displayedColumns: string[] = [
    "flight_number",
    "launch_date_utc",
    "launch_site",
    "mission_name",
    "orbit",
    "rocket_name",
    "launch_success",
  ];
  dataSource = new MatTableDataSource<MissionData>(this.ELEMENT_DATA);
  isLoading:boolean;
  filter: any = "All Launches";
  filterData: any = [];
  reusedData: any = this.dataSource;
  selected = '4';

  

  constructor(
    public dialog: MatDialog,
    private postData: GetTableDetailsApiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.params.subscribe((params) => {
      console.log("Params", params);
    });
  }

  ngOnInit(): void {
    this.getTableData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getTableData() {
    this.isLoading=true;
    this.postData
      .callMainTableApi()
      .pipe(delay(1000))
      .subscribe(
        (tableData) => {
          this.isLoading = false;
          this.reusedData = tableData;
          this.dataSource.data = tableData as MissionData[];
        },
        (error) => (this.isLoading = false)
      );
  }

  applyFilter(filterValue: string) {
    this.filterData = [];
    for (let element of this.reusedData) {
      if (element.launch_success == JSON.parse(filterValue)) {
        let array: any = [];
        array = element;
        this.filterData.push(array);
      }
    }
    this.dataSource.data = this.filterData;
  }

  clearFilters() {
    this.dataSource.filter = "";
    this.filter = "";
  }

  openMissionDialog(element) {
    let modalViewDetails = [];
    modalViewDetails.push(element);
    this.dialog.open(ModalViewComponentComponent, {
      height: "95%",
      width: "40%",
      data: {
        dataKey: modalViewDetails,
      },
    });
  }
}
