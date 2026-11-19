function ProductoCard({ producto }) {
  const estado = producto.stock > 0 ? 'Disponible' : 'Agotado';

  return (
    <article className="producto-card">
      <span className="producto-categoria">{producto.categoria}</span>
      <h2>{producto.nombre}</h2>
      <p className="producto-precio">${producto.precio.toLocaleString('es-CO')}</p>
      <p>Unidades disponibles: {producto.stock}</p>
      <strong className={producto.stock > 0 ? 'estado disponible' : 'estado agotado'}>
        {estado}
      </strong>
    </article>
  );
}

export default ProductoCard;