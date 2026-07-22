

function Loading() {
    const loading = true;
  return (
    <>
    {
        loading
        ? <h2>Loading......</h2>
        : <h2>Data loaded Successfully</h2>
    }
    
    </>
  )
}

export default Loading