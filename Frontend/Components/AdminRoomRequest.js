import { useEffect, useState } from "react";
import ShimmerClient from "./ShimmerClient";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const Checkingrequest = () => {
  const [requestData, setRequestData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id, roomNumber } = useParams();
  const cookie = Cookies.get("jwttoken");
  const InfoBox = ({ label, value }) => (
    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
      <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
        {label}
      </p>
      <p className="text-gray-700 text-sm font-semibold truncate">
        {value || "N/A"}
      </p>
    </div>
  );

  const gettingresult = async () => {
    try {
      const data = { id, roomNumber };
      const url = `${process.env.API_URL}/clientrequest`;// Note: changed localhost/5000 to localhost:5000

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${cookie}`,
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      const result = await response.json();
      
      console.log(result.message);
      setRequestData(result.message);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    gettingresult();
  },[]);
  const finalrequestCall=async()=>{
    
    const { Admin, roomnumber,_id } = requestData;
    console.log(requestData)
    const sendBodyRequest = {
      Admin: Admin,
      roomNumber: roomnumber,
      id:_id
    };
    const url = "http://localhost:5000/updatedroomstatus";
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${cookie}`
      },
      body:JSON.stringify(sendBodyRequest)
    }

    const response =await fetch(url,options);
    if(response.ok){
      alert("Your are Satisfying with The Customer Deatils  Please Contact Customer With Provided details")
    }else{
      alert("Something Went Wrong");
    }


  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {!isLoading && requestData ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-white"
        >
          {/* Top Decorative Banner */}
          <div className="h-32 bg-gradient-to-r from-amber-500 to-orange-600 flex items-end justify-center">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-2 rounded-full shadow-lg"
            >
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt="User"
              />
            </motion.div>
          </div>

          <div className="pt-10 pb-8 px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {requestData.name}
            </h1>
            <p className="text-amber-600 font-medium text-sm mb-6 uppercase tracking-widest">
              Room Request: {roomNumber}
            </p>

            {/* Stats/Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-left">
              <InfoBox label="Email" value={requestData.mail} />
              <InfoBox label="Phone" value={requestData.phone} />
              <InfoBox label="District" value={requestData.district} />
              <InfoBox label="State" value={requestData.state} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-500 cursor-pointer text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-100 transition-colors"
                onClick={finalrequestCall}
              >
                Accept Client Request
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white cursor-pointer text-gray-400 font-semibold py-3 rounded-2xl border border-gray-100 hover:text-rose-500 hover:border-rose-100 transition-all"
              >
                Decline
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Still showing 10 shimmers because it fills the screen better while waiting */
        <ShimmerClient />
      )}
    </div>
  );
};

export default Checkingrequest;
