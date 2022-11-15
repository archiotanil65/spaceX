import { AfterViewInit, Inject } from "@angular/core";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MissionData } from "src/missionTableView";
import { ModalMissionData } from "src/modalTableView";
import { ViewChild } from "@angular/core";


@Component({
  selector: "app-modal-view-component",
  templateUrl: "./modal-view-component.component.html",
  styleUrls: ["./modal-view-component.component.css"],
})
export class ModalViewComponentComponent implements AfterViewInit {
  modalData: any = [];
  details: any = [];
  ELEMENT_DATA: ModalMissionData[] = [];
  displayedColumns: string[] = [
    "Flight Number",
    "Mission Name",
    "Rocket Type",
    "Rocket Name",
    "Manufacturer",
    "Nationality",
    "Launch Data UTC",
    "Payload Type",
    "Orbit",
    "Site Name",
  ];
  displayedColumns1: any[] = [
    "flight_number",
    "mission_name",
    "rocket_type",
    "rocket_name",
    "manufacturer",
    "nationality",
    "launch_date_utc",
    "payload_type",
    "orbit",
    "site_name"
  ];
  dataSource = this.ELEMENT_DATA;
  displayColumns: any;
  displayData: any;
  inputColumns: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getTableDetails();
    this.displayColumns = ["0"].concat(this.dataSource.map((x) => x.flight_number.toString()));
    this.displayData = this.displayedColumns1.map((x) => this.formatInputRow(x));
    
  }

  formatInputRow(row) {
    const output = {};
    const array = [];
    output[0] = row;
    for (let i = 0; i < this.dataSource.length; ++i) {
      output[this.dataSource[i].flight_number] = this.dataSource[i][row];
    }
    return output;
  }

  getTableDetails() {
    this.modalData = this.data["dataKey"][0];
    let rocket;
    let payloads;
    let launch;
    let finalArray: any = [];
    rocket = this.modalData.rocket;
    payloads = this.modalData.rocket.second_stage.payloads[0];
    launch = this.modalData.launch_site;
    finalArray = Object.assign(rocket, payloads);
    finalArray = Object.assign(finalArray, launch);
    this.details = Object.assign(this.modalData, finalArray);
    this.dataSource = [this.details];
  }
}
