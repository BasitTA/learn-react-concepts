import {arrayDatas as datas} from "./arrayDatas"

// METHODS

const arrayMap = ()=>{
   const dataMapping = datas.map((data)=>{
      console.log('mappingdata', data)
   })
}
const arrayFilter = ()=>{
   const dataFilter = datas.filter(data => data.type == 'letter') //filter data dgn tipe huruf
   console.log('filterdata', dataFilter)

   const dataFilterMap = datas.filter(data => data.type == 'number').map( data => data.title) //filter data dgn tipe angka, lalu chaining dg method map
   console.log('filterdatawithmapping', dataFilterMap)
}
const arrayReduce = ()=>{
   const dataReduce = datas.reduce((acc, data)=> acc + data.value, 0) //acc: nilai terbaru, data: nilai yg akan dieksekusi, 0: index yg mau dieksekusi pertama
   console.log('reducedata', dataReduce)
}
const arraySort = ()=>{
   // slice utk mengcopy array, method sort bersifat mengubah data utama
   const dataAscending = datas.slice().sort((a,b)=>(a.id-b.id)) //rumus ascending: a-b
   const dataDescending = datas.slice().sort((a,b)=>(b.id-a.id)) //rumus descending: b-a
   console.log('ascending', dataAscending, 'descending', dataDescending)
}

// IMMUTABLE ARRAY
const immutableArray = ()=>{
   const newDatas = {
      id : 7,
      title : 3242,
      desc : 123123123213123,
      value : 8,
      type : 'number'
   }
   // RUMUS UTK MODIFIKASI DATA IMMUTABLE => tambah data baru, pake spread operator, simpan ke variabel baru
   const dataAfterAdded = [...datas, newDatas]
   console.log('dataafteradded', dataAfterAdded)

   // hapus data, pake method filter, simpan ke variabel baru
   const dataAfterDeleted = dataAfterAdded.filter((data)=>(data.id !== 10))
   console.log('dataafterdeleted', dataAfterDeleted)
   
   // ubah data, pake method map, data lama ditimpa dgn object baru, simpan ke variabel baru
   const dataAfterUpdated = datas.map((data)=>(data.id==10 ? { ...data, id: 90, title: 'ppp'  } : data))
   console.log('dataafterupdated', dataAfterUpdated)
}

const arrayFrom = ()=>{
   const dataArrayFrom = Array.from({length:10},(_,k)=>k) //'_' itu artinya parameter yg diabaikan/tidak digunakan (convention)
   console.log('dataarrayfrom', dataArrayFrom)
}


const Javascript = ()=>{
   return(
      <>
         <h2>JS Core for React: </h2>
         <ul>
            <li>destructuring, rest/spread operator, template literals, ternaries operator, arrow functions, short circuiting & logical operator (&&,||,??), optional chaining</li>
            <li>array <b>map</b> => utk looping data {arrayMap()}</li>
            <li>array <b>filter</b> => utk filter data {arrayFilter()}</li>
            <li>array <b>reduce</b> => utk menjumlahkan/mentotal value dlm array dgn initial value+accumulator(current value) {arrayReduce()}</li>
            <li>array <b>sort</b> => utk ngurutin data {arraySort()}</li>
            <li><b>immutable</b> array => tambah, hapus, ubah (modifikasi) data tanpa mengubah data utama {immutableArray()}</li>
            <li>async js: promises</li>
            <li>async js: async/await</li>
         </ul>
         <h2>JS Tambahan: </h2>
         <ul>
            <li>array <b>from</b> => utk membuat array dari objek yg dapat diulang {arrayFrom()}</li>
         </ul>

      </>
   )
}

export default Javascript