const baseUrl = 'http://localhost:3300/';

const API = {
  LOGIN_ACTION: baseUrl + 'admin/login_action',
  LOGIN_CHECK: baseUrl + 'admin/login_check',
  LOGOUT_ACTION: baseUrl + 'admin/logout_action'
}

const NAV = [
  {
    // 用于路由
    field: 'course',
    // 课程管理
    title: '课程管理' // 课程上下架、课程分类选择
  },
	{
    field: 'recom_course',
    title: '推荐课程' // 推荐课程的上下架
  },
	{
    field: 'slider',
    title: '轮播图管理' // 轮播图数据上下线
  },
	{
    field: 'student',
    title: '学生管理' // 学生上下线
  },
	{
    field: 'teacher',
    title: '老师管理' // 老师的上下线 明星老师的设置
  },
	{
    field: 'crawler',
    title: '数据爬取' // 爬取各种数据
  }
];

export {
  API,
  NAV
}