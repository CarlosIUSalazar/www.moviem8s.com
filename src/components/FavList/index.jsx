import React from "react";

export default function FavList({db}){
  return <table>
      <tbody>
        <tr>
        {db.collection("RealTable").orderBy('Name').onSnapshot((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
              console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
              return (
                <>
                <td>{doc.data().Name}</td>
                <td>{doc.data().ImageLink}</td>
                <td>{doc.data().Rating}</td>
                <td>{doc.data().Year}</td>
                <td>{doc.data().Plot}</td>
                </>
            )
            })
          })}
        </tr>
    </tbody>
  </table>
}