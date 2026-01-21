import { useState } from 'react';
import './ContadorAvanzado.css';
export function ContadorAvanzado() {
  const [contador, setContador] = useState(0);
  const [inicial, setInicial] = useState(0);
  const [historial, setHistorial] = useState([0]);
  const actualizarContador = (nuevoValor) => {
    setContador(nuevoValor);
    setHistorial(prev => [...prev.slice(-4), nuevoValor]);
  };
  const incrementar = () => actualizarContador(contador + 1);
  const decrementar = () => actualizarContador(contador - 1);
  const multiplicar = () => actualizarContador(contador * 2);
  const reset = () => actualizarContador(inicial);
  const establecerInicial = (valor) => {
    setInicial(valor);
    setContador(valor);
    setHistorial([valor]);
  };
  const max = Math.max(...historial);
  const min = Math.min(...historial);
  const promedio = (historial.reduce((a, b) => a + b, 0) / 
historial.length).toFixed(2);
  return (
    <div className="contador-container">
      <h1>Contador Avanzado</h1>
      
      <div className="inicializador">
        <label>Valor Inicial:</label>
        <input
          type="number"
          value={inicial}
          onChange={(e) => 
establecerInicial(Number(e.target.value))}
          placeholder="Ingresa el valor inicial"
        />
      </div>
      <div className="display">
        <h2>{contador}</h2>
      </div>
      <div className="botones">
        <button onClick={incrementar} className="btn btn
success">+1</button>
        <button onClick={decrementar} className="btn btn
warning">-1</button>
        <button onClick={multiplicar} className="btn btn
info">×2</button>
        <button onClick={reset} className="btn btn
danger">Reset</button>
      </div>
      <div className="estadisticas">
        <h3>Estadísticas</h3>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-label">Máximo</span>
            <span className="stat-value">{max}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Mínimo</span>
            <span className="stat-value">{min}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Promedio</span>
            <span className="stat-value">{promedio}</span>
          </div>
        </div>
      </div>
      <div className="historial">
        <h3>Últimos 5 Valores</h3>
        <ul>
          {historial.map((valor, index) => (
            <li key={index}>{valor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ContadorAvanzado;