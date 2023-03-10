function trimSpace (str) {
	return str.replace(/\s+/g, '');
}

// 单独处理响应 => 异常情况统一跳转/404
function getDatas (errorCode, data, history, callback) {
	if (errorCode === 0 && data) {
		callback();
	} else {
    history.push('/404');
	}
}

export {
	trimSpace,
	getDatas
}