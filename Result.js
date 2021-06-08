class Result
{
    constructor(pcandidates)
    {
        this.candidates=pcandidates;
   
    }
    calculate_result=()=>
    {
       let arraynumbervotes=[];
       this.candidates.map(
           cand=>
           {
            let name=cand.name;
            let votes=cand.number_votes();
            arraynumbervotes.push({name:name,votes:votes})
           }
       )
       let cand1=arraynumbervotes[0].name;
       let cand2=arraynumbervotes[1].name;
       let cand3=arraynumbervotes[2].name;
       let a=arraynumbervotes[0].votes;
       let b=arraynumbervotes[1].votes;
       let c=arraynumbervotes[2].votes;
       if(a==b&&a==c&&b==c)
       {
           return "The three candidates have the same number of votes";
       }
       else
       {
        if (a==b&&a>c) 
        {
            return ""+cand1+" and "+cand2+" have the same votes";
        }
        else
        {
            if(a==c&&a>b)
            {
                return ""+cand1+" and "+cand3+" have the same votes";
            }
            else
            {
                if(b==c&&b>a)
                {
                    return ""+cand2+" and "+cand3+" have the same votes";
                }
                else
                {
                    if(a>b)
                    {
                        if(a>c)
                        {
                            return ""+cand1+" has more votes";
                        }
                        else
                        {
                            return ""+cand3+" has more votes"; 
                        }
                    }
                    else
                    {
                        if(b>c)
                        {
                            return ""+cand2+" has more votes";
                        }
                        else
                        {
                            return ""+cand3+" has more votes";
                        }
                    }
                }
            }
            
        }
         
       }

    }
    
}
module.exports={Result}