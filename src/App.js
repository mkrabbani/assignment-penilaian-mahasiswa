import React, { useCallback, useEffect, useState} from 'react';
import useDynamicRefs from 'use-dynamic-refs';
import Card from './components/Card';

export default function App() {

  useEffect(() => {
    document.title = `Aplikasi Penialian Mahasiswa`;
    window.scrollTo(0, 0);
  });
  
  console.log('#render');

  const penilaian = [
    ['ap1_m1','ap2_m1','ap3_m1','ap4_m1'],
    ['ap1_m2','ap2_m2','ap3_m2','ap4_m2'],
    ['ap1_m3','ap2_m3','ap3_m3','ap4_m3'],
    ['ap1_m4','ap2_m4','ap3_m4','ap4_m4'],
    ['ap1_m5','ap2_m5','ap3_m5','ap4_m5'],
    ['ap1_m6','ap2_m6','ap3_m6','ap4_m6'],
    ['ap1_m7','ap2_m7','ap3_m7','ap4_m7'],
    ['ap1_m8','ap2_m8','ap3_m8','ap4_m8'],
    ['ap1_m9','ap2_m9','ap3_m9','ap4_m9'],
    ['ap1_m10','ap2_m10','ap3_m10','ap4_m10'],
  ]
 
  const nilai = [1,2,3,4,5,6,7,8,9,10];

  const [getRef, setRef] =  useDynamicRefs();

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const ap1_m1 = getRef('ap1_m1');
      const ap1_m2 = getRef('ap1_m2');
      const ap1_m3 = getRef('ap1_m3');
      const ap1_m4 = getRef('ap1_m4');
      const ap1_m5 = getRef('ap1_m5');
      const ap1_m6 = getRef('ap1_m6');
      const ap1_m7 = getRef('ap1_m7');
      const ap1_m8 = getRef('ap1_m8');
      const ap1_m9 = getRef('ap1_m9');
      const ap1_m10 = getRef('ap1_m10');

      const ap2_m1 = getRef('ap2_m1');
      const ap2_m2 = getRef('ap2_m2');
      const ap2_m3 = getRef('ap2_m3');
      const ap2_m4 = getRef('ap2_m4');
      const ap2_m5 = getRef('ap2_m5');
      const ap2_m6 = getRef('ap2_m6');
      const ap2_m7 = getRef('ap2_m7');
      const ap2_m8 = getRef('ap2_m8');
      const ap2_m9 = getRef('ap2_m9');
      const ap2_m10 = getRef('ap2_m10');

      const ap3_m1 = getRef('ap3_m1');
      const ap3_m2 = getRef('ap3_m2');
      const ap3_m3 = getRef('ap3_m3');
      const ap3_m4 = getRef('ap3_m4');
      const ap3_m5 = getRef('ap3_m5');
      const ap3_m6 = getRef('ap3_m6');
      const ap3_m7 = getRef('ap3_m7');
      const ap3_m8 = getRef('ap3_m8');
      const ap3_m9 = getRef('ap3_m9');
      const ap3_m10 = getRef('ap3_m10');

      const ap4_m1 = getRef('ap4_m1');
      const ap4_m2 = getRef('ap4_m2');
      const ap4_m3 = getRef('ap4_m3');
      const ap4_m4 = getRef('ap4_m4');
      const ap4_m5 = getRef('ap4_m5');
      const ap4_m6 = getRef('ap4_m6');
      const ap4_m7 = getRef('ap4_m7');
      const ap4_m8 = getRef('ap4_m8');
      const ap4_m9 = getRef('ap4_m9');
      const ap4_m10 = getRef('ap4_m10');


      const post = {
        aspek_penilaian_1 : {
          mahasiswa_1 : ap1_m1.current?.value,
          mahasiswa_2 : ap1_m2.current?.value,
          mahasiswa_3 : ap1_m3.current?.value,
          mahasiswa_4 : ap1_m4.current?.value,
          mahasiswa_5 : ap1_m5.current?.value,
          mahasiswa_6 : ap1_m6.current?.value,
          mahasiswa_7 : ap1_m7.current?.value,
          mahasiswa_8 : ap1_m8.current?.value,
          mahasiswa_9 : ap1_m9.current?.value,
          mahasiswa_10 : ap1_m10.current?.value
        },
        aspek_penilaian_2 : {
          mahasiswa_1 : ap2_m1.current?.value,
          mahasiswa_2 : ap2_m2.current?.value,
          mahasiswa_3 : ap2_m3.current?.value,
          mahasiswa_4 : ap2_m4.current?.value,
          mahasiswa_5 : ap2_m5.current?.value,
          mahasiswa_6 : ap2_m6.current?.value,
          mahasiswa_7 : ap2_m7.current?.value,
          mahasiswa_8 : ap2_m8.current?.value,
          mahasiswa_9 : ap2_m9.current?.value,
          mahasiswa_10 : ap2_m10.current?.value
        },
        aspek_penilaian_3 : {
          mahasiswa_1 : ap3_m1.current?.value,
          mahasiswa_2 : ap3_m2.current?.value,
          mahasiswa_3 : ap3_m3.current?.value,
          mahasiswa_4 : ap3_m4.current?.value,
          mahasiswa_5 : ap3_m5.current?.value,
          mahasiswa_6 : ap3_m6.current?.value,
          mahasiswa_7 : ap3_m7.current?.value,
          mahasiswa_8 : ap3_m8.current?.value,
          mahasiswa_9 : ap3_m9.current?.value,
          mahasiswa_10 : ap3_m10.current?.value
        },
        aspek_penilaian_4 : {
          mahasiswa_1 : ap4_m1.current?.value,
          mahasiswa_2 : ap4_m2.current?.value,
          mahasiswa_3 : ap4_m3.current?.value,
          mahasiswa_4 : ap4_m4.current?.value,
          mahasiswa_5 : ap4_m5.current?.value,
          mahasiswa_6 : ap4_m6.current?.value,
          mahasiswa_7 : ap4_m7.current?.value,
          mahasiswa_8 : ap4_m8.current?.value,
          mahasiswa_9 : ap4_m9.current?.value,
          mahasiswa_10 : ap4_m10.current?.value
        },
      }
  
      fetch('http://localhost:8000/penilaian_mahasiswa', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post)
      }).then(() => {
          window.location.reload();
      })

    },
    []
  ); 

  return (
    <div className="container">
      <header className="App-header my-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1>Aplikasi Penilaian Mahasiswa</h1>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-end px-3 mb-3 text-center">
            <div style={{width: "20%"}}>
              <p style={{margin: "0", padding:"0"}}>Aspek Penilaian 1</p>
            </div>
            <div style={{width: "20%"}}>
              <p style={{margin: "0", padding:"0"}}>Aspek Penilaian 2</p>
            </div>
            <div style={{width: "20%"}}>
              <p style={{margin: "0", padding:"0"}}>Aspek Penilaian 3</p>
            </div>
            <div style={{width: "20%"}}>
              <p style={{margin: "0", padding:"0"}}>Aspek Penilaian 4</p>
            </div>
          </div>
        </div>
        <form method='post' onSubmit={formHandler()}>
          {penilaian.map((eachId, id) => (
            <Card nilai={nilai} mahasiswa={eachId} mhs={id+1} key={id} />
          ))}
          <div className="row">
            <div className="col-auto ms-auto mt-3">
              <button className="btn d-flex px-4 btn-grad" type="submit">Simpan</button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );

}

