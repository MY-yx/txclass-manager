import React, { Component } from 'react';

import CourseService from 'services/Course';
import CommonService from 'services/Common';

import { getDatas } from 'utils/tools';

import { COURSE_TH } from 'config/table_config';

import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const courseService = new CourseService(),
      commonService = new CommonService();

export default class Course extends Component {
	constructor(props) {
	  super(props);
	
    // 管理 => 最好是去解构, 而不是每个都写this.xxx
	  this.state = {
	  	title: '课程管理',
	  	courseData: [],
	  	fieldData: []
	  };
	}

  // 获取数据 => 单独的每一页去请求对应的数据
	async getCourseData () {
		const result = await courseService.getCourseData(),
		      errorCode = result.error_code,
		      data = result.data,
		      { history } = this.props;

		getDatas(errorCode, data, history, () => {
      const { courseData, fieldData } = data;

      courseData.forEach((cItem, cIndex) => {
        // 这一层逻辑可以再后端连表查询的, 前端也可以做
        if (cItem.field === 0) {
        	cItem.fieldTitle = '无分类';
        }

        fieldData.forEach((fItem, fIndex) => {
          if (cItem.field === fItem.id) {
          	cItem.fieldTitle = fItem.title;
          }
        });
      });

      this.setState({
      	courseData,
      	fieldData
      });
		});
	}

	async onSelectChange (data, cid, index) {
    const { courseData } = this.state;

    courseData[index].field = data.id;
    courseData[index].fieldTitle = data.title;

    this.setState({
    	courseData: this.state.courseData
    });

    const result = await courseService.changeCourseField({
      cid,
      field: data.id
    });

    const errorCode = result.error_code;

    if (errorCode !== 0) {
    	alert('修改课程分类失败');
    	return;
    }
	}

	async onStatusClick(cid, index) {
    const { courseData } = this.state,
          status = courseData[index].status;

    const cfm = window.confirm(`确认要${status ? '下架' : '上架'}该课程吗？`);

    if (cfm) {
      switch (status) {
        case 1:
          courseData[index].status = 0;
          break;
        case 0:
          courseData[index].status = 1;
          break;
        default:
          break;
      }

      // 因为setState可能会更新多个state, 调用后立即读取this.state是有隐患的 => 第二个参数可以解决这个隐患
      this.setState({
        courseData: this.state.courseData
      }, async () => {
        const result = await commonService.changeStatus({
          id: cid,
          status: this.state.courseData[index].status,
          field: 'COURSE'
        });

        const errorCode = result.error_code;

        if (errorCode !== 0) {
          const status = this.state.courseData[index].status;
          alert(
            status ? '该课程上架失败' : '该课程下架失败'
          );
          return;
        }
      });
    }  
	}

  // 组件被渲染到DOM后才运行
	componentDidMount () {
		this.getCourseData();
	}

	render () {
    
    const { title, courseData, fieldData } = this.state;

		return (
      <div className="list-container">
        <ListTitle 
          title={ title }
          onRefreshData={ this.getCourseData.bind(this) } />

        <table className="list-table">
        	<TableHead
            thData={ COURSE_TH }
        	/>
        	<TableBody
            courseData={ courseData }
            fieldData={ fieldData }
            onSelectChange={ this.onSelectChange.bind(this) }
        	  onStatusClick={ this.onStatusClick.bind(this) }
        	/>
        </table>
      </div>
		);
	}
}