Student = function(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

Student.namedJohn = function (lname) {
  return new Student("John", lname);
}

Student.prototype.name = function(){
  console.log( this.fname + " " + this.lname)
}

// jP = new Student("J", "P")
//
// jP.name()

var jp = Student.namedJohn("McDevitt");
jp.name();

Student.prototype.courses = function(){
  console.log( this.courses)
}

Student.prototype.enroll = function(course){
  if (courses.indexOf(course) === -1 ) {
    this.courses.push(course)
    course.students.push(this)
  }
};
