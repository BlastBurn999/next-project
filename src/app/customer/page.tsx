

class CustomerClass{
  public id:number;
  public name:string;
  public age:number;

  constructor(id:number,name:string,age:number){
    this.id=id;
    this.name=name;
    this.age=age;
  }
}

class CustomerRecords{
//const customer=['Mac','Book'];
public customer:Array<CustomerClass>=[];
constructor(){
  this.customer=[ {
    'id':22,
    'name':"SAMPLE 1",
    'age':26
  },
  {
    'id':20,
    'name':"SAMPLE 2",
    'age':55
  }]
}

addCustomer(id:number,name:string,age:number){
  this.customer.push({'id':id,'name':name,'age':age})
}

deleteCustomer(id:number){
}
}  

export default function Customer(){
  //MAPPING THE COURSE INTO NEW ARRAYAND ITERATE
  let co= new CustomerRecords();
  const arrayDataItem= co.customer.map((customer)=>
  <li>ID:{customer.id} | Name: {customer.name} | Age:{customer.age} | <button > Edit </button> | <button> Delete </button></li>)


  return (
    <>
      <div>Customer page</div>
      <div><p className="bg-blue-100 p-4 lg:px-48">List of customers</p></div>
      <button> Add customer </button>
      <ul>{arrayDataItem}</ul>
    </>
    )
  }
  