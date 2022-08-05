// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Courseninja{
     
    // bool completed;
     uint public price;
     string public courseName;
     //bool public claim;
     address public owner;

     address payable[] public studentAdd;

    //  struct totalinfo{
    //      string courseName;
    //      uint amount;
    //  }

     mapping(address=>string) public studentStatus;
     constructor(){
         price = 0.01 ether;
         owner = msg.sender;
         courseName = "Deep learning";
     }

     function enrollCourse() public payable {
         require(msg.value > .01 ether);
         studentAdd.push(payable(msg.sender));
         studentStatus[msg.sender] = courseName;
     }
    

     function getStudents() view public returns(address payable[] memory){
         return studentAdd;
     } 

     uint public index;
     function currentStudent() private returns(uint){
         for(uint i =0 ; i < studentAdd.length; i++)
         {
            if(studentAdd[i] == msg.sender)
            {
                index = i;
            }
         }
         return index;
     }


     bool status=true;
    function completionStatus() public returns(bool) {
        require(msg.sender == owner, "you are not owner");
         status = true;
        return status;
}
    

     function getRefund() public{
          //_index = index;
          //require(studentStatus[msg.sender]>0,"not a students"); 
          // require(status == true, "course is not completed");
           require(status == true, "course is not completed");    
           //contractaddress.balance
           //address contractaddress = address(this);
           uint actualcoursePrice = 0.01 ether;
           uint fund = actualcoursePrice * 5/100;  //5%
           studentAdd[currentStudent()].transfer(fund);
           //address contractaddress = address(this);
           //contractaddress.balance -= fund;  
         }

     }



