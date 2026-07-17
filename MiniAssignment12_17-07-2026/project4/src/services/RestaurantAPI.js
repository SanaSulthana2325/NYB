export async function getRestaurants(){


const response =
await fetch(
"https://dummyjson.com/recipes"
);



if(!response.ok)
{
throw Error("API Failed");
}


const data =
await response.json();


return data.recipes;


}