import React from "react";

const ProfilCom = () => {
  return (
    <div>
      <div className="flex justify-between bg-black absolute top-0 left-0 w-full shadow-2xl">
        <div className="p-5 ml-3">
          <img
            src="./src/assets/logo keranjang.jpg"
            alt="Profile"
            className="rounded-3xl w-10 h-10"
          />
        </div>
        <div className="p-3 absolute left-24 mt-4 text-white">
          <span className="mr-10">Home</span>
          <span className="mr-10">Items</span>
          <span>About</span>
        </div>
        <div className="p-5 mr-5"></div>
      </div>

      <div className="bg-white absolute top-44 left-0 w-full h-[470px] rounded-2xl shadow-2xl flex flex-col items-center">
        <table className="text-black text-3xl tracking-widest mt-32">
          <tr>
            <td className="text-start">Name</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">Rizki Ikhwan Pamuji</td>
          </tr>
          <tr>
            <td className="text-start">Username</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">Moon</td>
          </tr>
          <tr>
            <td className="text-start">Email</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">ikhwanpamuji@student.unmerpas.ac.id</td>
          </tr>
          <tr>
            <td className="text-start">Age</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">21</td>
          </tr>
          <tr>
            <td className="text-start">Address</td>
            <td className="text-start">&nbsp;:</td>
            <td className="text-start">Pasuruan,Jawa Timur</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfilCom;
