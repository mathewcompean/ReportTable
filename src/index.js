import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';

class ReportTable extends React.Component {

  ReportTable(data){
    this.data = data;
  }

  data = [];

  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('parameters', pagination, filters, sorter);
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }

  createUniqueFilterList(property){
    var list = [];
    var values = [];

    for(var i = 0; i < this.data.length; i++){
      var record = this.data[i];
      var prop = record[property];

      if(!values.includes(prop)){
        list.push({text: prop, value: prop});
        values.push(prop);
      }
    }

    return list;
  }
  
  render() {
    for (let i = 0; i < 4; ++i) {
      this.data.push({
        key: i,
        title: 'A - Test Title',
        alpha: '12345',
        lineOfBusiness: 'Service',
        lineOfService: 'Business',
        startDate1: '2014-12-20 23:12:00',
        completionDate1: '2014-12-24 23:12:00',
        jobType: 'Encoding',
        dueDate: '2014-12-30 23:12:00',
        assets: 'Some Assets',
        workabilityDate: '2014-12-19 23:12:00',
        startDate2: '2014-12-20 23:12:00',
        completionDate2: '2014-12-22 23:12:00',
        assignee: 'Test Worker',
        pxlManager: 'Test PXL Manager',
        clientManager: 'Test Client Manager',
        clientGroup: 'Test Client Group',
        pxlNotes: 'Some PLM notes',
        clientNotes: 'Some Client notes',
        jobID: "22222",
        batchID: "002211",
        poNum: "120732073290"
      });
      this.data.push({
        key: i + 20,
        title: 'B - Test Title',
        alpha: '78901',
        lineOfBusiness: 'Service',
        lineOfService: 'Business',
        startDate1: '2014-12-20 23:12:00',
        completionDate1: '2014-12-24 23:12:00',
        jobType: 'Encoding',
        dueDate: '2014-12-30 23:12:00',
        assets: 'Some Assets',
        workabilityDate: '2014-12-19 23:12:00',
        startDate2: '2014-12-20 23:12:00',
        completionDate2: '2014-12-22 23:12:00',
        assignee: 'Test Worker',
        pxlManager: 'Test PXL Manager',
        clientManager: 'Test Client Manager',
        clientGroup: 'Test Client Group',
        pxlNotes: 'Some PLM notes',
        clientNotes: 'Some Client notes',
        jobID: "22222",
        batchID: "002211",
        poNum: "120732073290"
      });
    }

    var titleFilterList = this.createUniqueFilterList("title");
    var alphaFilterList = this.createUniqueFilterList("alpha");
    var lineOfBusinessFilterList = this.createUniqueFilterList("lineOfBusiness");
    var lineOfServiceFilterList = this.createUniqueFilterList("lineOfService");
    var assigneeFilterList = this.createUniqueFilterList("assignee");
    var pxlManagerFilterList = this.createUniqueFilterList("pxlManager");
    var clientManagerFilterList = this.createUniqueFilterList("clientManager");
    var clientGroupFilterList = this.createUniqueFilterList("clientGroup");
    var jobIDFilterList = this.createUniqueFilterList("jobID");
    var batchIDFilterList = this.createUniqueFilterList("batchID");
    var poNumFilterList = this.createUniqueFilterList("poNum");
    
    const mainCols = [
      { title: 'Title', dataIndex: 'title', key: 'title', 
        filters: titleFilterList,
        onFilter: (value, record) => record.title.indexOf(value) === 0,
        sorter: (a, b) => a.title.length - b.title.length,
        width: 120},
      { title: 'Alpha', dataIndex: 'alpha', key: 'alpha',
        filters: alphaFilterList,
        onFilter: (value, record) => record.alpha.indexOf(value) === 0,
        sorter: (a, b) => parseInt(a.alpha, 10) - parseInt(b.alpha, 10),
       width: 120},
      { title: 'Line of Business', dataIndex: 'lineOfBusiness', key: 'lineOfBusiness',
        filters: lineOfBusinessFilterList,
        onFilter: (value, record) => record.lineOfBusiness.indexOf(value) === 0,
        width: 120 },
      { title: 'Line of Service', dataIndex: 'lineOfService', key: 'lineOfService',
        filters: lineOfServiceFilterList,
        onFilter: (value, record) => record.lineOfService.indexOf(value) === 0,
        width: 120 },
      { title: 'Start Date', dataIndex: 'startDate1', key: 'startDate1', 
        sorter: (a, b) => a.startDate1.length - b.startDate1.length,
        width: 120},
      { title: 'Completion Date', dataIndex: 'completionDate1', key: 'completionDate1', 
        sorter: (a, b) => a.completionDate1.length - b.completionDate1.length,
        width: 120 },
      { title: 'Jop Type', dataIndex:'jobType', key: 'jobType', width: 120},
      { title: 'Due Date (Actual)', dataIndex: 'dueDate', key: 'dueDate', 
        sorter: (a, b) => a.dueDate.length - b.dueDate.length,
        width: 120 },
      { title: 'Assets', dataIndex: 'assets', key: 'assets', width: 120},
      { title: 'Workability Date (Target)', dataIndex: 'workabilityDate', key: 'workabilityDate', 
        sorter: (a, b) => a.workabilityDate.length - b.workabilityDate.length,
        width: 120 },
      { title: 'Start Date', dataIndex: 'startDate2', key: 'startDate2', 
        sorter: (a, b) => a.startDate2.length - b.startDate2.length,
        width: 120 },
      { title: 'Completion Date', dataIndex: 'completionDate2', key: 'completionDate2',
        sorter: (a, b) => a.completionDate2.length - b.completionDate2.length,
        width: 120 },
      { title: 'Assignee', dataIndex: 'assignee', key: 'assignee', 
        filters: assigneeFilterList,
        onFilter: (value, record) => record.assignee.indexOf(value) === 0,
        width: 120 },
      { title: 'Pixelogic Manager', dataIndex: 'pxlManager', key: 'pxlManager', 
        filters: pxlManagerFilterList,
        onFilter: (value, record) => record.pxlManager.indexOf(value) === 0,
        width: 120 },
      { title: 'Client Manager', dataIndex: 'clientManager', key: 'clientManager', 
        filters: clientManagerFilterList,
        onFilter: (value, record) => record.clientManager.indexOf(value) === 0,
        width: 120 },
      { title: 'Client Group', dataIndex: 'clientGroup', key: 'clientGroup', 
        filters: clientGroupFilterList,
        onFilter: (value, record) => record.clientGroup.indexOf(value) === 0,
        width: 120 },
      { title: 'Pixelogic Notes', dataIndex: 'pxlNotes', key: 'pxlNotes', width: 120 },
      { title: 'Client Notes', dataIndex: 'clientNotes', key: 'clientNotes', width: 120 },
      { title: 'Job ID', dataIndex: 'jobID', key: 'jobID', 
        filters: jobIDFilterList,
        onFilter: (value, record) => record.jobID.indexOf(value) === 0,
        width: 120 },
      { title: 'Batch ID', dataIndex: 'batchID', key: 'batchID', 
        filters: batchIDFilterList,
        onFilter: (value, record) => record.batchID.indexOf(value) === 0,
        width: 120 },
      { title: 'PO #', dataIndex: 'poNum', key: 'poNum', 
        filters: poNumFilterList,
        onFilter: (value, record) => record.poNum.indexOf(value) === 0,
        width: 120 },
    ];

    return (
        <Table 
        className="embedded-report-table"
        columns={mainCols}
        dataSource={this.data} 
        onChange={this.handleChange} 
        scroll={{x: 4200, y:1000}}
        />

    );
  }
}

ReactDOM.render(<ReportTable />, document.getElementById('container'));