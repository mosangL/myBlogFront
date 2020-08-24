const baseApi = '/';
// const baseApi = 'http://192.168.146.132:8080/';

function ajax(method, url, dataObj, callback) {
	let xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest;
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHttp')
	}

	method = method.toUpperCase();
	let data = typeof dataObj == 'string' ? dataObj : parseObj(dataObj); //data的格式是'a=1&b=2'

	if (method == 'GET') {
		xhr.open(method, baseApi + url + '?' + data, true);
		xhr.send()
	} else if (method == 'POST') {
		xhr.open(method, baseApi + url, true); //true就是异步加载的意思
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send(data);
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(JSON.parse(xhr.responseText))
		}
	}
}

function parseObj(obj) {
	let data = "";
	for (let key in obj) {
		data += key + "=" + obj[key] + "&";
	}
	return data ? data.slice(0, -1) : "";
}

module.exports = ajax;
// export default ajax
