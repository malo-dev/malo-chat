const HandleError = (err, req, res, next) => {
	// refractor
	const StatusError = res.statusCode === 200 ? 200 : res.statusCode;
	res.status(StatusError)
	res.json({
		message : err.message,
	})
}
module.exports = { HandleError };