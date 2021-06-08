class Candidate
{
    constructor(pname,pvotes)
    {
        this.name=pname;
        this.votes=pvotes;
    }
    number_votes=()=>
    {
        return this.votes.length;
    }
    add_vote=()=>
    {
      this.votes.push(this.name);  
    }
}
module.exports={Candidate}