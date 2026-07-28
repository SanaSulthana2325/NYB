import React from 'react'

function Row(){
    return(
        <>
    <td className="border border-brown-900 px-5 py-2">101</td>
    <td className="border border-pink-500 px-5 py-2">Sana</td>
    
        </>
    )
}

function Table() {
  return (
    
    //<table border="1">
    <table className="border-collapse border border-gray-400 shadow-lg bg-white">
        <tbody>
            <tr>
                <Row/>
                
            </tr>
        </tbody>
        </table>
    
  );
}

export default Table