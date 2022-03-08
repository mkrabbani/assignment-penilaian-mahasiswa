import React from "react";
import useDynamicRefs from "use-dynamic-refs";

export default function Card(props) {
       
    const mahasiswa = props.mahasiswa;

    const nilai = props.nilai;

    const mhs = props.mhs;

    const [getRef, setRef] =  useDynamicRefs();

    return (
        <div className="row gx-2 mb-3 bdr">
            <div className="d-flex gap-2 p-2 p-lg-4 align-items-center">
            <div className="d-flex align-items-center gap-2" style={{width: "20%"}}>
                <div className="pp bg-secondary rounded-circle overflow-hidden" style={{width: "50px", height: "50px"}}>
                    <img src={require('../img/'+ mhs +'.jpg')} alt="Profile" className="img-fluid" />
                </div>
                <p style={{margin: "0", padding:"0"}}>Mahasiswa {mhs}</p>
            </div>
            {mahasiswa.map((eachId, idxA) => (
                <div style={{width: "20%"}} key={idxA}>
                    <select 
                    className="form-select"
                    name="nilai"
                    ref={setRef(eachId)}
                    >
                    {nilai.map((score, idxN) => (
                        <option value={score || ''} key={idxN}>{score}</option>
                    ))}
                    </select>
                </div>
            ))}
            </div>
        </div>
    )

}