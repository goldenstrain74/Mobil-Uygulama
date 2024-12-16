function MyButton(){
    function basBana(){
        alert ("ORHANNNN");
    }

    return (
<button onClick={basBana} > Buton'a Basın  </button>

    );
}

export default function App() {
  return (
      <div> 
         <h1> Buton Basma Uygulaması </h1>

              <MyButton/>
      </div>
  );
}