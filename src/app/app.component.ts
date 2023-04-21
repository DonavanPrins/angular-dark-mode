import { Component, HostBinding, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatTableDataSource } from '@angular/material/table';

export interface dataObj {
  col1: string;
  col2: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new UntypedFormControl(false);

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) { 
    this.tableData.data = [
      {
        col1: 'row 1 column 1 data',
        col2: 'row 1 column 2 data',
      },
      {
        col1: 'row 2 column 1 data',
        col2: 'row 2 column 2 data',
      },
    ];
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  showDialog(): void {
    this.dialog.open(SampleDialogComponent,
      {
        width: '500px'
      });
  }

  columns = ['col1', 'col2'];
  tableData = new MatTableDataSource<dataObj>();

}
