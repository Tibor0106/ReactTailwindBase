import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <div className="flex justify-center mt-80">
        <div className=" bg-slate-300 shadow-sm p-4 w-96">
          <h4 className="text-center font-medium mb-5 text-slate-900">Bejelentkezés</h4>
          <div className="mb-5"> 
            <div>
              <input
                type="text"
                className=" bg-slate-100 border-spacing-2 shadow-md p-2 focus:border-none w-80 ms-4"
                placeholder="Felhasználónév"
              />
            </div>
          </div>
          <div className="mb-5 block">
          
            <div>
              <input
                type="password"
                className=" bg-slate-100 border-spacing-2 shadow-md p-2 focus:border-none w-80 ms-4"
                placeholder="Jelszó"
              />
            </div>
          </div>
          <div className="mb-5 block">
         
          <div>
            <button className=" bg-amber-200  border-spacing-2 shadow-md p-2 focus:border-none w-80 ms-4 hover:bg-amber-300 hover:transition-colors">Bejelentkezés</button>
      
          </div>
        </div>
        <div className="flex justify-between">
          <p className=" text-orange-500 underline hover:text-orange-600 cursor-pointer">Még nincs fiókom !</p>
          <p className=" text-orange-500 underline hover:text-orange-600 cursor-pointer">Elfelejtettem a jelszavamat !</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
