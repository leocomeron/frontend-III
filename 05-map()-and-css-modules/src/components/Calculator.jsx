// En este componente funcional podemos ver el concepto de inmutabilidad
// La función hace cambiar el valor de la variable contador,
// pero nada sucede en el UI, mientras que en los logs podemos ver que realmente se incrementa.
export default function Calculator() {
  let contador = 0;

  function increment() {
    contador++;
    console.log(contador);
  }
  return (
    <div className="App">
      <h1>{contador}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
