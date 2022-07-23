const Configs = () => {

	// const API = "http://localhost:5000/";
	const API = "http://192.168.0.145:5000/"
	const userId = localStorage.getItem("userId");
	const userRole = localStorage.getItem("userRole");
	const accessToken = localStorage.getItem("accessToken");

	return { API, userId, userRole, accessToken };
}

export default Configs;