module.exports = function (timestamp) {
	// timestamp 时间戳，单位秒
	timestamp = Number(timestamp) * 1000;
	let date = new Date(timestamp);
	let year = date.getFullYear() + '';
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	month = month > 9? month : '0' + month;
	day = day > 9? day : '0' + day;
	hour = hour > 9? hour : '0' + hour;
	minutes = minutes > 9? minutes : '0' + minutes;
	return `${year}年${month}月${day}日 ${hour}:${minutes}`;
}