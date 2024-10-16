import React, { useState } from "react";

interface AddLekseProps {
   onAdd: (lekse: string) => void;
}

const AddLekse = ({ onAdd }: AddLekseProps) => {
   const [lekse, setLekse] = useState("");

   const handleAddLekse = () => {
      if (lekse) {
         onAdd(lekse);
         setLekse("");
      }
   };

   return (
      <div>
         <form action="javascript:void(0)">
            <div className="flex flex-row place-content-between">
               <input
                  className=""
                  type="text"
                  placeholder="Legg til leksen"
                  onChange={(e) => setLekse(e.target.value)}
                  value={lekse}
               />
               <button onClick={handleAddLekse}>Legg til</button>
            </div>
         </form>
      </div>
   );
};

export default AddLekse;
