//Khai báo đối tượng studernt gồm id,name,avatar,grade
//in thông tin của h1,p và img
function About() {
   const student = {
       id:1,
       name: "Cao Van Duy Son",
       avatar: "/picture.jpg",
       age: 21, 
       grade:  "10A1"
    };
    console.log(student);
    return(
    <>
        <h1>This is the About Student</h1>
        <p>ID: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Grade: {student.grade}</p>
        <h3>Avatar: <img src={student.avatar} alt="Cao Van Duy Son" width="100" height="100"/></h3>
    </>
    );
}
export default About;