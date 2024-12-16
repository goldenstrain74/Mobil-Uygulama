const urunler =[
    {urunadi:'lahana',fiyat:100, id:1},
    {urunadi:'elma',fiyat:40,id:2},
    {urunadi:'armut',fiyat:50,id:3}
];


export default function App() {
  const urunListesi = urunler.map( urun=>
      <li key={urun.id}>
          {urun.urunadi}: 
          {urun.fiyat} TL
      </li>
      );

    return (
        <ul>{urunListesi}</ul>
    )
}
