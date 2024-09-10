import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";

function AttractionInfo() {
	const [attractionsInfo, setAttractionsInfo] = useState([]);
	
	const { id } = useParams()
	
	useEffect(() => {
		const fetchData = async () => {
			// await axios.get("http://localhost:3000/attractions").then(data => setAttractions(data))
			const response = await axios.get(`http://localhost:3000/attraction/${id}`);
			setAttractionsInfo(response.data);
			console.log(response.data)
		};
		fetchData();
	}, []);
	
	return (
		
		<Container className="grid grid-cols-3 gap-4">
			
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
							<div className="flex items-start bg-gray-800">
								<img
									src=""
									alt="Zombie Attraction"
									className="w-96 h-96 object-cover rounded-lg"
								/>
								<div className="space-y-4">
									<div className="bg-gray-700 p-4 rounded-lg shadow-md">
										<p className="text-sm text-gray-400">
										{
											attractionsInfo.name
										}
										</p>
										<p className="text-sm text-red-500 mt-2">
										{
											attractionsInfo.description
										}
										</p>
									</div>

								</div>
							</div>
							<p className="mt-10 text-center text-lg font-semibold">
								Pour votre sécurité, soyez en bonne santé
							</p>
						</div>

		</Container>
	)
}

export default AttractionInfo;