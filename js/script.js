// code solution here

function President (name, politicalParty, yearsInOffice, homeState){
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;

  President.prototype.veto = function(){
    return "NO!";
  };

  President.prototype.passBill = function(){
    return "You can do that!";
  };

  President.prototype.doCharity = function(){
    return "I like to help people.";
  };

  President.prototype.conductPressInterview = function(){
    return "I am proud to be an American.";
  };

  President.prototype.sayHi = function(){
    var out = "Hi, my name is " + this.name;
    out += ". I am from " + this.homeState;
    out += ". I represent the " + this.politicalParty;
    out += "s, and was in office " + this.yearsInOffice + ".";
    return out;
  };
};
