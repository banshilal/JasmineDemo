describe("Test person Object", function(){
    var person;
    beforeEach(function(){
        person = new Person('Brett', 'Lee', 30);
    });

    it("Get Correct Full Name", function(){
        expect(person.fullName()).toEqual("Brett Lee");
    });
   it("Check if age updated", function(){
    expect(person.getAge()).toEqual(30);
    person.setAge(35);
    expect(person.getAge()).toEqual(35);
   }) 
});






















// describe("Test Person Object", function(){
//     var person;
//     beforeEach(function(){
//         person = new Person('Brett', 'Lee', 40);
//     });
//     it("Get Correct Full Name", function(){
//         expect(person.fullName()).toEqual("Brett Lee");
//     });
//     it("Confirmed if age changed", function(){
//         expect(person.getAge()).toEqual(40);
//         person.setAge(45);
//         expect(person.getAge()).toEqual(45);
        
//     })
// });