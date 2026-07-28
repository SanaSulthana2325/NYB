function withCard(Component){

 return function EnhancedComponent(){

  return (
    <div className="
      bg-white
      shadow-lg
      rounded-lg
      p-6
      m-4
    ">
       <Component/>
    </div>
  );

 }

}

export default withCard;