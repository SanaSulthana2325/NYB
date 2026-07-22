
import Passing_String from '../../components_07-07-2026/parent_child_08-07-2026/Passing_String';
import Props_PC from '../../components_07-07-2026/parent_child_08-07-2026/Props_PC';

function Props_page(){
    const name1 = "tasan";
    const age1 = 83;
    const city1 = "hyderabad";
    
    const skills = ["HTML","CSS","JS","React"];
    return(
        
        <>
        <Props_PC/>
        <br/><hr/>
        <Passing_String name="Munni"/>
        <br/><hr/>

        <Passing_String age={34}/>
        <br/><hr/>
        <Passing_String 
        name1={name1}
        age1={age1}
        city1={city1}/>
        <Passing_String skills={skills}/>




        </>
    )
}
 
export default Props_page;