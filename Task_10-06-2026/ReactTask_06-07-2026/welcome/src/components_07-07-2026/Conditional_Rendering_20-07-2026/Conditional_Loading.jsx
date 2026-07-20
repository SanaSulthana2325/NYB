function Conditional_Loading() {

  const loading = false;

  return (
    <div>

      {
        loading
        ? <h2>Loading...</h2>
        : <h2>Data Loaded</h2>
      }

    </div>
  );

}
export default Conditional_Loading;