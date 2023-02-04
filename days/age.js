
function ageInDays()
{
  var birthdate = prompt('what date were you born.... Good friend?');
  var birthmonth = prompt('what month were you born... Good friend');
  var currentyear = prompt('Enter the current year');
  var birthyear = prompt('what is your birthyear?');
  var ageInDays = (30-birthdate)+(12-birthmonth)*30 + 365*(currentyear-birthyear);
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('you are ' + ageInDays + ' days old')
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);

}
function reset()
{
  document.getElementById('ageInDays').remove()
}
